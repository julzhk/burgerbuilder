import React, {Component} from 'react';
import Aux from '../hoc/Aux'
import Burger from "../components/Burger/Burger";
import BuildControls from '../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    'salad': 3,
    'cheese': 3,
    'meat': 5,
    'bacon': 7

}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4.00,
        purchaseable:false
    }
    updatePurchaseableState = (ingredients) =>{
        const sum = Object.keys(ingredients).map(igKey=>{
            return ingredients[igKey]
        }).reduce( (sum, el)=>{
            return (sum + el)
        }, 0)
        console.log(sum)
        this.setState({purchaseable: (sum >=1)})
    };


    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAdditions = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice + priceAdditions
        this.setState({
                totalPrice: newPrice,
                ingredients: updatedIngredients
            }
        )
        this.updatePurchaseableState(updatedIngredients)
    }
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount - 1;
        if (oldCount <=0){
            return;
        }
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAdditions = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice - priceAdditions
        this.setState({
                totalPrice: newPrice,
                ingredients: updatedIngredients
            }
        )
        this.updatePurchaseableState(updatedIngredients)
    }

    render() {
        const disableInfo = {
            ...this.state.ingredients
        }
        for (let key in disableInfo){
            disableInfo[key] = disableInfo[key] <=0
        }
        return (
            <Aux>
                <div>
                    <Burger ingredients={this.state.ingredients}/>
                </div>
                <div>
                    <BuildControls
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemoved={this.removeIngredientHandler}
                        disabled={disableInfo}
                        totalPrice={this.state.totalPrice}
                        purchaseable = {!this.state.purchaseable}
                    />
                </div>
            </Aux>
        );
    }
}

export default BurgerBuilder