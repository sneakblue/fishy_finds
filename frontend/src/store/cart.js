import { csrfFetch } from "./csrf";

const GET_CART_ITEMS = 'cart/load_items';
const ADD_CART_ITEM = 'cart/add_item';

const setCartItems = (payload) => {
    return {
        type: GET_CART_ITEMS,
        payload
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
                        itemPair[1] = Number(itemPair[1]) + quantity;
                        quantity = Number(itemPair[1]);
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
            let ids = [];
            prevItems.forEach(item => ids.push(item.item_id));
            let queryStr = `?array=${ids.shift()}`;
            ids.forEach(id => queryStr+= `&array=${id}`);
            const res = await csrfFetch(`/api/storeItems/byList/${queryStr}`);
            // console.log(prevItems);
            if (res.ok) {
                const cartItems = await res.json();
                console.log(cartItems);
                let payload = {prevItems, cartItems};
                console.log(payload);
                dispatch(setCartItems(payload));
            }
            return prevItems;
        } else {
            // console.log('No saved localStorage Cart Items!')
            return;
        }
    }
}

const initialState = {
    itemCount: {},
    currItemDetails: []
}

export default function cartReducer(state = initialState, action) {
    switch(action.type) {
        case GET_CART_ITEMS: {
            let newState = {...initialState};
            console.log(action.payload);
            newState.itemCount = {};
            action.payload.prevItems.forEach(item => newState.itemCount[item.item_id] = item);
            newState.currItemDetails = action.payload.cartItems;
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
