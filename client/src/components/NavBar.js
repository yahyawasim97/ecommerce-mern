import React from 'react';
import {Link} from 'react-router-dom';
const Navbar=()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light ftco-navbar-light-2" id="ftco-navbar">
            <div className="container">
            <a className="navbar-brand" href="index.html">Ecomm</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="oi oi-menu"></span> Menu
            </button>

            <div className="collapse navbar-collapse" id="ftco-nav">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                <li className="nav-item cta cta-colored"><Link to="/cart" className="nav-link"><span className="icon-shopping_cart"></span>[0]</Link></li>
                </ul>
            </div>
            </div>
	    </nav>
    );
}
export default Navbar;