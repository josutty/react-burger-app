import React, { Component } from 'react';
import classes from './ContactData.module.css';
import Button from './../../../components/UI/Button/Button'
import axios from '../../../axios-order';
import Spinner from './../../../components/UI/Spinner/Spinner'
import {connect} from 'react-redux'

class ContactData extends Component {

    state = {
        name : '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event)=> {
        event.preventDefault();
        this.setState({loading:true})
        const order = {
            ingredients : this.props.ings,
            totalPrice: this.props.price,
            addresses : {
                name: 'jose',
                address: 'Pichappill(H), Muvattupuzha',
                mobile: 9496990645,
                country: 'India'
            },
            email : 'jthankachan8@gmail.com',
            delivery: 'fastest'
        }
        axios.post('/order.json',order)
        .then(response => {
            this.setState({loading: false});
            this.props.history.push('/');
        })
        .catch(error => this.setState({loading: false}))
    }

    render() {
        let form = (
            <form>
                    <input className={classes.Input} type="text" name="name" placeholder="enter your name"/>
                    <input className={classes.Input} type="email" name="email" placeholder="your email pls"/>
                    <input className={classes.Input} type="text" name="street" placeholder="Steet name"/>
                    <input className={classes.Input} type="text" name="postal" placeholder="Postal Code"/>
                    <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
                </form>
        );
        if(this.state.loading) {
            form =<Spinner/>
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                {form}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
       ings: state.ingredients,
       price: state.basePrice
    }
}

export default connect(mapStateToProps)(ContactData);