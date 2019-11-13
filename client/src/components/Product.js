import React,{useEffect,useState,Fragment} from 'react';
import axios from 'axios';
import {Link,useParams} from 'react-router-dom';
import { URL } from '../constants';
import Loader from './Loader';
function Product(){
    let {id} =useParams();
    const [product,setProduct] =useState([]);
    const [loading,setLoading] =useState(true);
    const [error,setError] =useState(null);
    useEffect(()=>{
        fetchData();
        async function fetchData(){
            try{
                setLoading(true);
                let response = await axios.get(`${URL}/product/${id}`);
                if(response.status===200){
                        setProduct(response.data);
                    
                }
                setLoading(false);
            }catch(e){
                setError(e.response?e.response.message:'An Error Occured');
                setLoading(false);
            }
        }
        
    },[]);
    return(
		<section className="py-5 bg-light">
            
    	<div className="container">
    		<div className="row">
                {loading?<Loader/>:error?<div classNameName="alert alert-danger" role="alert">
                    {error}
                    </div>:<Fragment><div className="col-lg-6 mb-5 ">
    				<div href="images/menu-2.jpg" className="image-popup"><img src={product.imageUri} className="img-fluid" alt="Colorlib Template"/></div>
    			</div>
    			<div className="col-lg-6 product-details pl-md-5 ">
                    <nav class="navbar navbar-light bg-light p-0">
                        <Link to="/" class="navbar-brand" > {'< Back'}</Link>
                    </nav>
    				<h3>{product.name}</h3>
                    <p className="price"><span>Rs. {product.price}</span></p>
    				<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
    				<p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.
						</p>
						<div className="row mt-4">
							<div className="col-md-6">
								<div className="form-group d-flex">
		              <div className="select-wrap">
	                  <div className="icon"><span className="ion-ios-arrow-down"></span></div>
	                  <select name="" id="" className="form-control">
                          {product.size.map((size,index)=><option key={index} value={size}>{size}</option>)}
                    </select>
	                </div>
		            </div>
							</div>
							<div className="w-100"></div>
							<div className="input-group col-md-6 d-flex mb-3">
	             	<span className="input-group-btn mr-2">
	                	<button type="button" className="quantity-left-minus btn"  data-type="minus" data-field="">
	                   <i className="ion-ios-remove"></i>
	                	</button>
	            		</span>
	             	<input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" min="1" max="100"/>
	             	<span className="input-group-btn ml-2">
	                	<button type="button" className="quantity-right-plus btn" data-type="plus" data-field="">
	                     <i className="ion-ios-add"></i>
	                 </button>
	             	</span>
	          	</div>
          	</div>
          	<p><a href="cart.html" className="btn btn-primary py-3 px-5">Add to Cart</a></p>
    			</div></Fragment>}
    		</div>
    	</div>
    </section>
    );
}
export default Product;