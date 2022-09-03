import * as actiontypes from "./cart-types";

export const addToCart = (ItemID) => {
    return {
        type: actiontypes.ADD_TO_CART,
        payload: {
            id: ItemID,
        },
    };
};
export const removeFromCart = (ItemID) => {
    return {
        type: actiontypes.REMOVE_FROM_CART,
        payload: {
            id: ItemID,
        },
    };
};

export const adjustQuantity = (ItemID, value) => {
    return {
        type: actiontypes.ADJUST_QUANTITY,
        payload: {
            id: ItemID,
            quantity: value,
        },
    };
};

export const loadCurrItem = (item) => {
    return {
        type: actiontypes.LOAD_CURRENT_ITEM,
        payload: item,
    };
};
