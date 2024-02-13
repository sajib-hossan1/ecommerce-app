import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProductDetails.css'


// Import Swiper React components for swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import required modules for swiper
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import ReactImageMagnify from 'react-image-magnify';


// react skleton
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton';
import { useScrollTop } from '../../hooks/useScrollTop';

const ProductDetails = () => {
    useScrollTop();
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [quantity, setquantity] = useState(1);
    const [loading, setLoading] = useState(true);
    
    
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    

    // get the product
    useEffect(() => {
        fetch("../data.json")
        .then(res => res.json())
        .then(data => setProduct(data))
        .finally(() => setLoading(false)); 
    } ,[]);

    if(loading){return}

    const singleProduct = product?.find(p => p.id === parseInt(id));

    const {title, brand , stock, mainPrice, price, discount, keyFeatures, extraImages, specifications, freeDelivery ,images, howToUse} = singleProduct;


    // magnify required
    const rimProps =  {
        isHintEnabled: true,
        shouldHideHintAfterFirstActivation: false,
        enlargedImagePosition: 'over'
    };
    
    const increaseQuan = () => {
        if(quantity === stock){
            return;
        };
        setquantity(quantity + 1 );
    };
    const decreaseQuan = () => {
        if(quantity === 1){
            return;
        };
        setquantity(quantity - 1 );
    };
    return (
        <div className='productDetails-main pt-5 pb-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                    { loading ? <Skeleton height={360} /> :
                        <>
                        <Swiper
                            style={{
                            '--swiper-navigation-color': '#fff',
                            '--swiper-pagination-color': '#fff',
                            }}
                            spaceBetween={10}
                            navigation={true}
                            thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2"
                            >
                                {
                                    images?.map((elem, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <ReactImageMagnify
                                                    {...{
                                                        smallImage: {
                                                            alt: title,
                                                            isFluidWidth: true,
                                                            src: elem,
                                                            srcSet: elem,
                                                            sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px'
                                                        },
                                                        largeImage: {
                                                            src: elem,
                                                            width: 726,
                                                            height: 600
                                                        },
                                                        lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' }
                                                    }}
                                                    {...rimProps}
                                                />
                                            </SwiperSlide>
                                        )
                                    })
                                }
                        </Swiper>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={10}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper"
                            >
                                {
                                    images?.map((elem, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <img src={elem} alt="ProductImage" />
                                            </SwiperSlide>
                                        )
                                    })
                                }
                        </Swiper>
                        </>
                        }
                    </div>                    
                    <div className="col-lg-6">
                        <div className="prod-details">
                            <h2 className='title'>{loading ? <Skeleton height={30} width={320}/> : title}</h2>
                            <p className="freeDelivery">
                             সারা বাংলাদেশে ডেলিভারি চার্জ সম্পূর্ণ ফ্রী ।
                            </p>
                            <p className='mb-1'>Brand : {loading ? <Skeleton height={20} width={70}/> : brand}</p>
                            <span> Stock : {loading ? <Skeleton height={20} width={70}/> : stock} Stocks Left</span>
                            <p className='mb-0 mt-3'><span className="blink">Discount</span> : {discount}%</p>
                            <h5 className='priceCut'><del>Price : ৳{loading ? <Skeleton height={20} width={70}/> : mainPrice}</del></h5>
                            <h5 className='price'>Price : ৳{loading ? <Skeleton height={20} width={70}/> : price}</h5>
                            <p className='quantity mb-5'>
                                Quantity :  <button onClick={decreaseQuan} className="quan-btn ms-2">-</button>
                                            <span>{quantity}</span>
                                            <button onClick={increaseQuan} className="quan-btn">+</button>
                            </p>
                            <Link to="/checkout" state={{singleProduct, quantity}} className='orderBtn'>অর্ডার করুন</Link>
                            {howToUse ? <p className='mt-4'>{howToUse}</p> : <></>}
                        </div>
                    </div>
                    <div className='freeDelivery2 container'>
                        <h5>{freeDelivery}</h5>
                    </div>
                    <div>
                        {keyFeatures? <h5 className='mt-3'>Key Features :</h5> : <></>}
                        <div>
                        {keyFeatures ? <>
                                    <ol>
                                        {keyFeatures.map(item => <li>{item}</li>)}
                                    </ol>  
                                </> 
                                : <></>}
                        </div>
                    </div>
                    <div>
                        {specifications? <h5 className='mt-3'>Specifications :</h5> : <></>}
                        <div>
                        {specifications ? <>
                                    <ol>
                                        {specifications.map(item => <li>{item}</li>)}
                                    </ol>  
                                </> 
                                : <></>}
                        </div>
                    </div>
                    <div>
                        <h4>Product Images :</h4>
                        <div>
                        {extraImages ? <>
                                    {
                                        extraImages.map(item => <img className='img-fluid mb-4' src={item} alt="" />)
                                    }
                                </> 
                                : <>
                                    {
                                        images.map(item => <img className='img-fluid mb-4' src={item} alt="" />)
                                    }
                                </>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;