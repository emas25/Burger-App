import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients).map((key, index) => {
        return [...Array(props.ingredients[key])].map((el,idx) => {
            return <BurgerIngredient key={key + idx} type={key}/>
        });
    }).reduce((arr,el) => {
        return arr.concat(el);
    },[]); 
    console.log(transformedIngredients);

    if(transformedIngredients.length === 0)
        transformedIngredients = <p>Please start adding ingredients!</p>;

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    )
}

export default burger;