import React from 'react';
import './Chaldal.css';
import about from '../../images/about.png';
import Typical from 'react-typical';

const Chaldal = () => {
        return (
                <div className="chaldal container">
                        <div className="row mt-5 pt-5 pb-5">
                                <div className="col-md-6">
                                        <img className="img-fluid p-3" src={about} alt="" />
                                </div>
                                <div className="col-md-6 d-flex align-items-center">
                                        <div>
                                                <h2 className="brand-color fw-bold text-decoration-underline mb-4"><Typical
                                                        steps={[
                                                                'About Us', 2000,
                                                                'About Chaldal-Warehouse', 2000,
                                                        ]}
                                                        loop={Infinity}
                                                /></h2>
                                                <p className="w-75">
                                                        Focusing on fresh ingredients not only promotes improved health, but also boosts nutrients and flavor profiles. Any type of processing such as canning, freezing or drying can deteriorate the quality of nutrients, fiber, flavor, and even natural color.
                                                </p>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default Chaldal;