import React from "react";
import classes from './BuildControls.css'
import BuildControl from './BuildControl'

const klasses = classes

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'bacon', type: 'bacon'},
    {label: 'meat', type: 'meat'},
    {label: 'cheese', type: 'cheese'},
]

const buildControls = (props) => {
    return (
        <div>
            <h2>
                Current Price ${props.totalPrice}
            </h2>
            <div className='BuildControls'>
                {controls.map(ctrl => (
                        <BuildControl
                            key={ctrl.label}
                            label={ctrl.label}
                            added={() => props.ingredientAdded(ctrl.type)}
                            removed={() => props.ingredientRemoved(ctrl.type)}
                            disabled={props.disabled[ctrl.type]}
                        />
                    )
                )}
            </div>
            <button
                className='OrderButton'
                // disabled={!props.purchaseable}
                onClick={() => {
                    props.ordered()
                }}
            >Buy
            </button>
        </div>
    )

}

export default buildControls;