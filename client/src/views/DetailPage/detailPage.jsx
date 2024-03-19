import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getById } from "../../Redux/actions";

const DetailPage = () =>{
    const { id } = useParams();
    const dispatch = useDispatch();
    const allPoke = useSelector((state) => state?.detailsPoke)

    useEffect(() =>{
        dispatch(getById(id));
    }, [id]);

    return(
        <div>
            <h2>Name: {allPoke?.name}</h2>
            <img src={allPoke?.image} width={200} height={200}/>
            <h2>Life: {allPoke?.life}</h2>
            <h2>Attaque: {allPoke?.attaque}</h2>
            <h2>Defense: {allPoke?.defense}</h2>
            <h2>Speed: {allPoke?.speed}</h2>
            <h2>Height: {allPoke?.height}</h2>
            <h2>Weight: {allPoke?.weight}</h2>
            <h2>Types: {allPoke?.types && allPoke?.types.join(", ")}</h2>

            <Link to="/home">
            <button >Home</button>
            </Link>
        </div>
    );
}

export default DetailPage;