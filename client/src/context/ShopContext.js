import {createContext} from 'react';
//A global context created to be used across
const ShopContext = createContext({
    products:[]
});

export default ShopContext;