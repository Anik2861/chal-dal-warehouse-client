import React from 'react';
import './Banner.css';
import banner1 from '../../images/b-1.png'
import banner2 from '../../images/banner2.png'
import banner3 from '../../images/banner3.png'
import Slider from 'react-slick/lib/slider';
import Typical from 'react-typical';


const Banner = () => {
        const settings = {
                fade: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                lazyLoad: true,
                autoplaySpeed: 2000,
                className: "center",
                centerMode: true,
                arrows: false,
        };
        return (
                <div className="container-fluid">
                        <div className="banner brand-bg row">
                                <div className="col-md-6 d-flex justify-content-center">
                                        <div className="w-75 mx-auto">
                                                <h1 className="">Explore More</h1>
                                                <h1 className="brand-color fw-bold text-decoration-underline">
                                                        <Typical
                                                                steps={[
                                                                        'Pure Food', 2000,
                                                                        'Fresh Experience', 2000,
                                                                        'More Freshness', 2000
                                                                ]}
                                                                loop={Infinity}
                                                        />
                                                </h1>


                                                <Typical
                                                        steps={['We provide the best quality food & service. An atmosphere that you can have a great time with your friends and family members. 100% Gluten & Lactose Free Foods, Drinks, and Supplements to Kickstart Your Day!', 5000,]}
                                                        cursor={false}
                                                        wrapper="p"
                                                />
                                        </div>
                                </div>
                                <div className="col-md-5">
                                        <div className="">
                                                <div>
                                                        <Slider {...settings}>
                                                                <div>
                                                                        <img className="img-fluid" src={banner1} alt="" />
                                                                </div>
                                                                <div>
                                                                        <img className="img-fluid" src={banner2} alt="" />
                                                                </div>
                                                                <div>
                                                                        <img className="img-fluid" src={banner3} alt="" />
                                                                </div>
                                                        </Slider>
                                                </div>

                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default Banner;