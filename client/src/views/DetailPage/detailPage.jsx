import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getById } from "../../Redux/actions";
import "./DetailPage.css"; // Importa el archivo CSS

const DetailPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const allPoke = useSelector((state) => state?.detailsPoke)

    useEffect(() => {
        dispatch(getById(id));
    }, [id]);

    return (
        <div class="container">
            <div class="card">
                <img className="detail-image" src={allPoke?.image} alt="Pokemon" />
                <div class="card-info">
                    <h2 className="detail-title">Name: {allPoke?.name}</h2>
                    <h2 className="detail-stat">Life: {allPoke?.life}</h2>
                    <h2 className="detail-stat">Attaque: {allPoke?.attaque}</h2>
                    <h2 className="detail-stat">Defense: {allPoke?.defense}</h2>
                    <h2 className="detail-stat">Speed: {allPoke?.speed}</h2>
                    <h2 className="detail-stat">Height: {allPoke?.height}</h2>
                    <h2 className="detail-stat">Weight: {allPoke?.weight}</h2>
                    <div className="detail-types">
                        <h2 className="detail-types-title">Types:</h2>
                        <ul className="detail-types-list">
                            {allPoke?.types && allPoke?.types.map((type, index) => (
                                <li key={index} className="detail-types-item">{type}</li>
                            ))}
                        </ul>
                    </div>


                    <Link to="/home">
                        <button className="button">Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default DetailPage;
