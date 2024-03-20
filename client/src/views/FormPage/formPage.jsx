import './styles.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPokemon } from "../../Redux/actions";
import validation from "./validation";
import { Link } from "react-router-dom";
import style from "./form.module.css"

const FormPage = () => {
    const allTypes = useSelector((state) => state?.newTypes);
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});
    const [dataIsValid, setDataIsValid] = useState(false);
    const [data, setData] = useState({
        name: '',
        life: '',
        attaque: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        types: [],
    })

    const handleChange = (event) => {
        if (event.target.name === "types") {
            setData({
                ...data,
                types: [...data.types, event.target.value]
            });
        } else {
            setData({
                ...data,
                [event.target.name]: event.target.value,
            });
            setErrors(validation({
                ...data,
                [event.target.name]: event.target.value,
            }));
        }
    }
    
    const validateData = () => {
        return (
            !errors.name &&
            !errors.life &&
            !errors.attaque &&
            !errors.defense &&
            !errors.speed &&
            !errors.height &&
            !errors.weight &&
            !errors.types
        );
    }
    useEffect(() => {
        setDataIsValid(validateData());
    }, [errors]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (dataIsValid) {
            const poke = {
                name: data.name,
                image: 'https://media.a24.com/p/60806aecca07f9f60ad73ffc9b86e0e3/adjuntos/296/imagenes/008/766/0008766338/1200x675/smart/pokemon-netjpg.jpg',
                life: data.life,
                attaque: data.attaque,
                defense: data.defense,
                speed: data.speed,
                height: data.height,
                weight: data.weight,
                types: data.types
    
            }
            dispatch(createPokemon(poke))
        } else {
            alert('Por favor, complete todos los campos correctamente');
        }
    }

    return (
        <div className={style.main}>
            <h1 className={style.mainTitle}>Crea a tu pokemon♥</h1>
            <form className={style.container} onSubmit={handleSubmit}>
            <div className={style.formGroup}>
                <label className={style.title}>Name: </label>
                <br />
                <input type='text' name='name' value={data.name} onChange={handleChange} />
                {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                <br />
                
                <label className={style.title}>Life: </label>
                <br />
                <input type='text' name='life' value={data.life} onChange={handleChange} />
                {errors.life && <p style={{ color: 'red' }}>{errors.life}</p>}
                <br />
                <label className={style.title}>Attack: </label>
                <br />
                <input type='text' name='attaque' value={data.attaque} onChange={handleChange} />
                {errors.attaque && <p style={{ color: 'red' }}>{errors.attaque}</p>}
                <br />
                <label className={style.title}>Defense: </label>
                <br />
                <input type='text' name='defense' value={data.defense} onChange={handleChange} />
                {errors.defense && <p style={{ color: 'red' }}>{errors.defense}</p>}
                <br />
                <label className={style.title}>Speed: </label>
                <br />
                <input type='text' name='speed' value={data.speed} onChange={handleChange} />
                {errors.speed && <p style={{ color: 'red' }}>{errors.speed}</p>}
                <br />
                <label className={style.title}>Height: </label>
                <br />
                <input type='text' name='height' value={data.height} onChange={handleChange} />
                {errors.height && <p style={{ color: 'red' }}>{errors.height}</p>}
                <br />
                <label className={style.title}>Weight: </label>
                <br />
                <input type='text' name='weight' value={data.weight} onChange={handleChange} />
                {errors.weight && <p style={{ color: 'red' }}>{errors.weight}</p>}
                <br />
                <label className={style.title}>Types: </label>
                <br />
                <select className={style.selectContainer} name='types' onChange={handleChange}>
                    {allTypes && Array.isArray(allTypes) && allTypes.map((types) =>
                        <option key={types.name} value={types.name}>
                            {types.name}
                        </option>
                    )}
                </select>
                {data.types.length > 0 && <p>{data.types.join(',')}</p>}
                </div>
                <br />
                <button className={style.button} disabled={!dataIsValid}>Create</button>
                <button className={style.button}>
                    <Link to={'/home'} > Home </Link>
                </button>    
            </form>
        </div>
    );
}

export default FormPage;
