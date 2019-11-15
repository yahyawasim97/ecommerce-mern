import React,{useState,useContext} from 'react';
import Input from './Input';
import ShopContext from '../context/ShopContext';
import Axios from 'axios';
import { URL } from '../constants';
import Loader from './Loader';
import Confirmed from './Confirmed';
import TotalPrice from './TotalPrice';
const Checkout =()=>{
    //useStateHooks to set state based values which re-render on change
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [country, setCountry] = useState('Pakistan');
    const [city,setCity] = useState('');
    const [address,setAddress] = useState('');
    const [phone,setPhone] = useState('');
    const [email,setEmail] = useState('');
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState('');
    const [order,setOrder] = useState(false);
    const context = useContext(ShopContext);


    //To create an order through api
    async function handleSubmit(e){
        e.preventDefault();
        if(email && country && city && phone && address && firstName && lastName){
            await setLoading(true);
            try{
                Axios.post(`${URL}/order`,{
                    products: context.cartProducts,
                    email,
                    name: firstName+lastName,
                    phone ,
                    address,
                    country,
                    city
                })
                setOrder(true);
                context.emptyCart();
            }catch(e){
                setError(e.response?e.response.message:'An Error Occured');
                setLoading(false);
            }
        }else{
            setError('Please fill all fields');
        }

    }
    //Render Component When Order has been created
    if(order){
        return<Confirmed/>
    }

    return(
    <section className="ftco-section">
      <div className="container">
        {error && <div classNameName="alert alert-danger w-100 text-center" role="alert">
            {error}
        </div>}
        <form onSubmit={handleSubmit} className="billing-form bg-light p-3 p-md-5">
        <div className="row justify-content-center">
          <div className="col-xl-8 ">
                <h3 className="mb-4 billing-heading">Billing Details</h3>
	          	<div className="row align-items-end">
                    <Input label="First Name" value={firstName} setInput={setFirstName}/>
                    <Input label="Last Name" value={lastName} setInput={setLastName}/>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-12">
		            	<div className="form-group">
		            		<label for="country">State / Country</label>
		            		<div className="select-wrap">
		                  <div className="icon"><span className="ion-ios-arrow-down"></span></div>
		                  <select name="" id="" className="form-control" onChange={(e)=>setCountry(e.target.value)} value={country} defaultValue={country}>
		                  	<option value="france">France</option>
		                    <option value="italy">Italy</option>
		                    <option value="japan">Japan</option>
                            <option value="pakistan">Pakistan</option>
		                  </select>
		                </div>
		            	</div>
		            </div>
                </div>
                <div className="row align-items-end">
                    <Input label="Address" value={address} setInput={setAddress}/>
                    <Input label="City" value={city} setInput={setCity}/>
                </div>
                <div className="row align-items-end">
                    <Input label="Phone" value={phone} setInput={setPhone}/>
                    <Input label="Email" value={email} setInput={setEmail}/>
                </div>

            </div> 
            <div className="col-md-4 d-flex" style={{height:'40vh'}}>
                <div className="cart-detail cart-total bg-light p-3 p-md-4">
                    <h3 className="billing-heading mb-4">Cart Total</h3>
                    <TotalPrice/>
                    {context.cartProducts.length>0 &&<p className="my-3">{loading? <Loader/>:<input type="submit" className="btn btn-primary py-3 px-4" value="Place an order"/>}</p>}
                                    
                </div>
            </div>
        </div>
        </form>
      </div>
    </section> 
    );
}
export default Checkout;