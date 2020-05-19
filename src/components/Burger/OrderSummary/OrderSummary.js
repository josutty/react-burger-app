import React, { Component } from 'react';
import Auxilary from '../../../hoc/Auxilary/Auxilary'
import Button from './../../UI/Button/Button'

class OrderSummary extends Component {
    componentDidUpdate() {
        console.log("ordersummary did update")
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map((item) => {
            return (
                <li key={item}>
                    <span style={{ textTransform: 'capitalize' }}>{item}</span>:{this.props.ingredients[item]}
                </li>
            )
        })
        return (
            <Auxilary>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price : {this.props.totalPrice.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>
                <Button btnType="Danger" clicked={this.props.cancelPurchase}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.continuePurchase}>CONTINUE</Button>
            </Auxilary>
        )
    }
} 

export default OrderSummary;