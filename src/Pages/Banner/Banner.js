import React from 'react';
import './Banner.css'
import banner1 from '../assets/banner/banner1.png'
import banner2 from '../assets/banner/banner2.png'
import banner3 from '../assets/banner/banner3.png'

const Banner = () => {
    return (
        <div className='bannerBg'>
            <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={banner1} className="d-block w-100" alt="bannerImg" />
                    </div>
                    <div className="carousel-item">
                    <img src={banner2} className="d-block w-100" alt="bannerImg" />
                    </div>
                    <div className="carousel-item">
                    <img src={banner3} className="d-block w-100" alt="bannerImg" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;