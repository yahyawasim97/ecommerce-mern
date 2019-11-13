import React,{Fragment,createContext} from 'react';
import Navbar from '../components/NavBar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Product from '../components/Product';
import Cart from '../components/Cart';
import Checkout from '../components/Checkout';
import ContextRoute from '../components/ContextRoute';
import Shop from '../components/Shop';
import GenericNotFound from '../components/GenericNotFound';
const initial_context= {
    products:[]
};
function DefaultLayout(){
    const ShopContext = createContext(initial_context);
    return( 
        <Fragment>
            <Router>
                <Navbar/>
                <div className="hero-wrap hero-bread" style={{backgroundImage: 'url("images/bg_6.jpg")'}}>
                    <div className="container">
                        <div className="row no-gutters slider-text align-items-center justify-content-center">
                            <h1 className="mb-0 bread">Tee Shirt Collection</h1>
                        </div>
                    </div>
                </div>
                <Switch>
                    <Route exact path='/' component={ Shop } />
                    <ContextRoute exact path='/product/:id' contextComponent={ShopContext} component={ Product } />
                    <ContextRoute exact path='/cart' contextComponent={ShopContext} component={ Cart } />
                    <ContextRoute exact path='/checkout' contextComponent={ShopContext} component={ Checkout } />
                    <Route component={GenericNotFound} />
                </Switch>
            </Router>
        </Fragment>
    );
}
export default DefaultLayout;