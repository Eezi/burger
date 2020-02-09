import React, { Component } from 'react';
<<<<<<< HEAD
import {connect} from 'react-redux';
import Aux from '../../hoc/Pux';
=======

import Aux from '../../hoc/Aux';
>>>>>>> a5722f90856dacd2fff63f7375f1f2d1246f7f9d
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
<<<<<<< HEAD
import * as actionTypes from '../../store/actions';

=======

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};
>>>>>>> a5722f90856dacd2fff63f7375f1f2d1246f7f9d

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
<<<<<<< HEAD
    state = {   
=======
    state = {
        ingredients: null,
            
        totalPrice: 4,
        purchasable: false,
>>>>>>> a5722f90856dacd2fff63f7375f1f2d1246f7f9d
        purchasing: false,
        loading: false,
        error: false
    }
    //Haetaan dataa firebase databasesta
    componentDidMount () {
<<<<<<< HEAD
        /*axios.get('https://react-burger-57c92.firebaseio.com/ingredients.json')
=======
        axios.get('https://react-burger-57c92.firebaseio.com/ingredients.json')
>>>>>>> a5722f90856dacd2fff63f7375f1f2d1246f7f9d
            .then(response => {
                this.setState({ingredients: response.data})
            })
            .catch(error => {
                this.setState({error: true})
<<<<<<< HEAD
            });*/
=======
            });
>>>>>>> a5722f90856dacd2fff63f7375f1f2d1246f7f9d
    }

    //Lasketaan kaikkien aineksien hinnat yhteen 
    updatePurchaseState (ingredients) {
        const sum = Object.keys( ingredients )
            .map( igKey => {
                return ingredients[igKey];
            } )
            .reduce( ( sum, el ) => {
                return sum + el;
            }, 0 );
<<<<<<< HEAD
        return sum > 0;
=======
        this.setState( { purchasable: sum > 0 } );
    }
    //Lisätään aineksia
    addIngredientHandler = ( type ) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } );
        this.updatePurchaseState(updatedIngredients);
    }
    //Vähennetään aineksia
    removeIngredientHandler = ( type ) => {
        const oldCount = this.state.ingredients[type];
        if ( oldCount <= 0 ) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } );
        this.updatePurchaseState(updatedIngredients);
>>>>>>> a5722f90856dacd2fff63f7375f1f2d1246f7f9d
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
        
    }

    purchaseContinueHandler = () => {
<<<<<<< HEAD
            this.props.history.push('/checkout');
=======
    /*   */
            const queryParams = [];
            for (let i in this.state.ingredients) {
                queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
            }
            queryParams.push('price=' + this.state.totalPrice);
            const queryString = queryParams.join('&');
            this.props.history.push({
                pathname: '/checkout',
                search: '?' + queryString
            });
>>>>>>> a5722f90856dacd2fff63f7375f1f2d1246f7f9d
    }
    
    render () {
        //vähennys nappula pois käytöstä jos ei ole aineksia yhtään
        const disabledInfo = {
<<<<<<< HEAD
            ...this.state.ings
=======
            ...this.state.ingredients
>>>>>>> a5722f90856dacd2fff63f7375f1f2d1246f7f9d
        };
        for ( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let orderSummary = null;
        let burger = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;

<<<<<<< HEAD
        if ( this.props.ings ) {
            burger = (
                <Aux>
                    <Burger ingredients={this.props.ings} />
                    <BuildControls
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemoved}
                        disabled={disabledInfo}
                        purchasable={this.updatePurchaseState(this.props.ings)}
                        ordered={this.purchaseHandler}
                        price={this.props.price} />
                </Aux>
            );
            orderSummary = <OrderSummary
                ingredients={this.props.ings}
                price={this.props.price}
=======
        if ( this.state.ingredients ) {
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemoved={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        purchasable={this.state.purchasable}
                        ordered={this.purchaseHandler}
                        price={this.state.totalPrice} />
                </Aux>
            );
            orderSummary = <OrderSummary
                ingredients={this.state.ingredients}
                price={this.state.totalPrice}
>>>>>>> a5722f90856dacd2fff63f7375f1f2d1246f7f9d
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler} />;
        }
        if ( this.state.loading ) {
            orderSummary = <Spinner />;
        }
        // {salad: true, meat: false, ...}
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}
<<<<<<< HEAD
const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    }
}

const mapDishpatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENTS, ingredientName: ingName}),
        onIngredientRemoved: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName})
    }
}

export default connect(mapStateToProps, mapDishpatchToProps)(withErrorHandler( BurgerBuilder, axios ));
=======

export default withErrorHandler( BurgerBuilder, axios );
>>>>>>> a5722f90856dacd2fff63f7375f1f2d1246f7f9d
