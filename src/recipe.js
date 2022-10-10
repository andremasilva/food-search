import React from "react";
import style from './recipe.module.css';

const Recipe = ({ title, image, ingredients }) => {
    return (
        <section className={style.recipe}>
            <h1>{title}</h1>
            <ul>
                {ingredients.map(ingredients => (
                    <li>{ingredients.text}</li>
                ))}
            </ul>
            <img className={style.recipe} src={image} alt="" />
        </section>
    )
}

export default Recipe