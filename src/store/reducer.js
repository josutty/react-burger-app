import * as actionTypes from './action';

const initialState = {
    ingredients: {
        salad: 0,
        meat: 0,
        bacon: 0,
        cheese: 0 
    },
    basePrice: 4
}

const INGREDIENTS_PRICE = {
    salad : 10,
    meat : 50,
    bacon : 10,
    cheese : 5
}

const reducer = (state = initialState, action)=> {
    switch(action.type) {
        case(actionTypes.ADD_INGREDIENT):
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                basePrice: state.basePrice + INGREDIENTS_PRICE[action.ingredientName]
            }
        case(actionTypes.REMOVE_INGREDIENT):
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                basePrice: state.basePrice - INGREDIENTS_PRICE[action.ingredientName]
            }
        default : 
            return state
    }

}

export default reducer