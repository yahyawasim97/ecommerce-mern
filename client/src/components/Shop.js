import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Loader from './Loader';
import { URL } from '../constants';
function Shop(){

    const [products,setProducts] =useState([]);
    const [loading,setLoading] =useState(true);
    const [error,setError] =useState(null);
    useEffect(()=>{
        fetchData();
        async function fetchData(){
            try{
                let response = await axios.get(`${URL}/products`);
                if(response.status===200){
                    if(response.data.length>0){
                        setProducts(response.data);
                    }else{
                        setError('No Products Found');
                    }
                }
                setLoading(false);
            }catch(e){
                setError(e.response?e.response.message:'An Error Occured');
                setLoading(false);
            }
        }
        
    },[])
    return(
        <section className="ftco-section bg-light" style={{minHeight:'70vh'}}> 
            <div className="container-fluid">
                <div className="row">
                    {loading?<Loader/>:error?<div className="alert alert-danger" role="alert">
                    {error}
                    here
                    </div>:products.map((product,index)=>{return(<div className="col-sm col-md-6 col-lg-3">
                        <div className="product">
                            <div className="img-prod"><img className="img-fluid" src={product.imageUri} alt="Colorlib Template"/>
                            </div>
                            <div className="text py-3 px-3">
                                <h3><a href="#">{product.name}</a></h3>
                                <div className="d-flex">
                                    <div className="pricing">
                                        <p className="price"><span className="mr-2">Rs.{product.price}</span></p>
                                    </div>
                                    <div className="rating">
                                        <p className="text-right">
                                            <span className="ion-ios-star-outline"></span>
                                            <span className="ion-ios-star-outline"></span>
                                            <span className="ion-ios-star-outline"></span>
                                            <span className="ion-ios-star-outline"></span>
                                            <span className="ion-ios-star-outline"></span>
                                        </p>
                                    </div>
                                </div>
                                <hr/>
                                <div className="bottom-area d-flex">
                                    <div className="add-to-cart"><span>Add to cart <i className="ion-ios-add ml-1"></i></span></div>
                                    <div href="#" className="ml-auto"><span><i className="ion-ios-heart-empty"></i></span></div>
                                </div>
                            </div>
                        </div>
                    </div>)})}
                </div>
            </div>
        </section>
    );
}
export default Shop;