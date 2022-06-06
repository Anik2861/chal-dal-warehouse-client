import React from 'react';
import './AddItem.css';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Hooks/firebase.init';
import addItem from '../../images/add-item.jpg'

const AddItem = () => {
        const [user] = useAuthState(auth);
        // React Hook Form for Catch Item Data:
        const { register, handleSubmit, reset } = useForm();
        const onSubmit = data => {
                console.log(data)
                const url = 'https://chaldal-warehouse.herokuapp.com/items';
                fetch(url, {
                        method: 'POST',
                        headers: {
                                "content-type": "application/json"
                        },
                        body: JSON.stringify(data)
                })
                        .then(res => res.json())
                        .then(result => {
                                console.log(result);
                                if (result.insertedId) {
                                        toast("Successfully Added New Item");
                                        reset();
                                }
                                else {
                                        toast("Something Went Wrong! Please Try Again!");
                                }
                        })
        };
        return (
                <div className="container mt-5 pb-5 pt-5 mb-5">
                        <ToastContainer></ToastContainer>
                        <h1 className="w-25 brand-bg mx-auto text-center brand-color fw-bold text-decoration-underline"> <marquee>Add New Items</marquee></h1>
                        <div className="row mt-5 pt-3">
                                <div className="col-md-6">
                                        <div className="form">
                                                <form className="p-3" onSubmit={handleSubmit(onSubmit)}>
                                                        <div className="mb-3">
                                                                <h6 className="form-label">Your Email</h6>
                                                                <input type="email" className="form-control" {...register("email", { required: true })} defaultValue={user.email} readOnly={true} />
                                                        </div>
                                                        <div className="mb-3">
                                                                <h6 className="form-label">Item Name</h6>
                                                                <input type="text" className="form-control" {...register("name", { required: true })} autoComplete="off" placeholder="Item Name" />
                                                        </div>
                                                        <div className="mb-3">
                                                                <h6 className="form-label">Item Category</h6>
                                                                <select class="form-select" id="inputGroupSelect01"
                                                                        {...register("category", { required: true })}>
                                                                        <option value="regular">Regular</option>
                                                                        <option value="fruits">Fruits</option>
                                                                        <option value="drinks">Drinks</option>
                                                                </select>
                                                        </div>
                                                        <div className="mb-3">
                                                                <h6 className="form-label">Item Price</h6>
                                                                <input type="number" className="form-control" {...register("price", { required: true, valueAsNumber: true })} autoComplete="off" placeholder="Item Price" />
                                                        </div>
                                                        <div className="mb-3">
                                                                <h6 className="form-label">Item Quantity(kg)</h6>
                                                                <input type="number" className="form-control" {...register("quantity", { required: true, valueAsNumber: true })} autoComplete="off" placeholder="Item Quantity(kg)" />
                                                        </div>
                                                        <div className="mb-3">
                                                                <h6 className="form-label">Description</h6>
                                                                <textarea type="text" className="form-control" {...register("description", { required: true })} autoComplete="off" placeholder="Description" rows={4} />
                                                        </div>
                                                        <div className="mb-3">
                                                                <h6 className="form-label">Supplier</h6>
                                                                <input type="text" className="form-control" {...register("supplier", { required: true })} autoComplete="off" placeholder="Supplier" />
                                                        </div>
                                                        <div className="mb-3">
                                                                <h6 className="form-label">Sold(Already Sell Item)</h6>
                                                                <input type="number" className="form-control" {...register("sold", { required: true, valueAsNumber: true })} autoComplete="off" placeholder="Sold(Already Sell Item)" />
                                                        </div>
                                                        <div className="mb-3">
                                                                <h6 className="form-label">Item Image</h6>
                                                                <input type="text" className="form-control" {...register("img", { required: true })} autoComplete="off" placeholder="Item Image URL" />
                                                        </div>
                                                        <div className="d-grid gap-2">
                                                                <button type="submit" className="btn login-btn">Add New Item</button>
                                                        </div>
                                                </form>
                                        </div>
                                </div>
                                <div className="col-md-5 p-6 d-flex align-items-center mx-auto">
                                        <img className="img-fluid" src={addItem} alt="" />
                                </div>
                        </div>
                </div>
        );
};

export default AddItem;