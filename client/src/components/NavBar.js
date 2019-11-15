import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import ShopContext from '../context/ShopContext';
//Generic Navbar
const Navbar=()=>{
    const context = useContext(ShopContext);
    return(
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light ftco-navbar-light-2" id="ftco-navbar">
            <div className="container">
            <Link className="navbar-brand" to="/">Ecomm</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="oi oi-menu"></span> Menu
            </button>

            <div className="collapse navbar-collapse" id="ftco-nav">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                <li className="nav-item cta cta-colored"><Link to="/cart" className="nav-link"><span className="icon-shopping_cart"></span>[{context.cartProducts.length}]</Link></li>
                </ul>
            </div>
            </div>
	    </nav>
    );
}
export default Navbar;