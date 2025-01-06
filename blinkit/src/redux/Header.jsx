import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addQuantity, fetchApi, removeQuantity } from '../features/ApiSlice';

export default function Header() {
    const [cartOpen, setCartOpen] = useState(false);

    const toggleCart = () => {
        setCartOpen(!cartOpen);
    };

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchApi());
    }, []);

    const record = useSelector((state) => state.apiKey);

    // Filter products based on category
    const product = record.data.filter((item) => item.category === 'milk');

    // Calculate total quantity and price
    const totalCount = record.data?.reduce((total, product) => total + (product.quantity > 0 ? product.quantity : 0), 0) || 0;
    const totalAmount = record.data?.reduce((total, product) => total + (product.quantity > 0 ? product.quantity * product.price : 0), 0) || 0;

    const addItem = (id) => {
        dispatch(addQuantity(id));
    };

    const removeItem = (id) => {
        dispatch(removeQuantity(id));
    };

    return (
        <div id="header">
            <header>
                <div className="row d-flex">
                    <div className="col col-xl-2 border-end d-sm-none d-md-block col-md-3">
                        <h1 className="fs-1 fw-bold m-4 text-center text-warning">
                            blink<span className="text-success">it</span>
                        </h1>
                    </div>
                    <div className="col col-xl-3 address col-sm-5 col-md-4">
                        <center>
                            <h5 className="text-center fw-bold mt-4">Delivery in 8 minutes</h5>
                            <h6 className="text-capitalize">
                                b62, mavdi-chowk, rajkot <i className="ri-arrow-down-s-fill"></i>
                            </h6>
                        </center>
                    </div>
                    <div className="col col-xl-4 d-sm-none d-md-none d-lg-none d-xl-block">
                        <div className="form-floating">
                            <input
                                type="text"
                                className="form-control mt-3"
                                id="floatingPassword"
                                placeholder="search 'Milk' "
                            />
                            <label htmlFor="floatingPassword">
                                <i className="ri-search-line me-2 text-secondary"></i>
                                <span id="search-placeholder" className="text-secondary">
                                    search "Milk"
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className="col col-xl-1">
                        <h4 style={{ marginTop: '1.3em', cursor: 'pointer' }} className="h4 text-center fw-medium">
                            LogIn
                        </h4>
                    </div>
                    <div className="col col-xl-2 cart col-md-3">
                        <button onClick={toggleCart} className="text-white mt-4 fs-6 fw-bold">
                            <i className="ri-shopping-cart-2-line text-white fw-light fs-5"></i>
                            {totalCount > 0 ? (
                                <>
                                    <span className="badge bg-success ms-2">{totalCount}</span>
                                    <span className="text-white ms-2">₹{totalAmount.toFixed(2)}</span>
                                </>
                            ) : (
                                'MY CART'
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {cartOpen && <div className="overlay" onClick={toggleCart}></div>}

            <div className={`cart-sidebar ${cartOpen ? 'open' : ''}`}>
                <div className="tgl d-flex flex-column">
                    <div className="d-flex justify-content-between">
                        <h2 className="fs-6 mt-1">My Cart</h2>
                        <button className="close-btn" onClick={toggleCart}>
                            <i className="ri-close-line"></i>
                        </button>
                    </div>

                    <div className="cart_div">
                        <div>
                            <p className="d-flex mx-1">
                                <i className="ri-timer-line mx-1 fs-3"></i>
                                <span className="fs-6 mt-2 mx-2 fw-bold">Delivery in 8 min</span>
                            </p>
                        </div>
                        <div className='cart_scroll'>
                            {record.data.map(
                                (e, i) =>
                                    e.quantity > 0 && (
                                        <div key={i} className="main cart_product d-flex justify-content-between">
                                            <div className="img my-3">
                                                <img src={e.image} className="img-fluid" alt="" />
                                            </div>
                                            <div className="text">
                                                <h3 className="fs-6 fw-bolder ">{e.title}</h3>
                                                <h6>{e.info}</h6>
                                                <h5 className="fs-6">₹{e.price}</h5>
                                            </div>
                                            <div className="btn d-flex justify-content-center align-items-center">
                                                <div className="diff_add btn btn-success d-flex justify-content-center align-items-center">
                                                    <button
                                                        className="text-white mx-1"
                                                        onClick={() => removeItem(e.id)}
                                                    >
                                                        <i className="ri-subtract-line"></i>
                                                    </button>
                                                    {e.quantity}
                                                    <button
                                                        className="text-white mx-1"
                                                        onClick={() => addItem(e.id)}
                                                    >
                                                        <i className="ri-add-line"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                            )}
                        </div>
                    </div>
                        <div className='mt-3 bg-white px-3 py-3'>
                            <h6 className='fw-bold'>Bill Details</h6>
                            <h6>Item Total: <span style={{marginLeft:"13em"}}>₹{totalAmount}</span></h6>
                            <h6>Delivery Charge:<span style={{marginLeft:"11em"}}>₹25</span></h6>
                            <h6>Handling Charge: <span style={{marginLeft:"10.7em"}}>₹4</span> </h6>
                            <h5 className='fw-bold'>Grand Total: <span style={{marginLeft:"8em"}}>₹{(totalAmount + 25 + 4)}</span></h5>
                        </div>
                        <div className='mt-5 px-2 py-2 rounded' style={{backgroundColor:"rgb(237, 237, 237)"}}> 
                            <div className=' total d-flex justify-content-between px-3 py-3 rounded'>
                            <h5 className="text-white" >₹{(totalAmount + 25 + 4)}</h5>
                            <h5>Login to Proceed <i class="ri-arrow-right-s-line"></i> </h5>
                            </div>
                        </div>
                </div>
            </div>

            <nav className="d-sm-none d-md-none d-lg-none d-xl-block">
                <div className="row">
                    <div className="col col-md-12 d-flex justify-content-center">
                        <a href="" className="text-secondary mt-3 mx-lg-1">
                            Vegetables & Fruits
                        </a>
                        <a href="" className="text-secondary mt-3">
                            Dairy & Breakfast
                        </a>
                        <a href="" className="text-secondary mt-3">
                            Munchies
                        </a>
                        <a href="" className="text-secondary mt-3">
                            Cold Drinks & Juices
                        </a>
                        <a href="" className="text-secondary mt-3">
                            Instant & Frozen Food
                        </a>
                        <a href="" className="text-secondary mt-3">
                            Tea, Coffee & Health Drinks
                        </a>
                        <a href="" className="text-secondary mt-3">
                            Bakery & Biscuits
                        </a>
                        <a href="" className="text-secondary mt-3">
                            More<i className="ri-arrow-down-s-fill"></i>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
}


