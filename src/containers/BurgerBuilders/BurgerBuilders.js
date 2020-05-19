import React, { Component } from 'react';
import Auxilary from '../../hoc/Auxilary/Auxilary'
import Burger from './../../components/Burger/Burger';
import BuildControls from './../../components/Burger/BuildControls/BuildControls'
import Modal from './../../components/UI/Modal/Modal'
import OrderSummary from './../../components/Burger/OrderSummary/OrderSummary'
import Spinner from './../../components/UI/Spinner/Spinner';
import * as actionType from './../../store/action';
import {connect} from 'react-redux'

class BurgerBuilders extends Component {
    state = {
        purchasing: false,
        loading : false
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients).map((item) => {
            return ingredients[item]
        }).reduce((sum, el) => {
            return sum + el;
        }, 0)
        return sum > 0;
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing : false})
    }

    purchaseContinueHandler =() => {
        this.props.history.push('/checkout');
    }

    orderNowClicked = () => {
        this.setState({purchasing : true})
    }

    render () {
        let orderSummary = <OrderSummary
            ingredients={this.props.ings}
            cancelPurchase={this.purchaseCancelHandler}
            totalPrice={this.props.basePrice}
            continuePurchase={this.purchaseContinueHandler} />
        if(this.state.loading) {
            orderSummary =  <Spinner/>
        }
        let disableIngredientsList = {...this.props.ings};
        for(let val in disableIngredientsList ) {
            disableIngredientsList[val] =  disableIngredientsList[val] <= 0;
        }
        return (
            <Auxilary>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                <Burger receipeIngredient={this.props}/>
                <BuildControls 
                  ingredientsAdded = {this.props.onIngredientAdded}
                  ingredientsRemoved = {this.props.onIngredientRemoved}
                  disabled = {disableIngredientsList}
                  totalPrice = {this.props.basePrice}
                  purchasable = {this.updatePurchaseState(this.props.ings)}
                  ordered = {this.orderNowClicked}/>
            </Auxilary>  
        )
    }
}

const mapsToProps = state=> {
    return {
        ings: state.ingredients,
        basePrice : state.basePrice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded : (ingName)=> dispatch({type: actionType.ADD_INGREDIENT, ingredientName: ingName}),
        onIngredientRemoved : (ingName)=> dispatch({type: actionType.REMOVE_INGREDIENT, ingredientName: ingName}),
    }
}

export default connect(mapsToProps,mapDispatchToProps)(BurgerBuilders);