import { csrfFetch } from "./csrf";

const LOAD_ITEMS = 'storeItems/load';

const setStoreItems = (items) => {
    return {
        type: LOAD_ITEMS,
        payload: items
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

export default function storeItemsReducer(state = {}, action) {
    switch(action.type) {
        case LOAD_ITEMS: {
            let newState = {};
            action.payload.forEach(item => newState[item.id] = item);
            return newState;
        }
        default:
            return state;
    }
}
