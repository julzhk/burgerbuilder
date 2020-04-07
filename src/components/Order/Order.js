import React from "react";
import classes from './Order.module.css'

const order = (props) => {
    const ingredients = []
    for (let ingredientKey in props.ingredients) {
        ingredients.push(
            {
                ingredient: ingredientKey,
                amount: props.ingredients[ingredientKey]
            }
        )
    }
    console.log(ingredients)
    return (<div className={classes.Order}>
        <p>Ingredients: {ingredients.map((ele) => {
            return (
                <span key={ele.ingredient}> <span style={
                    {
                        textTransform: 'Capitalize',
                        display: 'inline-block',
                        margin: '0 9px',
                        padding: '5px',
                        border: '1px solid grey'
                    }
                }>{ele.ingredient} ({ele.amount})</span></span>
            )
        })}
        </p>
        <p>Price: ${props.price.toFixed(2)}</p>
    </div>)
}
export default order;