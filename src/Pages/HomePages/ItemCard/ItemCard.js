import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ItemCard.css';

const ItemCard = ({ item }) => {
        const { name, price, img, quantity, description, _id, sold, supplier } = item;

        // Manage Item to Inventory Page:
        const navigate = useNavigate();
        const manageItem = (id) => {
                window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: 'smooth'
                });
                navigate(`/inventory/${id}`);
        }
        return (
                <div className="item col p-3">
                        <div className="item-detail h-100">
                                <div className="item-img p-3">
                                        <img src={img} className="img-fluid w-100 rounded-3 pt-3" alt="..." />
                                </div>
                                <div className="ps-3 pe-3 pb-4">
                                        <div className="card-body">
                                                <h4 className="card-title fw-bold">{name}</h4>
                                                <p className="card-text mt-3">{description.slice(0, 100)}</p>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center ps-3 pe-3 pt-3 pb-3">
                                                <div>
                                                        <h6><small>Quantity: {quantity}kg</small> </h6>
                                                        <h6><small>Supplier: {supplier}</small> </h6>
                                                        <h2 className="brand-color">{price}৳/kg</h2>
                                                </div>
                                                <div>

                                                        <h6 className="text-end brand-color fw-bold pb-1"><small>Already Sold {sold}kg</small> </h6>
                                                        <button onClick={() => manageItem(_id)} className="btn brand-btn">
                                                                Manage Item <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                                                </svg>
                                                        </button>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default ItemCard;