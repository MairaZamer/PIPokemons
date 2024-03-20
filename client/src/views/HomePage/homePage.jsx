import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getPokemon, allTypes, orderAlfab, orderAtaque, filterDbApi, filterType } from "../../Redux/actions";
import Cards from '../../componentes/Cards/cards';
import SearchBar from '../../componentes/SearchBar/searchBar';
import style from "./home.module.css"

const POKE_POR_PAG = 12;

const HomePage = () => {

    const allTYPE = useSelector((state) => state?.newTypes)
    const allPoke = useSelector((state) => state?.pokemones);
    const [types, setTypes] = useState("");
    const dispatch = useDispatch();

    const totalPokemon = allPoke?.length;
    const totalPage = Math.ceil(totalPokemon / POKE_POR_PAG)
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        dispatch(getPokemon());
    }, [dispatch]);

    // PAGINADO

    const startIndex = currentPage * POKE_POR_PAG;
    const endIndex = startIndex + POKE_POR_PAG;
    const pokeToDisplay = Array.isArray(allPoke) ? allPoke.slice(startIndex, endIndex) : [];


    const nextHandler = () => {
        if (currentPage < totalPage - 1) {
            setCurrentPage(currentPage + 1)
        }
    };

    const prevHandler = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }

    const resetHandler = () => {
        setCurrentPage(0);
    }

    // //ORDER

    const handleOrder = (event) => {
        dispatch(orderAlfab(event.target.value))
        setCurrentPage(0)
    };

    const handlerOrderAttaque = (event) => {
        setCurrentPage(0)
        dispatch(orderAtaque(event.target.value))
    }

    // //FILTERS   

    const handleFilterDbApi = (event) => {
        dispatch(filterDbApi(event.target.value))
        setCurrentPage(0)
    };

    const handlerFilter = (event) => {
        const select = event.target.value;
        setTypes(select);
        dispatch(filterType(select))
        setCurrentPage(0);
    };

    useEffect(() => {
        dispatch(allTypes())
    }, [dispatch]);


    return (
        <div >
            <SearchBar setCurrentPage={setCurrentPage} />

            <div className={style.selectContainer}>
            <select  onChange={handleOrder}>
                <option value='A'>A-Z</option>
                <option value='Z'>Z-A</option>
            </select>

            <select  onChange={handlerOrderAttaque}>
                <option value='ataqueMin'>Ataque min</option>
                <option value='ataqueMax'>Ataque max</option>
            </select>

            <select  onChange={handleFilterDbApi}>
                <option value='api'>API</option>
                <option value='db'>DB</option>
            </select>

            <select 
                onChange={handlerFilter}>
                {allTYPE && Array.isArray(allTYPE) && allTYPE.map(types => <option name={types.name} key={types.key} value={types.name}>{types.name}</option>)}
            </select>
            </div>
            <div>
            <Cards pokemones={pokeToDisplay} />
            </div>
            
            <div className={style.paginado}>
            <button className={style.button} onClick={prevHandler} disabled={currentPage === 0} >Prev</button>
            <span>Pagina: {currentPage + 1} de {totalPage}</span>
            <button className={style.button} onClick={nextHandler} disabled={currentPage === totalPage - 1}>Next</button>
        
            <button className={style.button} onClick={resetHandler}>Reset</button>
            </div>
        </div>
    );
}

export default HomePage;
