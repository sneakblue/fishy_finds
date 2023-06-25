
const GET_CART_ITEMS = 'cart/load_items';
const ADD_CART_ITEM = 'cart/add_item';

const setCartItems = (cartItems) => {
    return {
        type: GET_CART_ITEMS,
        payload: cartItems
    }
}

export const addCartItem = (sessionUser, itemId, quantity) => async (dispatch) => {
    if (sessionUser) {

    } else {
        let cartItems = localStorage.getItem('cartItems');
        if (cartItems) {
            if (cartItems.length > 0) {
                cartItems += ',' + `${itemId}-${quantity}`;
            } else {
                cartItems = `${itemId}-${quantity}`;
            }
            localStorage.setItem('cartItems', cartItems);
        } else {
            cartItems = `${itemId}-${quantity}`;
            localStorage.setItem('cartItems', cartItems);
        }
    }
}

export const getCartItems = (sessionUser) => async (dispatch) => {
    if (sessionUser) {

    } else {
        const cartItems = localStorage.getItem('cartItems');
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
