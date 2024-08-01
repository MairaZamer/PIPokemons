import './styles.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPokemon } from "../../Redux/actions";
import validation from "./Validation";
import { Link, useNavigate } from "react-router-dom";
import style from "./form.module.css";

const FormPage = () => {
    const allTypes = useSelector((state) => state?.newTypes);
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === "types") {
            setData(prevData => ({
                ...prevData,
                types: [...prevData.types, value]
            }));
        } else {
            setData(prevData => ({
                ...prevData,
                [name]: value,
            }));
            setErrors(validation({
                ...data,
                [name]: value,
            }));
        }
    };
    
    const validateData = () => {
        return !Object.values(errors).some(error => error);
    };

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
            };
            dispatch(createPokemon(poke));
        } else {
            alert('Por favor, complete todos los campos correctamente');
        }
    };

    return (
        <div className={style.main}>
            <h1 className={style.mainTitle}>Crea a tu Pokémon ♥</h1>
            <form className={style.container} onSubmit={handleSubmit}>
                <div className={style.formGroup}>
                    <label className={style.label}>Nombre:</label>
                    <input
                        type='text'
                        name='name'
                        value={data.name}
                        onChange={handleChange}
                        placeholder='Nombre del pokemon'
                        className={style.input}
                    />
                    {errors.name && <p className={style.error}>{errors.name}</p>}
                </div>
                
                <div className={style.formGroup}>
                    <label className={style.label}>Vida:</label>
                    <input
                        type='text'
                        name='life'
                        value={data.life}
                        onChange={handleChange}
                        placeholder='Vida del pokemon'
                        className={style.input}
                    />
                    {errors.life && <p className={style.error}>{errors.life}</p>}
                </div>

                <div className={style.formGroup}>
                    <label className={style.label}>Ataque:</label>
                    <input
                        type='text'
                        name='attaque'
                        value={data.attaque}
                        onChange={handleChange}
                        placeholder='Ataque del pokemon'
                        className={style.input}
                    />
                    {errors.attaque && <p className={style.error}>{errors.attaque}</p>}
                </div>

                <div className={style.formGroup}>
                    <label className={style.label}>Defenza:</label>
                    <input
                        type='text'
                        name='defense'
                        value={data.defense}
                        onChange={handleChange}
                        placeholder='Defenza del pokemon'
                        className={style.input}
                    />
                    {errors.defense && <p className={style.error}>{errors.defense}</p>}
                </div>

                <div className={style.formGroup}>
                    <label className={style.label}>Velocidad:</label>
                    <input
                        type='text'
                        name='speed'
                        value={data.speed}
                        onChange={handleChange}
                        placeholder='Velocidad del pokemon'
                        className={style.input}
                    />
                    {errors.speed && <p className={style.error}>{errors.speed}</p>}
                </div>

                <div className={style.formGroup}>
                    <label className={style.label}>Altura:</label>
                    <input
                        type='text'
                        name='height'
                        value={data.height}
                        onChange={handleChange}
                        placeholder='Altura del pokemon'
                        className={style.input}
                    />
                    {errors.height && <p className={style.error}>{errors.height}</p>}
                </div>

                <div className={style.formGroup}>
                    <label className={style.label}>Peso:</label>
                    <input
                        type='text'
                        name='weight'
                        value={data.weight}
                        onChange={handleChange}
                        placeholder='Peso del pokemon'
                        className={style.input}
                    />
                    {errors.weight && <p className={style.error}>{errors.weight}</p>}
                </div>

                <div className={style.formGroup}>
                    <label className={style.label}>Tipos:</label>
                    <select
                        className={style.select}
                        name='types'
                        onChange={handleChange}
                    >
                        {allTypes && Array.isArray(allTypes) && allTypes.map((type) => (
                            <option key={type.name} value={type.name}>{type.name}</option>
                        ))}
                    </select>
                    {data.types.length > 0 && <p className={style.selectedTypes}>{data.types.join(', ')}</p>}
                </div>

                <div className={style.buttonGroup}>
                    <button type='submit' className={style.button} disabled={!dataIsValid}>Create</button>
                    <button type='button' className={style.button} onClick={() => navigate('/home')}>Home</button>
                </div>
            </form>
        </div>
    );
}

export default FormPage;
