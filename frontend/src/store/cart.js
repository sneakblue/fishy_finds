import { csrfFetch } from "./csrf";

const GET_CART_ITEMS = 'cart/load_items';
const ADD_CART_ITEM = 'cart/add_item';
const UPDATE_CART_ITEM = 'cart/update_item';
const CLEAR_CART = 'cart/clear_cart_items';

const clearCartItems = () => {
    return {
        type: CLEAR_CART
    }
}

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

const changeCartItem = (cartItem) => {
    return {
        type: UPDATE_CART_ITEM,
        payload: cartItem
    }
}

export const resetCart = () => async (dispatch) => {
    dispatch(clearCartItems());
}

export const updateCartItem = (sessionUser, item_id, quantity) => async (dispatch) => {
    // console.log('updated quantity: ' + quantity);
    if (sessionUser) {
        if (quantity <= 0) {
            const res = await csrfFetch(`/api/cartItems/user/${sessionUser.id}/item/${item_id}`, {
                method: 'DELETE'
            });

            if (res.ok) {
                let updatedItem = {
                    item_id,
                    quantity
                }
                dispatch(changeCartItem(updatedItem));
            }
        } else {
            const res = await csrfFetch('/api/cartItems/updateItem', {
                method: 'PUT',
                body: JSON.stringify({
                    user_id: sessionUser.id,
                    item_id,
                    quantity
                })
            });
            if (res.ok) {
                let updatedItem = {
                    item_id,
                    quantity
                }
                dispatch(changeCartItem(updatedItem));
            }
        }
    } else {
        let cartItems = localStorage.getItem('cartItems');
        if (cartItems) {
            if (cartItems.length > 0) {
                let itemPairs = cartItems.split(',');
                let foundItem = false;
                let itemIdx;
                for (let i = 0; i < itemPairs.length; i++) {
                    let itemPair = itemPairs[i].split('-');
                    // console.log('Iteration: ' + i);
                    // console.log(itemPair);
                    if (Number(itemPair[0]) === item_id) {
                        // console.log('Item id match~~~~~~~~~~~~~~~~~~~')
                        if (quantity <= 0) {
                            foundItem = true;
                            itemIdx = i;
                            // console.log('Found Item To Remove!!!!!!!!!!!!!!!!!!!!!!!!!1')
                        } else {
                            itemPair[1] = Number(quantity);
                            itemPairs[i] = itemPair.join('-');
                        }
                        break;
                    }
                }
                if (foundItem) itemPairs.splice(itemIdx, 1);
                cartItems = itemPairs.join(',');
                // console.log(itemIdx);
                // console.log(cartItems);
                localStorage.setItem('cartItems', cartItems);
                let updatedItem = {
                    item_id,
                    quantity
                }
                dispatch(changeCartItem(updatedItem));
            }
        }
    }
}

// export const removeOneItem = (sessionUser) => async (dispatch) => {
//     if (sessionUser) {

//     } else {

//     }
// }

export const addCartItem = (sessionUser, item_id, quantity) => async (dispatch) => {
    if (sessionUser) {
        const res = await csrfFetch('/api/cartItems/addItem', {
            method: 'POST',
            body: JSON.stringify({
                user_id: sessionUser.id,
                item_id,
                quantity
            })
        });

        if (res.ok) {
            const cartItemInfo = await res.json();
            cartItemInfo.userCartItem.quantity = cartItemInfo.newQuantity;
            dispatch(setCartItem(cartItemInfo.userCartItem));
        }
    } else {
        let cartItems = localStorage.getItem('cartItems');
        if (cartItems) {
            if (cartItems.length > 0) {
                let itemPairs = cartItems.split(',');
                let foundItem = false;
                for (let i = 0; i < itemPairs.length; i++) {
                    let itemPair = itemPairs[i].split('-');
                    if (itemPair[0] === item_id) {
                        // console.log('Found matching ID ~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
                        itemPair[1] = Number(itemPair[1]) + quantity;
                        quantity = Number(itemPair[1]);
                        // console.log('Updated Quantity: ------> ' + quantity);
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
            // console.log('------------- Empty Cart!! New Item Added!! --------------')
            cartItems = `${item_id}-${quantity}`;
            localStorage.setItem('cartItems', cartItems);
        }
        const res = await csrfFetch(`/api/storeItems/${item_id}`);
        // console.log('---------- Data Fetched!! ----------------');
        // console.log(res.ok);
        if (res.ok) {
            // console.log('res OK!!!!!!!~~~~~~~~~~~~~~')
            const newItem = await res.json();
            newItem.quantity = quantity;
            // console.log(newItem);
            // console.log('------------------------------');
            dispatch(setCartItem(newItem));
        }
        // const newItem = {item_id, quantity};
    }
}

export const getCartItems = (sessionUser) => async (dispatch) => {
    if (sessionUser) {
        const res = await csrfFetch(`/api/cartItems/${sessionUser.id}`);
        if (res.ok) {
            const cartItems = await res.json();
            console.log(cartItems);
            cartItems.storeItems.forEach((item, idx) => {
                item.quantity = cartItems.userItems[idx].quantity;
            })
            dispatch(setCartItems(cartItems.storeItems))
        }
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
                // console.log(cartItems);
                // console.log(prevItems);
                prevItems.forEach((item, idx) => {
                    cartItems[idx].quantity = Number(item.quantity);
                })
                let payload = {prevItems, cartItems};
                // console.log(payload);
                dispatch(setCartItems(cartItems));
            }
            return prevItems;
        } else {
            // console.log('No saved localStorage Cart Items!')
            return;
        }
    }
}

const initialState = {
    // itemCount: {},
    // currItemDetails: []
}

export default function cartReducer(state = initialState, action) {
    switch(action.type) {
        case GET_CART_ITEMS: {
            let newState = {...initialState};
            // console.log(action.payload);
            // newState.itemCount = {};
            action.payload.forEach(item => newState[item.id] = item);
            // newState.currItemDetails = action.payload.cartItems;
            return newState;
        }
        case ADD_CART_ITEM: {
            let newState = {...state};
            newState[action.payload.id] = action.payload;
            return newState;
        }
        case UPDATE_CART_ITEM: {
            let newState = {...state};
            // if (newState.itemCount[action.payload.item_id].quantity <= action.payload.quantity) {

            // } else {
            //     newState.itemCount[action.payload.item_id].quantity = action.payload.quantity;
            // }
            if (action.payload.quantity > 0) {
                newState[action.payload.item_id].quantity = action.payload.quantity;
            }
            else {
                // delete newState.itemCount[action.payload.item_id];
                delete newState[action.payload.item_id];
                // for (let i = 0; i < newState.currItemDetails.length; i++) {
                //     if (newState.currItemDetails[i].id === action.payload.item_id) {
                //         newState.currItemDetails.splice(i, 1);
                //         break;
                //     }
                // }
            }
            return newState;
        }
        case CLEAR_CART: {
            let newState = {...initialState};
            return newState;
        }
        default:
            return state;
    }
}
