import { csrfFetch } from "./csrf";

const LOAD_ITEMS = 'storeItems/load';
const LOAD_SINGLE_ITEM = 'storeItems/load_single';

const setStoreItems = (items) => {
    return {
        type: LOAD_ITEMS,
        payload: items
    }
}

const setStoreItem = (item) => {
    return {
        type: LOAD_SINGLE_ITEM,
        payload: item
    }
}

export const getStoreItem = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/storeItems/${id}`);
    if (res.ok) {
        const item = await res.json();
        dispatch(setStoreItem(item));
        return item;
    } else {
        return res;
    }
}

export const getStoreItems = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/storeItems/bySub/${id}`);
    if (res.ok) {
        const items = await res.json();
        dispatch(setStoreItems(items));
        return items;
    } else {
        return res;
    }
}

export const getStoreItemsList = (ids) => async (dispatch) => {
    let queryStr = `?array=${ids.shift()}`;
    ids.forEach(id => queryStr+= `&array=${id}`);
    const res = await csrfFetch(`/api/storeItems/byList/${queryStr}`);
    if (res.ok) {
        const storeItems = await res.json();
        dispatch(setStoreItems(storeItems));
    }
}

export default function storeItemsReducer(state = {}, action) {
    switch(action.type) {
        case LOAD_ITEMS: {
            let newState = {};
            action.payload.forEach(item => newState[item.id] = item);
            return newState;
        }
        case LOAD_SINGLE_ITEM: {
            let newState = {};
            newState[action.payload.id] = action.payload;
            return newState;
        }
        default:
            return state;
    }
}
