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
            return{

            }
        default:
            return state;
    }


}