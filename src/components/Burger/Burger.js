import React from 'react';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from './Burger.css'

const klasses = classes
const Burger = (props) => {
    //get keys of ingredients state object
    let transformedingredients = Object.keys(props.ingredients).map(
        (igKey) => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient type={igKey} key={igKey + i}/>
            })
        }).reduce((arr, el) => {
        return arr.concat(el)
    }, []);
    if (transformedingredients.length === 0) {
        transformedingredients = <p>
            Please add something yummy!
        </p>
    }
    return (
        <div className='Burger'>
            <BurgerIngredient type='bread-top'/>
            {transformedingredients}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    )
};

export default Burger