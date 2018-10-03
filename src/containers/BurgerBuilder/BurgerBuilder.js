import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7 
}

class BurgerBuilder extends Component{

    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            meat: 0,
            bacon: 0
        },
        price: 4,
        purchasable: false,
        purchasing: false
    }

    updatePurchaseState (updatedIngredients) {
        const ingredients = {
            ...updatedIngredients
        }
        const purchasable2 = !Object.keys(ingredients).every(ingredient => ingredients[ingredient] <= 0);
        console.log(purchasable2);
        this.setState({purchasable: purchasable2});
    }

    addIngredientHandler = (type) => {
        const newIngredients = {...this.state.ingredients};
        const newPrice = this.state.price + INGREDIENT_PRICES[type];
        newIngredients[type]++;
        this.setState({ingredients: newIngredients, price: newPrice})
        this.updatePurchaseState(newIngredients);
    }

    removeIngredientHandler = (type) => {
        const newIngredients = {...this.state.ingredients};
        const newPrice = this.state.price - INGREDIENT_PRICES[type];
        if(newIngredients[type] > 0) {
            newIngredients[type]--;
            this.setState({ingredients: newIngredients, price: newPrice});
            this.updatePurchaseState(newIngredients);
        }
    }

    purchaseContinueHandler = () => {
        alert('Continue');
    }

    purchaseCancelHandler = () => {
        this.setState({
            purchasing: false
        });
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    render(){
        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] > 0 ? false : true;
        }
        const orderDisabled = Object.keys(this.state.ingredients).every(ingredient => this.state.ingredients[ingredient] <= 0);

        return (
            <Aux>
                <Modal show={this.state.purchasing} exitModal={this.purchaseCancelHandler}>
                    <OrderSummary 
                        ingredients={this.state.ingredients} 
                        price={this.state.price.toFixed(2)}
                        purchasingCancel={this.purchaseCancelHandler}
                        purchasingContinue={this.purchaseContinueHandler}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    price={this.state.price}
                    disabledControls={disabledInfo}
                    add={this.addIngredientHandler} 
                    remove={this.removeIngredientHandler}
                    orderDisabled={!this.state.purchasable} 
                    order={this.purchaseHandler}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;