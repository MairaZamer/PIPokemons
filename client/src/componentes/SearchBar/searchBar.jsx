import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemon, getPokeName } from "../../Redux/actions";
import { Link } from "react-router-dom"
import style from "./searchBar.module.css"

const SearchBar = ( { setCurrentPage } ) =>{
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const handleOnClick = async () =>{
        await dispatch(getPokeName(name));
        setName('');
    }

    const handleName = (event) => {
        setName(event.target.value)
    }

    const reset = () => {
        dispatch(getPokemon());
    }

    return(
        <div className={style.searchbar}>
            <input className={style.input} type="text" onChange={handleName} value={name}/>
            <button className={style.button} onClick={handleOnClick}>Search</button>
            <button className={style.button} onClick={reset}>Reset</button>

            <Link to="/form">
            <button className={style.button}>Form</button>
            </Link>
        </div>
    );
}

export default SearchBar;