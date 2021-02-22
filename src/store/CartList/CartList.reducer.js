const INITIAL_STATE = [];

export default function CartListReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "ADD_ITEM":
            return [...state, action.item];

        case "REMOVE_ITEM":
            return state.filter((states) => states.id !== action.id);

        default:
            return state;
    }
}
