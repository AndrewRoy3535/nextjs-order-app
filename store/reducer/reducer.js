export const initialState ={
    cart: [{
        id: 3,
        title: "cake 5",
        price: 100.00,
        description: "You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner...",
        url: "https://images.unsplash.com/photo-1546856139-46fb2b57ff21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
        id: 4,
        title: "cake 6",
        price: 78.58,
        description: "You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner...",
        url: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1294&q=80",
    },],

    ShowProductsPage: [],

};

export const getCartTotal = (cart) => cart?.reduce((amount, item) => 
    item.price + amount, 0)
 
const reducer = (state, action) => {
    console.log(action)
    switch(action.type) {
        case 'ADD_TO_CART':
         return {
             ...state,
             cart: [...state.cart, action.item]
            }

        case 'REMOVE_FROM_CART':

        let newCart = [...state.cart];

        const findId = state.cart
        .findIndex((newCart) => 
            newCart.id === action.id);

            if(findId >=0){
                newCart.splice(findId, 1)
            } 

         return {...state, cart: newCart} 
        case 'SHOW_TO_PAGE': 
        return {
            ...state,
            ShowProductsPage: [action.item],
        }
        default: return state;        
    }
}

export default reducer;