import React, {Component} from 'react';
import Aux from '../hoc/Aux/Aux'
import Burger from "../components/Burger/Burger";
import BuildControls from '../components/Burger/BuildControls/BuildControls'
import Modal from '../components/UI/Modal/Modal'
import OderSummary from '../components/Burger/OrderSummary/OrderSummary'
import axios from '../axios-orders'
import Spinner from "../components/UI/Spinner/Spinner";
import withErrorHandler from "../hoc/withErrorHandler/WithErrorHandler";

const INGREDIENT_PRICES = {
    'salad': 3,
    'cheese': 3,
    'meat': 5,
    'bacon': 7

}

class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 4.00,
        purchaseable: false,
        purchasing: false,
        loading: false,
    }

    componentDidMount() {
        axios.get('https://burgerbuilder-b8e8d.firebaseio.com/ingredients.json').then(
             (response)=> {
                this.setState({ingredients: response.data})
            }
        )
    }

    updatePurchaseableState = (ingredients) => {
        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey]
        }).reduce((sum, el) => {
            return (sum + el)
        }, 0);
        this.setState({purchaseable: (sum >= 1)})
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
        if (oldCount <= 0) {
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


    purchaseHandler = () => {
        this.setState({purchasing: true})
    }
    purchaseCancelHandler = () => {
        console.log('fail')
        this.setState({purchasing: false})
    }
    purchaseContinueHandler = () => {
        this.setState({loading: true})
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'self self',
                address: {
                    street: 'high street',
                    country: 'uk'
                },
                email: 'self@example.com',
                deliveryMethod: 'fastest'
            }
        }
        axios.post('/orders', order)
            .then((response) => {
                    this.setState({
                        purchasing: false,
                        loading: false,
                    })
                    console.log(response)
                }
            ).catch(error => {
            this.setState({
                purchasing: false,
                loading: false
            })
            console.log(error)
        });

    }

    render() {
        const disableInfo = {
            ...this.state.ingredients
        }
        let orderSummary = <Spinner/>
        let burger = <Spinner/>
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0
        }

        if (this.state.ingredients) {
            burger = <Aux>
                <div>
                    <Burger ingredients={this.state.ingredients}/>
                </div>
                <div>
                    <BuildControls
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemoved={this.removeIngredientHandler}
                        disabled={disableInfo}
                        totalPrice={this.state.totalPrice}
                        purchaseable={!this.state.purchaseable}
                        ordered={this.purchaseHandler}
                    />
                </div>
            </Aux>
            orderSummary = <OderSummary ingredients={this.state.ingredients}
                                        purchaseCancelled={this.purchaseCancelHandler}
                                        purchaseContinues={this.purchaseContinueHandler}
                                        price={this.state.totalPrice}
            />;

        }
        if (this.state.loading) {
            orderSummary = <Spinner/>
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <div>
                        {orderSummary}
                    </div>
                </Modal>
                {burger}
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios)