import React from 'react';
import {Link} from 'react-router-dom';
const Confirmed =()=>{
    return(
    <div className="row justify-content-center">
        <div className="col-md-6 my-5 ">
            <h4 className="text-center my-5">Your Order has been confirmed!</h4>
            <p className="text-center"><Link to="/" className="btn btn-primary py-3 px-4">Back to Homepage</Link></p>
        </div>
    </div>
    );
};

export default Confirmed;