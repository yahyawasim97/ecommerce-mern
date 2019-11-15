import React,{useContext} from 'react';
import ShopContext from '../context/ShopContext';

//Total Price Component
const TotalPrice =()=>{
    //Context for global state usage
    const context = useContext(ShopContext);
    function getTotalPrice(){
        let total  =0;
        context.cartProducts.forEach(item=>{
            total +=(parseInt(item.product.price) * parseInt(item.quantity));
        })
        return total;
    }
    return(
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
    );
}
export default TotalPrice;