import React,{useContext} from 'react';
import { ADD_PRODUCT } from "./Types";


export const addProduct=(product)=>{
    return{
        type:ADD_PRODUCT,
        payload:{product}
    } 
}