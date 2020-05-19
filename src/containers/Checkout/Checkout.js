import React, { Component } from 'react';
import CheckoutSummary from './../../components/Order/CheckoutSummary/CheckoutSummary'
import {Route} from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import {connect} from 'react-redux'

class Checkout extends Component {

    checkoutCancelHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinueHandler = () => {
        this.props.history.push('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary ings = {this.props.ings} cancelHandler={this.checkoutCancelHandler} continueHandler={this.checkoutContinueHandler}/>
                <Route path={this.props.match.path + '/contact-data'} component={ContactData} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
       ings: state.ingredients
       
    }
}

export default connect(mapStateToProps)(Checkout);