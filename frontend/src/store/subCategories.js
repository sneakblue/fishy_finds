import { csrfFetch } from "./csrf";

const LOAD_SUB_CATEGORY = 'subCategories/load_single';
const LOAD_SUB_CATEGORIES = 'subCategories/load';

const setSubCategories = (subCategories) => {
    return {
        type: LOAD_SUB_CATEGORIES,
        payload: subCategories
    }
}

const setSubCategory = (subCategory) => {
    return {
        type: LOAD_SUB_CATEGORY,
        payload: subCategory
    }
}

export const getSubCategory = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/categories/sub/${id}`);
    if (res.ok) {
        const subCategory = await res.json();
        dispatch(setSubCategory(subCategory));
        return subCategory;
    } else {
        return 'subCategory Not Found!'
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
        case LOAD_SUB_CATEGORY: {
            newState = {...state};
            newState[action.payload.id] = action.payload;
            return newState;
        }
        default:
            return state;
    }
}
