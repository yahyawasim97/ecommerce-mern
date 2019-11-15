import React from 'react';
import {Link} from 'react-router-dom';

//Each product/shop item
const ShopItem =({product})=>{
    return(
        <div className="col-sm col-md-6 col-lg-3">
            <div className="product">
                <div className="img-prod"><img className="img-fluid" src={product.imageUri} alt="Colorlib Template"/>
                </div>
                <div className="text py-3 px-3">
                    <h3>{product.name}</h3>
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
                        <div  className="ml-auto"><span><i className="ion-ios-heart-empty"></i></span></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ShopItem;
