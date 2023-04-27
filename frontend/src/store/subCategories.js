import { csrfFetch } from "./csrf";

const LOAD_SUB_CATEGORIES = 'subCategories/load';

const setSubCategories = (subCategories) => {
    return {
        type: LOAD_SUB_CATEGORIES,
        payload: subCategories
    }
}

export const getSubCategories = () => async (dispatch) => {
    const res = await csrfFetch('/api/categories/sub/all');
    if (res.ok) {
        const subCategories = await res.json();
        dispatch(setSubCategories(subCategories));
        return subCategories;
    }
}

export default function subCategoriesReducer (state = {}, action) {
    let newState;
    switch(action.type) {
        case LOAD_SUB_CATEGORIES: {
            newState = {...state};
            action.payload.forEach(subCategory => newState[subCategory.id] = subCategory);
            return newState;
        }
        default:
            return state;
    }
}
