import React,{useContext} from 'react';
import { ADD_PRODUCT, UPDATE_QUANTITY, REMOVE_PRODUCT, EMPTY_CART } from "./Types";


export const addProduct=(product)=>{
    return{
        type:ADD_PRODUCT,
        payload:{product}
    } 
}

export const updateQuantity=(item,quantity)=>{
    return{
        type:UPDATE_QUANTITY,
        payload:{item,quantity}
    } 
}

export const removeProduct =(product)=>{
    return{
        type:REMOVE_PRODUCT,
        payload:product
    } 
}
export const emptyCart =()=>{
    return{
        type:EMPTY_CART
    } 
}