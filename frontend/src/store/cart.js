
const GET_CART_ITEMS = 'cart/load_items';

const setCartItems = (cartItems) => {
    return {
        type: GET_CART_ITEMS,
        payload: cartItems
    }
}

export const getCartItems = (sessionUser) => async (dispatch) => {
    if (sessionUser) {

    } else {
        const cartItems = localStorage.getItem('items');
        if (cartItems) {
            const prevItems = [];
            const itemPairs = cartItems.split(',');
            itemPairs.forEach((itemPair) => {
                const [ itemId, quantity ] = itemPair.split('-');
                prevItems.push({[itemId]: quantity});
            });
            console.log(prevItems);
            dispatch(setCartItems(prevItems));
        } else {
            console.log('No saved localStorage Cart Items!')
            return;
        }
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
