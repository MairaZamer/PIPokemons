import { Link } from "react-router-dom";
import style from "./card.module.css"

const Card = ({ id, name, image, types  }) =>{
    return(
        <div className={style.card}>
            <Link to={`/detail/${id}`}>
            <h1>{name}</h1>
            </Link>
            <img src={image} width={200} height={200}/>
            <h3>Types: {types}</h3>
        </div>
    );
}

export default Card;