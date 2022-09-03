import * as actionTypes from "./cart-types";

const INITIAL_STATE = {
    products: [], //id name unitprice imgurl
    cart: [],
    currentItem: null,
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            //get the items
            const item = state.products.find(
                (prod) => prod.id === action.payload.id
            );
            //check if item exists in cart
            const inCart = state.cart.find((item) =>
                item.id === action.payload.id ? true : false
            );

            return {
                // ...state, 
                // cart:inCart ? state.cart.map():
            };
        case actionTypes.REMOVE_FROM_CART:
            return {};
        case actionTypes.ADJUST_QUANTITY:
            return {};
        case actionTypes.LOAD_CURRENT_ITEM:
            return {};
        default:
            return state;
    }
};

export default cartReducer;
