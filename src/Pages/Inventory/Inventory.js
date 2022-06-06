import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import stockImg from '../images/stock.png';
import spinner from '../images/spinner.gif';

const Inventory = () => {
        const { id } = useParams();
        // Load Data:
        const [item, setItem] = useState({});
        useEffect(() => {
                fetch(`https://chaldal-warehouse.herokuapp.com/item/${id}`)
                        .then(res => res.json())
                        .then(data => setItem(data))
        }, [item])
        const { img, name, description, quantity, price, sold, supplier, _id } = item ? item : '';

        // Stock Item:
        const { register, handleSubmit, reset } = useForm();
        const onSubmit = data => {
                const quantity = item?.quantity + data?.stockQuantity;
                const sold = item?.sold;
                const updateData = { quantity, sold };
                fetch(`https://chaldal-warehouse.herokuapp.com/item/${id}`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(updateData)
                })
                        .then(res => res.json())
                        .then(result => {
                                if (result.modifiedCount > 0) {
                                        toast(`Yahoo😍 !Successfully Stocked ${data.stockQuantity}kg ${name}✅!`)
                                        reset();
                                }
                        })
        }

        const navigate = useNavigate();
        const handleManageInventories = () => {
                navigate('/manage-inventories');
        }

        // Handle Deliver:
        const handleDeliver = () => {
                const quantity = item?.quantity - 1;
                // const sold = item?.sold + 1;
                const updateData = { quantity };
                fetch(`https://chaldal-warehouse.herokuapp.com/item/${id}`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(updateData)
                })
                        .then(res => res.json())
                        .then(data => {
                                if (data.modifiedCount > 0) {
                                        toast("Yahoo😍 !Successfully Delivered item✅!")
                                }
                        })
        }

        if (!item) {
                return <div className="loading d-flex justify-content-center align-items-center">
                        <img className="img-fluid mt-5" src={spinner} alt="" />
                </div>
        }
        return (
                <div className="container mt-5 pb-5 pt-5 mb-5">
                        <div className="row">
                                <div className="col-md-4">
                                        <div className="col p-3">
                                                <div className="item-detail h-100">
                                                        <div className="item-img p-3">
                                                                <img src={img} className="img-fluid w-100 rounded-3" alt="..." />
                                                                <h6 className="text-center mt-2 brand-color">Item Id: {_id}</h6>
                                                        </div>
                                                        <div className="card-body mt-2">
                                                                <h4 className="card-title fw-bold">{name}</h4>
                                                                <p className="card-text mt-3">{description}</p>
                                                        </div>
                                                        <div className="d-flex justify-content-between align-items-center ps-4 pe-5 pt-3 pb-3">
                                                                <div>
                                                                        <h6><small>Quantity: {quantity} kg</small> </h6>
                                                                        <h6><small>Supplier: {supplier}</small> </h6>

                                                                </div>
                                                                <div>
                                                                        <h2 className="brand-color">{price}৳/kg</h2>
                                                                        <h6 className="brand-color"><small>Already {sold} kg sold ✅</small> </h6>
                                                                </div>
                                                        </div>
                                                        <div className="p-3">
                                                                <div className="d-grid gap-2">
                                                                        <button onClick={() => handleDeliver()} className="btn login-btn">Deliver Item <svg
                                                                                height="30" width="30" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                                <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z" />
                                                                        </svg></button>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>

                                <div className="col-md-8 d-flex justify-content-center align-items-center">
                                        <div className="text-center mx-auto">
                                                <h1 className="mx-auto text-center brand-color fw-bold text-decoration-underline w-50"> <marquee>Stock Your Item</marquee></h1>
                                                <div className="form w-50 d-flex justify-content-between align-items-center">
                                                        <div>
                                                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Green_arrow_right.svg/320px-Green_arrow_right.svg.png" className="img-fluid" height="60" width="60" alt="" />
                                                        </div>
                                                        <form onSubmit={handleSubmit(onSubmit)}>
                                                                <input type="number" className="form-control" {...register("stockQuantity", { required: true, valueAsNumber: true })} autoComplete="off" placeholder="Stock Quantity/kg" />
                                                                <div className="d-grid gap-2 mt-2">
                                                                        <button type="submit" className="btn login-btn">Stock Item <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                                                        </svg></button>
                                                                </div>
                                                        </form>
                                                </div>
                                                <div className="w-50 mx-auto mt-3">
                                                        <div class="d-grid gap-2">
                                                                <button onClick={() => handleManageInventories()} class="btn btn-success fw-bold" type="button">Manage Inventories</button>
                                                        </div>
                                                </div>
                                                <img src={stockImg} className="img-fluid w-75 mt-3 rounded-3" alt="" />
                                        </div>
                                </div>
                        </div>
                        <ToastContainer></ToastContainer>
                </div>
        );
};

export default Inventory;