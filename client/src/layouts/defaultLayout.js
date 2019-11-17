import React,{Fragment,useContext} from 'react';
import Navbar from '../components/NavBar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Product from '../components/Product';
import Cart from '../components/Cart';
import Checkout from '../components/Checkout';
import Shop from '../components/Shop';
import GenericNotFound from '../components/GenericNotFound';
import ShopContext from '../context/ShopContext';
function DefaultLayout(){
    const context = useContext(ShopContext)

    return( 
        <Fragment>
            <Router>
                {/* Generic Navbar */}
                <Navbar/>
                <div className="hero-wrap hero-bread" style={{backgroundImage: 'url("/images/bg_6.jpg")'}}>
                    <div className="container">
                        <div className="row no-gutters slider-text align-items-center justify-content-center">
                            <h1 className="mb-0 bread">Tee Shirt Shop</h1>
                        </div>
                    </div>
                </div>
                {context.writeError &&<div className="alert alert-danger w-100 text-center" role="alert">
                    Cannot write to localStorage: {context.writeError.message}
                </div>}
                <Switch>
                    <Route exact path='/' component={ Shop } />
                    <Route exact path='/product/:id' component={ Product } />
                    <Route exact path='/cart'  component={ Cart } />
                    <Route exact path='/checkout'  component={ Checkout } />
                    <Route component={GenericNotFound} />
                </Switch>
            </Router>
        </Fragment>
    );
}
export default DefaultLayout;