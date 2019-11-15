import React,{Fragment,createContext,useState   } from 'react';
import Navbar from '../components/NavBar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Product from '../components/Product';
import Cart from '../components/Cart';
import Checkout from '../components/Checkout';
import ContextRoute from '../components/ContextRoute';
import Shop from '../components/Shop';
import GenericNotFound from '../components/GenericNotFound';
import Confirmed from '../components/Confirmed';

function DefaultLayout(){

    return( 
        <Fragment>
            <Router>
                <Navbar/>
                <div className="hero-wrap hero-bread" style={{backgroundImage: 'url("/images/bg_6.jpg")'}}>
                    <div className="container">
                        <div className="row no-gutters slider-text align-items-center justify-content-center">
                            <h1 className="mb-0 bread">Tee Shirt Shop</h1>
                        </div>
                    </div>
                </div>
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