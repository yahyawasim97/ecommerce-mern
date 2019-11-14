import React,{useEffect,useState,Fragment,useContext} from 'react';
import axios from 'axios';
import {Link,useParams} from 'react-router-dom';
import { URL } from '../constants';
import Loader from './Loader';
import ShopContext from '../context/ShopContext';
function Product(){
    let {id} =useParams();
    const [product,setProduct] =useState([]);
    const [loading,setLoading] =useState(true);
	const [error,setError] =useState(null);
	const [size,setSize]= useState(null);
	const [color,setColor]= useState(null);
	const context = useContext(ShopContext)
    useEffect(()=>{
        fetchData();
        async function fetchData(){
            try{
                setLoading(true);
                let response = await axios.get(`${URL}/product/${id}`);
                if(response.status===200){
                        setProduct(response.data);
						setSize(response.data.size.first);
						setColor(response.data.color[0]);
                }
                setLoading(false);
            }catch(e){
                setError(e.response?e.response.message:'An Error Occured');
                setLoading(false);
            }
        }
        
	},[]);
	function addToCart(){
		context.addCartProduct({
			productId:product._id,
			price:product.price,
			name:product.name,
			imageUri:product.imageUri,
			size,
			color
		});
	}

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
					<div className="row my-2">
						{product.color.map((c,index)=>{
							return <div key={index} onClick={()=>setColor(c)} className="m-3" style={{height:60,width:60,background:c,border:color===c?'5px solid #f1b8c4':'none'}}></div>
						})}
					</div>
					<div className="row mt-4">
							<div className="col-md-6">
								<div className="form-group d-flex">
		              <div className="select-wrap">
	                  <div className="icon"><span className="ion-ios-arrow-down"></span></div>
	                  <select name="" id="" className="form-control" onChange={(e)=>setSize(e.target.value)}>
                          {product.size.map((size,index)=><option key={index} value={size}>{size}</option>)}
                    </select>
	                </div>
		            </div>
				</div>
				
							
          	</div>
			
          	<p><button onClick={addToCart} className="btn btn-primary py-3 px-5 text-primary">Add to Cart</button></p>
    			</div></Fragment>}
    		</div>
    	</div>
    </section>
    );
}
export default Product;