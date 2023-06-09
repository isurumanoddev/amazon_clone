export const initialState = {
    basket: [],
    user:null

}

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0).toFixed(2)


export const reducer = (state, action) => {


    switch (action.type) {
        case 'ADD_BASKET':
            return {

                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_ITEM':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id)
            let newBasket = [...state.basket]

            if (index >= 0) {
                newBasket.splice(index,1)

            }

            return {
                ...state,basket: newBasket
            };

        case "SET_USER":
            return {
                ...state,user:action.user
            }
         case "EMPTY_BASKET":
            return {
                ...state,
                basket:[]
            }





        default:
            return state;
    }


}