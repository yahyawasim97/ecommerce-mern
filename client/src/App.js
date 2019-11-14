import React,{useReducer} from 'react';
import DefaultLayout from './layouts/defaultLayout';
import * as Reducer from './context/ProductsReducer';
import ShopContext from './context/ShopContext';
import { addProduct } from './context/ProductActions';
function App() {
  const [state, dispatch] = useReducer(Reducer.ProductsReducer, Reducer.initialState);
  return (
    <ShopContext.Provider
      value={{
        cartProducts:state.products,
        addCartProduct:(product)=>dispatch(addProduct(product))
      }}
    >
      <DefaultLayout/>
    </ShopContext.Provider>
  );
}

export default App;
