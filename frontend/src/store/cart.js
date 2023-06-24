
const GET_CART_ITEMS = 'cart/load_items';

const setCartItems = (cartItems) => {
    return {
        type: GET_CART_ITEMS,
        payload: cartItems
    }
}

export const getCartItems = (userId) => async (dispatch) => {
    if (userId) {

    } else {
        
    }
}

export default function cartReducer(state = {}, action) {
    switch(action.type) {
        case GET_CART_ITEMS: {
            let newState = {};
            action.payload.forEach(item => newState[item.id] = item);
            return newState;
        }
        default:
            return state;
    }
}
