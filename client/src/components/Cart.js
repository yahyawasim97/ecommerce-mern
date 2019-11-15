import React,{useContext} from 'react';
import ShopContext from '../context/ShopContext';
import {Link} from 'react-router-dom';
import TotalPrice from './TotalPrice';
import CartItem from './CartItem';
const Cart =()=>{
    const context = useContext(ShopContext);
    
    return(
        <section className="ftco-section ">
			<div className="container">
				<div className="row justify-content-center" >
    			<div className="col-md-12 ">
    				<div className="cart-list">
	    				<table className="table">
						    <thead className="thead-primary">
						      <tr className="text-center">
						        <th>&nbsp;</th>
						        <th>&nbsp;</th>
						        <th>Product</th>
						        <th>Price</th>
						        <th>Size</th>
						        <th>Color</th>
						        <th>Quantity</th>
						        <th>Total</th>
						      </tr>
						    </thead>
						    <tbody>
						      {context.cartProducts.length>0 ?context.cartProducts.map((item,index)=><CartItem item={item} key={index} setQuantity={context.setQuantity} removeProduct={context.removeProduct}/>):<tr><td colSpan={8}>Your cart is Empty</td></tr>}
						    </tbody>
						  </table>
					  </div>
    			</div>
    		</div>
    		{context.cartProducts.length>0 &&<div className="row justify-content-end">
    			<div className="col col-lg-5 col-md-6 mt-5 cart-wrap">
    				<TotalPrice/>
    				<p className="text-center"><Link to="/checkout" className="btn btn-primary py-3 px-4">Proceed to Checkout</Link></p>
    			</div>
    		</div>}
			</div>
		</section>
    );
}
export default Cart;