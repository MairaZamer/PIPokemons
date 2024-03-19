import React from 'react';
import Card from "../Card/card"
import style from "./cards.module.css"

const Cards = ({ pokemones }) => {
    return (
        <div className={style.container}>
            {pokemones?.map(({ id, name, image, life, attaque, defense, speed, height, weight, types }) => {
                return (
                    <Card
                        key={id}
                        id={id}
                        name={name}
                        image={image}
                        life={life}
                        attaque={attaque}
                        defense={defense}
                        speed={speed}
                        height={height}
                        weight={weight}
                        types={types}
                    />
                )
            })}
        </div>
    );
}

export default Cards;