import React, {Component} from 'react'
import {Route} from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'
<<<<<<< HEAD
import {connect } from 'react-redux';


class Checkout extends Component {
 
=======


class Checkout extends Component {
    state = {
        ingredients: null,
        price: 0
    }

    componentWillMount () {
        const query = new URLSearchParams( this.props.location.search );
        const ingredients = {};
        let price = 0;
        for ( let param of query.entries() ) {
            // ['salad', '1']
            if (param[0] === 'price') {
                price = param[1];
            } else {
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState( { ingredients: ingredients, totalPrice: price } );
    }

>>>>>>> a5722f90856dacd2fff63f7375f1f2d1246f7f9d
    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace( '/checkout/contact-data' );
    }

    render () {
        return (
            <div>
                <CheckoutSummary
<<<<<<< HEAD
                    ingredients={this.props.ings}
=======
                    ingredients={this.state.ingredients}
>>>>>>> a5722f90856dacd2fff63f7375f1f2d1246f7f9d
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler} />
                <Route 
                    path={this.props.match.path + '/contact-data'} 
<<<<<<< HEAD
                    component={ContactData}/>
=======
                    render={(props) => (<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...props} />)} />
>>>>>>> a5722f90856dacd2fff63f7375f1f2d1246f7f9d
            </div>
        );
    }
}
<<<<<<< HEAD
//Connectataan pelkkä data tänne
const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        
    }
}

export default connect(mapStateToProps)(Checkout);
=======

export default Checkout;
>>>>>>> a5722f90856dacd2fff63f7375f1f2d1246f7f9d
