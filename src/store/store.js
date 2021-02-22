import { createStore, combineReducers } from "redux";
import CartListReducer from "../store/CartList/CartList.reducer";
import ProductsListReducer from "../store/ProductsList/ProductsList.reducer";

const rootReducer = combineReducers({
    cartState: CartListReducer,
    productsState: ProductsListReducer,
});

const store = createStore(rootReducer);
export default store;
