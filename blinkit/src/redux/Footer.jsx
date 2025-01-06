import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer>
                <div className="container-fluid">
                    <div className="row mt-3">
                        <div className="col col-lg-5">
                            <h5 className='mt-2 ms-2'>Useful Links</h5>
                            <div className="container d-flex mt-3">
                                <div className="col col-4">
                                    <li>About</li>
                                    <li>Careers</li>
                                    <li>Blog</li>
                                    <li>Press</li>
                                    <li>Lead</li>
                                    <li>Value</li>
                                </div>
                                <div className="col col-4">
                                    <li>Privacy</li>
                                    <li>Terms</li>
                                    <li>FAQs</li>
                                    <li>Security</li>
                                    <li>Mobile</li>
                                    <li>Contact</li>
                                </div>
                                <div className="col col-4">
                                    <li>Partner</li>
                                    <li>Franchise</li>
                                    <li>Seller</li>
                                    <li>Warehouse</li>
                                    <li>Deliver</li>
                                    <li>Resources</li>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-7">
                            <h5 className='mt-2 ms-2'>Categories <span className='text-success'>see all</span></h5>
                            <div className="container d-flex mt-3">
                                <div className="col col-4">
                                    <li>Vegetables & Fruits</li>
                                    <li>Cold Drinks & Juices</li>
                                    <li>Bakery & Biscuits</li>
                                    <li>Dry Fruits, Masala & Oil</li>
                                    <li>Paan Corner</li>
                                    <li>Ice Creams & Frozen Desserts</li>
                                    <li>Beauty & Cosmetics</li>
                                    <li>Electronics & Electricals</li>
                                    <li>Toys & Games</li>
                                </div>
                                <div className="col col-4">
                                    <li>Dairy & Breakfast</li>
                                    <li>Instant & Frozen Food</li>
                                    <li>Sweet Tooth</li>
                                    <li>Sauces & Spreads</li>
                                    <li>Organic & Premium</li>
                                    <li>Cleaning Essentials</li>
                                    <li>Personal Care</li>
                                    <li>Magazines</li>
                                    <li>Stationery Needs</li>
                                    <li>Print Store</li>
                                </div>
                                <div className="col col-4">
                                    <li>Munchies</li>
                                    <li>Tea, Coffee & Health Drinks</li>
                                    <li>Atta, Rice & Dal</li>
                                    <li>Chicken, Meat & Fish</li>
                                    <li>Baby Care</li>
                                    <li>Home & Office</li>
                                    <li>Pet Care</li>
                                    <li>Fashion & Accessories</li>
                                    <li>Books</li>
                                    <li>Navratri Specials</li>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-3">
                        <div className="row mt-3">
                            <div className="col col-lg-4">
                            <p style={{fontSize:"13px"}} className='mt-2'>© Blink Commerce Private Limited, 2016-2025</p>
                            </div>
                            <div className="col col-lg-4  d-flex">
                            <p style={{fontSize:"13px"}} className='mt-2'>Download App</p>
                            <div className=' ms-2 d-flex' style={{width:"50%"}}>
                                <img src="https://blinkit.com/d61019073b700ca49d22.png" className='img-fluid ms-2' style={{width:"70%"}} alt="" />
                                <img src="https://blinkit.com/8ed033800ea38f24c4f0.png" className='img-fluid ms-2' style={{width:"70%"}} alt="" />
                            </div>
                            </div>
                            <div id='footer_btn' className="col col-lg-4">
                                <button><i class="ri-facebook-fill"></i></button>
                                <button><i class="ri-twitter-fill"></i></button>
                                <button><i class="ri-instagram-line"></i></button>
                                <button><i class="ri-linkedin-fill"></i></button>
                                <button><i class="ri-threads-fill"></i></button>
                            </div>
                        </div>
                    </div>
                        <p className='mx-3 mt-3'>
                            “Blinkit” is owned & managed by "Blink Commerce Private Limited" and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.
                        </p>
                </div>
            </footer>
        </div>
    )
}
