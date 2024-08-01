import { Link } from "react-router-dom";
import style from "./card.module.css"

const Card = ({ id, name, image, types  }) =>{
    return(
        <div className={style.card}>
            <h1>{name}</h1>
            <Link to={`/detail/${id}`}>
            <img src={image} width={200} height={200}/>
            </Link>
            <h3>{types}</h3>
        </div>
    );
}

export default Card;