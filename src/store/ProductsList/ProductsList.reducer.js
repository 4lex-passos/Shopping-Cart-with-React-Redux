import products from "../../mocks/products";

const INITIAL_STATE = [...products];

export default function ProductsReducer(state = INITIAL_STATE, action) {
    return state;
}
