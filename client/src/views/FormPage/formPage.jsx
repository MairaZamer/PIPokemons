import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPokemon, allTypes } from "../../Redux/actions";
import Validation from "./Validation";

const FormPage = () =>{
    const allTypesPoke = useSelector((state) => state?.newTypes);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [dataIsValid, setDataIsValid] = useState(false);
    const [data, setData] = useState({
        name: "",
        image: "",
        life: "",
        attaque: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        types: []
    })

    const handleChange = (event) => {
        if(event.target.name === "url") {
            setData({
                ...data,
                image: event.target.value
            });
        } else if(event.target.name === "types") {
            setData({
                ...data,
                types: [...data.types, event.target.value]
            });
        } else {
            setData({
                ...data,
                [event.target.name]: event.target.value,
            });
        }
        
    };

    const validateData = () => {
        return(
            !errors.name &&
            !errors.image &&
            !errors.life &&
            !errors.attaque &&
            !errors.defense &&
            !errors.speed &&
            !errors.height &&
            !errors.weight &&
            !errors.types
        );
    };

    useEffect(() =>{
        setDataIsValid(validateData());
    }, [errors]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = Validation(data);
        setErrors(validationErrors);
        setDataIsValid(Object.values(validationErrors).every(error => !error));
    };
    
    
    useEffect(() => {
        setDataIsValid(Object.values(errors).every(error => !error));
    }, [errors]);
    

    useEffect(() => {
        dispatch(allTypes())
    }, [dispatch]);


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                    <input type="text" name="name" value={data.name} onChange={handleChange}/>
                    {errors.name && <p>{errors.name}</p>}
                <br />

                <label>Image: </label>
                <input type="text" name="url" value={data.url} onChange={handleChange}/>
                {errors.image && <p>{errors.image}</p>}
                <br />
                <img src={data.image} style={{ width: "200px" }}/>
                <br />

                <label>Life: </label>
                <input type="text" name="life" value={data.life} onChange={handleChange}/>
                {errors.life && <p>{errors.life}</p>}
                <br />

                <label>Attack: </label>
                <input type="text" name="attaque" value={data.attaque} onChange={handleChange}/>
                {errors.attaque && <p>{errors.attaque}</p>}
                
                <br />

                <label>Defense: </label>
                <input type="text" name="defense" value={data.defense} onChange={handleChange}/>
                {errors.defense && <p>{errors.defense}</p>}
                <br />

                <label>Speed: </label>
                <input type="text" name="speed" value={data.speed} onChange={handleChange}/>
                {errors.speed && <p>{errors.speed}</p>}
                
                <br />

                <label>Height: </label>
                <input type="text" name="height" value={data.height} onChange={handleChange}/>
                {errors.height && <p>{errors.height}</p>}
                <br />

                <label>Weight: </label>
                <input type="text" name="weight" value={data.weight} onChange={handleChange}/>
                {errors.weight && <p>{errors.weight}</p>}
                <br />

                <label>Types: </label>
                <select 
                name="types"
                value={data.types}
                onChange={handleChange}
                >
                {allTypesPoke && Array.isArray(allTypesPoke) && allTypesPoke.map(types => 
                <option key={types.id} value={types.name}>{types.name}</option>
                )}

                </select>
                {data.types.length > 0 && <p>{data.types.join(", ")}</p>}
                <br />
                <button  disabled={!dataIsValid}>CREAR</button>
           
            </form>
        </div>
    );
}

export default FormPage;