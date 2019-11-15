import React,{Fragment} from 'react'
//each cart item  in rendered in this pure component
const CartItem =({item,removeProduct,setQuantity})=>{
    return(
    <Fragment ><tr className="text-center">
    <td className="product-remove"><button onClick={()=>removeProduct(item)}><span className="ion-ios-close"></span></button></td>
    
    <td className="image-prod"><div className="img"style={{backgroundImage:`url(${item.product.imageUri})`}}></div></td>
    
    <td className="product-name">
        <h3>{item.product.name}</h3>
    </td>
    
    <td className="price">{`Rs. ${item.product.price}`}</td>
    <td className="price">{item.product.size}</td>
    <td className="price">{item.product.color}</td>
    
    <td className="quantity">
        <div className="input-group mb-3">
         <input type="number" name="quantity" className="quantity form-control input-number" onChange={(event)=>setQuantity(item,parseInt(event.target.value))} value={item.quantity} min="1" max="100"/>
      </div>
  </td>
    
    <td className="total">Rs. {item.product.price * item.quantity}</td>
  </tr></Fragment>);
}
export default CartItem;