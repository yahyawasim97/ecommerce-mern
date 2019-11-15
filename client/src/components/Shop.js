import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Loader from './Loader';
import { URL } from '../constants';
import ShopItem from './ShopItem';
function Shop(props){
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
                <div className="row justify-content-center">
                    {loading?<Loader/>:error?<div className="alert alert-danger w-100 text-center" role="alert">
                    {error}
                    </div>:products.map((product,index)=><ShopItem key={index} product={product}/>)}
                </div>
            </div>
            <div className="col text-center my-3">
            <div className="block-27">
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