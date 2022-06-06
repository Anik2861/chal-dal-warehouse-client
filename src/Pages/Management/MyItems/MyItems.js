import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../Hooks/firebase.init';
import './MyItems.css';
import spinner from '../../images/spinner.gif';

const MyItems = () => {
        const [items, setItems] = useState([]);
        const [user] = useAuthState(auth);
        const navigate = useNavigate();

        useEffect(() => {
                const loadMyItems = async () => {
                        const url = `https://chaldal-warehouse.herokuapp.com/my-items?email=${user?.email}`;
                        try {
                                const { data } = await axios.get(url, {
                                        headers: {
                                                authorization: `Bearer ${localStorage.getItem('token')}`
                                        }
                                });
                                setItems(data);
                        }
                        catch (error) {
                                console.log(error);
                                if (error.response.status === 401 || error.response.status === 403) {
                                        navigate('/login');
                                        signOut(auth);
                                }
                        }
                }
                loadMyItems();
        }, [user]);

        // Handle Delete Item:
        const handleDeleteItem = deleteItem => {
                const sure = window.confirm(`Are you sure to delete ${deleteItem.name} ?`);
                if (sure) {
                        const url = `https://chaldal-warehouse.herokuapp.com/items/${deleteItem._id}`;
                        fetch(url, {
                                method: 'DELETE',
                        })
                                .then(res => res.json())
                                .then(data => {
                                        if (data?.deletedCount > 0) {
                                                const updateItems = items?.filter(item => item._id !== deleteItem._id)
                                                setItems(updateItems)
                                                toast(`Successfully Delete ${deleteItem.name}`);
                                        }
                                        else {
                                                toast("something went wrong! Please try again");
                                        }
                                })
                }
        }

        if (items.length === 0) {
                return <div className="mt-5 pt-5 pb-5 mb-5 loading d-flex justify-content-center align-items-center">
                        <div>
                                <h3 className="brand-color">You have no item</h3>
                                <h3>Please add any item!</h3>
                        </div>
                </div>
        }
        return (
                <div className="container pb-5 mb-5">
                        <h3 className="brand-color text-center pb-5 mt-5 pt-5 fw-bold text-decoration-underline">My Items</h3>
                        <table className="table">
                                <thead>
                                        <tr className="text-center">
                                                <th scope="col fw-bold"><h4>Item Name</h4></th>
                                                <th scope="col fw-bold"><h4>Amount/kg</h4></th>
                                                <th scope="col fw-bold"><h4>Quantity</h4></th>
                                                <th scope="col fw-bold"><h4>Sold</h4></th>
                                                <th scope="col fw-bold"><h4>Manage</h4></th>
                                        </tr>
                                </thead>
                                <tbody>
                                        {

                                                items?.map ? items?.map(item => <tr
                                                        id="t-border"
                                                        className="brand-bg"
                                                        item={item}
                                                        key={item._id}
                                                >
                                                        <td>{item.name}</td>
                                                        <td>{item.price}৳</td>
                                                        <td>{item.quantity}kg</td>
                                                        <td>{item.sold}kg</td>
                                                        <td>
                                                                <button onClick={() => handleDeleteItem(item)} type="button" className="btn btn-danger">Delete Item</button>

                                                        </td>

                                                </tr>)
                                                        :
                                                        ''
                                        }
                                </tbody>
                        </table>
                </div>
        );
};

export default MyItems;