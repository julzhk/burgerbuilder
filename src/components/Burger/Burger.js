import React from 'react';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = (props) => {
    return (
        <div className='Burger'>
            <BurgerIngredient type='bread-top'/>
            <BurgerIngredient type='cheese'/>
            <BurgerIngredient type='meat'/>
            <BurgerIngredient type='salad'/>
            <BurgerIngredient type='bacon'/>
            <BurgerIngredient type='bread-bottom'/>
            Your Burger
        </div>
    )
};

export default Burger