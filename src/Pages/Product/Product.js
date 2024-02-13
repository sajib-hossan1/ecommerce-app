import React from 'react';
import './Product.css'
import { Link } from 'react-router-dom';

const Product = ({singleProduct}) => {
    const {id, thumbnail, title, mainPrice, price, discount, reviews} = singleProduct;
    return (
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
            <Link className='singleLink' to={`/productDetails/${id}`}>
                <div className="prouct-box">
                    <div className='thumbnail'>
                        <p className='discount'>-{discount}%</p>
                        <img className='img-fluid' src={thumbnail} alt="" />
                    </div>
                    <h4 className='title'>{title.substring(0, 30)}...</h4>
                    <div className="priceNreview">
                        <div>
                            <del className="priceCut me-1">৳{mainPrice}</del>
                            <span className="price"><span className='bdt'>৳</span>{price}</span>
                        </div>
                        <div>
                            <span className='reviews'>({reviews} reviews)</span>
                        </div>
                    </div>
                    <br />
                    <Link to="/checkout" state={{singleProduct, quantity : 1}} className='orderBtn' >অর্ডার করুন</Link>
                </div>
            </Link>
        </div>
    );
};

export default Product;