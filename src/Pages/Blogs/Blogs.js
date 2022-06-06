import React from 'react';
import './Blogs.css';

const Blogs = () => {
        return (
                <div className="container mt-5 pt-5 pb-5 mb-5">
                        <div className="row">
                                <div className="col-md-6">
                                        <h4 className="brand-color fw-bold">1. Difference between javascript and nodejs.</h4>
                                        <h5>Ans: Difference between javascript and nodejs: <br /> <br /> i. Javascript is a programming language that is used for writing scripts on the website. Where NodeJS is a Javascript runtime environment. <br />
                                                ii. 	Javascript can only be run in the browsers. And We can run Javascript outside the browser with the help of NodeJS.
                                                <br />
                                                iii. It is basically used on the client-side. And It is mostly used on the server-side.
                                                <br />
                                                iv. Javascript is capable enough to add HTML and play with the DOM on the other side Nodejs does not have capability to add HTML tags.
                                        </h5>
                                </div>
                                <div className="col-md-6">
                                        <h4 className="brand-color fw-bold">2. When should you use nodejs and when should you use mongodb?</h4>
                                        <h5>Ans: Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind. For setup with mongoDB connection I have to used nodejs.</h5>
                                        <h5>MongoDB is an excellent choice if you need to: Support rapid iterative development. Enable collaboration of a large number of teams. When I need to data hosting then I have to use mongoDB.</h5>
                                        <h5>That means, for host my data I have to use mongoDB and It will connect by node.js.</h5>
                                </div>
                        </div>
                        <div className="row mt-5">
                                <div className="col-md-6">
                                        <h4 className="brand-color fw-bold">3. Differences between sql and nosql databases.</h4>
                                        <h5>
                                                Differences between sql and nosql databases: <br /> <br />
                                                i. SQL databases are relational, NoSQL databases are non-relational. <br />
                                                ii. SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
                                                <br />
                                                iii. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                                                <br />
                                                iv. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
                                                <br />
                                                v. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                                        </h5>
                                </div>
                                <div className="col-md-6">

                                </div>
                        </div>
                </div>
        );
};

export default Blogs;