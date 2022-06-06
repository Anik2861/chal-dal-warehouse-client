import React from 'react';
import LoadItems from '../../../Hooks/LoadItems';
import ItemCard from '../ItemCard/ItemCard';
import './Items.css';
import spinner from '../../images/spinner.gif';
import { useNavigate } from 'react-router-dom';

const Items = () => {
        const [items] = LoadItems();
        const navigate = useNavigate();
        const handleManageInventories = () => {
                navigate('/manage-inventories');
        }
        if (!items.length) {
                return <div className="loading d-flex justify-content-center align-items-center">
                        <img className="img-fluid mt-5" src={spinner} alt="" />
                </div>
        }
        return (
                <div className="pb-5">
                        <h1 className="w-25 brand-bg mx-auto text-center mt-5 brand-color fw-bold text-decoration-underline"> <marquee>Our Items</marquee></h1>
                        <div className="container pt-5 pb-5">
                                <div className="row row-cols-1 row-cols-md-3 g-4">
                                        {
                                                items.length ? items.slice(0, 6).map(item => <ItemCard
                                                        key={item._id}
                                                        item={item}
                                                >
                                                </ItemCard>)
                                                        :
                                                        ''
                                        }
                                </div>
                                <div className="text-center mt-5">
                                        <button onClick={() => handleManageInventories()} className="btn login-btn">
                                                Manage Inventories
                                                <svg xmlns="http://www.w3.org/2000/svg" className="ms-2" height="50px" width="30px" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                        </button>
                                </div>
                        </div>
                </div>
        );
};

export default Items;