import React, { useEffect, useState } from 'react';
import LoadItems from '../../Hooks/LoadItems';
import ItemCard from '../HomePages/ItemCard/ItemCard';
import './All-Items.css';
import spinner from '../images/spinner.gif';

const All_Items = () => {
        const [items] = LoadItems();
        const [data, setData] = useState([]);
        useEffect(() => {
                const item = items?.filter(item => item?.category === 'regular');
                setData(item);
        }, [items]);

        const handleCategory = category => {
                const item = items?.filter(item => item.category === category);
                setData(item);
        }
        if (!items.length) {
                return <div className="loading d-flex justify-content-center align-items-center">
                        <img className="img-fluid mt-5" src={spinner} alt="" />
                </div>
        }
        return (
                <div className="mt-5 pt-5 text-center pb-5 mb-5 container">
                        <button onClick={() => handleCategory('regular')} type="button" className="btn category-btn">Regular</button>
                        <button onClick={() => handleCategory('fruits')} type="button" className="btn category-btn ms-3">Fruits</button>
                        <button onClick={() => handleCategory('drinks')} type="button" className="btn category-btn ms-3">Drinks</button>
                        <div className="mt-5 row row-cols-1 row-cols-md-3 g-4">
                                {
                                        data?.map(item => <ItemCard
                                                item={item}
                                                key={item._id}
                                        ></ItemCard>)
                                }
                        </div>
                </div>
        );
};

export default All_Items;