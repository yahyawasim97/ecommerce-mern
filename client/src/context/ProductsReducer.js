import { ADD_PRODUCT, UPDATE_QUANTITY, REMOVE_PRODUCT, EMPTY_CART } from "./Types"
//reducer created using use reducer both inital state and reducer and passed onto usereducer()
export const initialState={
    products:[]
}

export const ProductsReducer =(state=initialState ,action)=>{
    switch(action.type){
        case ADD_PRODUCT:
            const products =  [...state.products];
            const index = products.findIndex(p=>p.product.productId ===  action.payload.product.productId &&  p.product.color ===  action.payload.product.color && p.product.size ===  action.payload.product.size );
            if(index>-1){
                products[index].quantity +=1;
            }else{
                products.push({product:action.payload.product,quantity:1})
            }
            return {...state,products}
        case UPDATE_QUANTITY:
            const updatedProducts =  [...state.products];
            const productIndex = updatedProducts.findIndex(p=>p.product.productId ===  action.payload.item.product.productId &&  p.product.color ===  action.payload.item.product.color && p.product.size ===  action.payload.item.product.size );
            if(productIndex>-1){
                updatedProducts[productIndex].quantity =action.payload.quantity;
            }
            return {...state,products:updatedProducts}
        case REMOVE_PRODUCT:
            const removedProducts =  [...state.products];
            const removeIndex = removedProducts.findIndex(p=>p.product.productId ===  action.payload.product.productId &&  p.product.color ===  action.payload.product.color && p.product.size ===  action.payload.product.size);
            if(removeIndex>-1){
                removedProducts.splice(removeIndex,1)
            }
            return {...state,products:removedProducts}
        case EMPTY_CART:
            return {...state,products:[]}
        default:
            return state;
    }
}