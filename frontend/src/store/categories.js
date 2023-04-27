import { csrfFetch } from "./csrf";

const GET_CATEGORIES = 'categories/get_categories'

const setCategories = (categories) => {
    return {
        type: GET_CATEGORIES,
        payload: categories
    }
}

export const getCategories = () => async (dispatch) => {
    const res = await csrfFetch('/api/categories/')

    if (res.ok) {
        const categories = await res.json();
        console.log(categories);
        dispatch(setCategories(categories));
        return categories;
    } else {
        console.log('Oops! No categories!');
    }
}

export default function categoriesReducer(state = {}, action) {
    let newState;
    switch(action.type) {
        case GET_CATEGORIES: {
            newState = {...state};
            action.payload.forEach(category => newState[category.id] = category);
            return newState;
        }
        default:
            return state;
    }
}
