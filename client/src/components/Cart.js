import React,{Fragment,useContext} from 'react';
import ShopContext from '../context/ShopContext';
import {Link} from 'react-router-dom';
const Cart =()=>{
    const context = useContext(ShopContext);
    function getTotalPrice(){
        let total  =0;
        context.cartProducts.forEach(item=>{
            total +=(parseInt(item.product.price) * parseInt(item.quantity));
        })
        return total;
    }
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
						      {context.cartProducts.length>0 ?context.cartProducts.map((item,index)=><Fragment key={index}><tr className="text-center">
						        <td className="product-remove"><button onClick={()=>context.removeProduct(item)}><span className="ion-ios-close"></span></button></td>
						        
						        <td className="image-prod"><div className="img"style={{backgroundImage:`url(${item.product.imageUri})`}}></div></td>
						        
						        <td className="product-name">
						        	<h3>{item.product.name}</h3>
						        </td>
						        
						        <td className="price">{`Rs. ${item.product.price}`}</td>
						        <td className="price">{item.product.size}</td>
						        <td className="price">{item.product.color}</td>
						        
						        <td className="quantity">
						        	<div className="input-group mb-3">
					             	<input type="number" name="quantity" className="quantity form-control input-number" onChange={(event)=>context.setQuantity(item,parseInt(event.target.value))} value={item.quantity} min="1" max="100"/>
					          	</div>
					          </td>
						        
						        <td className="total"></td>
						      </tr></Fragment>):<tr><td colSpan={8}>Your cart is Empty</td></tr>}
						    </tbody>
						  </table>
					  </div>
    			</div>
    		</div>
    		{context.cartProducts.length>0 &&<div className="row justify-content-end">
    			<div className="col col-lg-5 col-md-6 mt-5 cart-wrap">
    				<div className="cart-total mb-3">
    					<h3>Cart Totals</h3>
    					<p className="d-flex">
    						<span>Subtotal</span>
                            <span>Rs. {getTotalPrice()}</span>
    					</p>
    					<p className="d-flex">
    						<span>Delivery</span>
    						<span>Rs  0.00</span>
    					</p>
    					<p className="d-flex">
    						<span>Discount</span>
    						<span>Rs. 0.00</span>
    					</p>
    					<hr/>
    					<p className="d-flex total-price">
    						<span>Total</span>
    						<span>Rs. {getTotalPrice()}</span>
    					</p>
    				</div>
    				<p className="text-center"><Link to="/checkout" className="btn btn-primary py-3 px-4">Proceed to Checkout</Link></p>
    			</div>
    		</div>}
			</div>
		</section>
    );
}
export default Cart;