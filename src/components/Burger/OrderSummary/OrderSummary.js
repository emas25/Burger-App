import React from 'react'
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map((ingredient) => {
        return (
            <li key={ingredient}><span style={{textTransform: "capitalize"}}>{ingredient}</span>: {props.ingredients[ingredient]}</li>
        )
    })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price: {props.price}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType='Danger' clicked={props.purchasingCancel}>CANCEL</Button>
            <Button btnType='Success' clicked={props.purchasingContinue}>CONTINUE</Button>
        </Aux>
    )
}

export default orderSummary;