export const initialState = {
    basket:[]
}

export const reducer = (state, action) => {

    switch (action.type) {
        case "ADD_BASKET":
            return {
                ...state,
                basket: [...state.basket,action.item],

            }
        case "REMOVE_BASKET":
            return {
                 ...state,
                basket: [...state.basket,action.item],
            }
        default:
            return state;
    }

};