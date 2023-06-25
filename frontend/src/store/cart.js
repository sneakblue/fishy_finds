const GET_CART_ITEMS = 'cart/load_items';
const ADD_CART_ITEM = 'cart/add_item';

const setCartItems = (cartItems) => {
    return {
        type: GET_CART_ITEMS,
        payload: cartItems
    }
}

const setCartItem = (cartItem) => {
    return {
        type: ADD_CART_ITEM,
        payload: cartItem
    }
}

export const addCartItem = (sessionUser, item_id, quantity) => async (dispatch) => {
    if (sessionUser) {

    } else {
        let cartItems = localStorage.getItem('cartItems');
        if (cartItems) {
            if (cartItems.length > 0) {
                let itemPairs = cartItems.split(',');
                let foundItem = false;
                for (let i = 0; i < itemPairs.length; i++) {
                    let itemPair = itemPairs[i].split('-');
                    if (itemPair[0] === item_id) {
                        itemPair[1] = quantity;
                        itemPairs[i] = itemPair.join('-');
                        foundItem = true;
                        break;
                    }
                }
                if (!foundItem) itemPairs.push(`${item_id}-${quantity}`)
                cartItems = itemPairs.join(',');
            } else {
                cartItems = `${item_id}-${quantity}`;
            }
            localStorage.setItem('cartItems', cartItems);
        } else {
            cartItems = `${item_id}-${quantity}`;
            localStorage.setItem('cartItems', cartItems);
        }
        const newItem = {item_id, quantity};
        dispatch(setCartItem(newItem));
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
                const [ item_id, quantity ] = itemPair.split('-');
                prevItems.push({item_id, quantity});
            });
            // console.log(prevItems);
            dispatch(setCartItems(prevItems));
        } else {
            // console.log('No saved localStorage Cart Items!')
            return;
        }
    }
}

export default function cartReducer(state = {}, action) {
    switch(action.type) {
        case GET_CART_ITEMS: {
            let newState = {};
            // console.log(action.payload);
            action.payload.forEach(item => newState[item.item_id] = item.quantity);
            return newState;
        }
        case ADD_CART_ITEM: {
            let newState = {...state};
            newState[action.payload.item_id] = action.payload;
            return newState;
        }
        default:
            return state;
    }
}
