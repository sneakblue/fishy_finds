import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sessionReducer from "./session";
import categoriesReducer from "./categories";
import subCategoriesReducer from "./subCategories";
import storeItemsReducer from "./storeItems";
import cartReducer from "./cart";

const rootReducer = combineReducers({
    session: sessionReducer,
    categories: categoriesReducer,
    subCategories: subCategoriesReducer,
    storeItems: storeItemsReducer,
    cart: cartReducer
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
