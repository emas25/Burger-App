import React from 'react';
import BuildControl from './BuildControl/BuildControl';

import classes from './BuildControls.css';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Bacon', type: 'bacon'}
]

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Total price: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map((ingredient, index) => {
                return <BuildControl 
                            key={ingredient + index} 
                            label={ingredient.label} 
                            add={() => props.add(ingredient.type)}
                            remove={() => props.remove(ingredient.type)}
                            disabled={props.disabledControls[ingredient.type]}/>
            })}
            <button 
                className={classes.OrderButton} 
                disabled={props.orderDisabled}
                onClick={props.order}>ORDER NOW</button>
        </div>
    )
}

export default buildControls;