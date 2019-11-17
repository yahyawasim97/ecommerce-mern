import React from 'react';
import DefaultLayout from './layouts/defaultLayout';
import * as Reducer from './context/ProductsReducer';
import ShopContext from './context/ShopContext';
import { useLocalStorageReducer } from 'react-storage-hooks';
import { addProduct, updateQuantity, removeProduct, emptyCart } from './context/ProductActions';
function App() {
  //To persist user state in reducer
  //reducer created
  const [state, dispatch,writeError] = useLocalStorageReducer('products',Reducer.ProductsReducer, Reducer.initialState);
  return (
  // Context Used to pass global state to routing
    <ShopContext.Provider
      value={{
        writeError,
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
