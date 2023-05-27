export const initialState = {
    basket: []
}

export const getBasketItems = (basket) =>
    basket.map(item => console.log(item))

export const getBasketTotal = (basket) =>
    basket?.reduce((amount,item) => item.price + amount ,0)


export const reducer = (state, action) => {



    switch (action.type) {
        case 'ADD_BASKET':
            return {

                ...state,
                basket: [...state.basket,action.item]
            }

        case "REMOVE_ITEM":
           const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
            let newBasket = [...state.basket];
            if (index >= 0) {
                newBasket.splice(index,1)
            } else {
                console.log("You cant remove")
            }
            return {
                basket: newBasket
            }

        default:
            return state;
    }


}