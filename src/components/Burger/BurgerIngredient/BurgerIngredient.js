import React, {Component} from 'react';
import propTypes from 'prop-types'
import classes from './BurgerIngredient.css'

class BurgerIngredient extends Component {

    render() {
        const klsses = classes;
        let ingredient = null;
        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className='BreadBottom'></div>;
                break;
            case ('bread-top'):
                ingredient = (<div className='BreadTop'>
                    <div className='Seeds1'></div>
                    <div className='Seeds2'></div>
                </div>);
                break;
            case ('meat'):
                ingredient = (<div className='Meat'>
                </div>);
                break;
            case ('bacon'):
                ingredient = (<div className='Bacon'>
                </div>);
                break;
            case ('salad'):
                ingredient = (<div className='Salad'>
                </div>);
                break;
            case ('cheese'):
                ingredient = (<div className='Cheese'>
                </div>);
                break;
            default:
                ingredient = null;
        }
        return ingredient;
    };
}

BurgerIngredient.propTypes = {
    type: propTypes.string.isRequired
};

export default BurgerIngredient;