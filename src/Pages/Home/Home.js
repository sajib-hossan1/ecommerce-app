import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Product from '../Product/Product';


// react skleton
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // get the products
    useEffect(() => {
        fetch("data.json")
        .then(res => res.json())
        .then(data => setProducts(data))
        .finally(() => setLoading(false)); 
    } ,[]);
    return (
        <div className='mb-5'>
            <Banner/>
            <h2 className="text-center mt-4">PRODUCTS</h2>
            <div className='mt-4'>
                <div className="container">
                    <div className="row gx-5 gy-4">
                        {/* react skleton loading */}
                    { loading &&
                        <div className='container'>
                            <div className="row g-4">
                                <div className='col-xl-3 col-lg-4 col-md-6'>
                                    { loading && <Skeleton height={160} />}
                                    { loading && <Skeleton height={20} width={190}/>}
                                    { loading && <Skeleton height={20} width={140}/>}
                                    <div className='d-flex justify-content-between'>
                                        { loading && <Skeleton height={20} width={100} />}
                                        { loading && <Skeleton height={20} width={100}/>}
                                    </div>
                                </div>
                                <div className='col-xl-3 col-lg-4 col-md-6'>
                                    { loading && <Skeleton height={160} />}
                                    { loading && <Skeleton height={20} width={190}/>}
                                    { loading && <Skeleton height={20} width={140}/>}
                                    <div className='d-flex justify-content-between'>
                                        { loading && <Skeleton height={20} width={100} />}
                                        { loading && <Skeleton height={20} width={100}/>}
                                    </div>
                                </div>
                                <div className='col-xl-3 col-lg-4 col-md-6'>
                                    { loading && <Skeleton height={160} />}
                                    { loading && <Skeleton height={20} width={190}/>}
                                    { loading && <Skeleton height={20} width={140}/>}
                                    <div className='d-flex justify-content-between'>
                                        { loading && <Skeleton height={20} width={100} />}
                                        { loading && <Skeleton height={20} width={100}/>}
                                    </div>
                                </div>
                                <div className='col-xl-3 col-lg-4 col-md-6 mx-auto'>
                                    { loading && <Skeleton height={160} />}
                                    { loading && <Skeleton height={20} width={190}/>}
                                    { loading && <Skeleton height={20} width={140}/>}
                                    <div className='d-flex justify-content-between'>
                                        { loading && <Skeleton height={20} width={100} />}
                                        { loading && <Skeleton height={20} width={100}/>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                        {
                            products?.map( (product) => <Product key={product.id} singleProduct={product} /> )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;