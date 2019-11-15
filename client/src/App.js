import React,{useReducer} from 'react';
import DefaultLayout from './layouts/defaultLayout';
import * as Reducer from './context/ProductsReducer';
import ShopContext from './context/ShopContext';
import { addProduct, updateQuantity, removeProduct, emptyCart } from './context/ProductActions';
function App() {
  const [state, dispatch] = useReducer(Reducer.ProductsReducer, Reducer.initialState);
  return (
    <ShopContext.Provider
      value={{
        cartProducts:state.products,
        addCartProduct:(product)=>dispatch(addProduct(product)),
        setQuantity:(item,quantity)=>dispatch(updateQuantity(item,quantity)),
        removeProduct:(product)=>dispatch(removeProduct(product)),
        emptyCart:()=>dispatch(emptyCart())
      }}
    >
      <DefaultLayout/>
    </ShopContext.Provider>
  );
}

export default App;
