import React from 'react';
import DefaultLayout from './layouts/defaultLayout';
import * as Reducer from './context/ProductsReducer';
import ShopContext from './context/ShopContext';
import createPersistedReducer from 'use-persisted-reducer';
import { addProduct, updateQuantity, removeProduct, emptyCart } from './context/ProductActions';
function App() {
  //To persist user state in reducer
  const usePersistedReducer = createPersistedReducer('state');
  //reducer created
  const [state, dispatch] = usePersistedReducer(Reducer.ProductsReducer, Reducer.initialState);
  return (
  // Context Used to pass global state to routing
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
