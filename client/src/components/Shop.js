import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Loader from './Loader';
import { URL } from '../constants';
import {Link} from 'react-router-dom';
function Shop(props){
    console.log(props)
    const [products,setProducts] =useState([]);
    const [loading,setLoading] =useState(true);
    const [error,setError] =useState(null);
    const [page,setPage] = useState(1);
    const [total,setTotal] = useState(0);
    useEffect(()=>{
        fetchData();
        async function fetchData(){
            try{
                setLoading(true);
                let response = await axios.get(`${URL}/products?page=${page}`);
                if(response.status===200){
                    if(response.data.products.length>0){
                        setProducts(response.data.products);
                        setTotal(response.data.total);
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
        
    },[page]);

    function getPagination(){
        let pagination = [];
        for(let a=1;a<=total;a++){
            pagination.push(<li key={a} onClick={()=>setPage(a)} className={page===a?"active":""}><span>{a}</span></li>);
        }
        return pagination;
    }
    return(
        <section className="ftco-section bg-light" style={{minHeight:'70vh'}}> 
            <div className="container-fluid">
                <div className="row">
                    {loading?<Loader/>:error?<div className="alert alert-danger" role="alert">
                    {error}
                    </div>:products.map((product,index)=>{return(<div key={index} className="col-sm col-md-6 col-lg-3">
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
                                    <Link to={`/product/${product._id}`} className="add-to-cart"><span>View Detail<i className="ion-ios-add ml-1"></i></span></Link>
                                    <div href="#" className="ml-auto"><span><i className="ion-ios-heart-empty"></i></span></div>
                                </div>
                            </div>
                        </div>
                    </div>)})}
                </div>
            </div>
            <div class="col text-center my-3">
            <div class="block-27">
              <ul>
                {
                    getPagination()
                }
              </ul>
            </div>
          </div>
        </section>
    );
}
export default Shop;