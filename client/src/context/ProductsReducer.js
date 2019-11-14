import { ADD_PRODUCT } from "./Types"

export const initialState={
    products:[]
}

export const ProductsReducer =(state=initialState ,action)=>{
    switch(action.type){
        case ADD_PRODUCT:
            let products =  [...state.products];
            let index = products.findIndex(p=>p.product.productId ===  action.payload.product.productId);
            if(index>-1){
                products[index].quantity +=1;
            }else{
                products.push({product:action.payload.product,quantity:1})
            }
            return {...state,products}
        default:
            return state;
    }
}