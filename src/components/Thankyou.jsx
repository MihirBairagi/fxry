import React, { useState, useEffect, useRef  } from 'react';

const Thankyou = () =>{
    const today = new Date();
    const formattedDate = `${today.toLocaleString('default', { month: 'long' })} ${today.getDate()}, ${today.getFullYear()}`;

    return(
        <section className='thankyou-section relative' >
            <div className="container padding-x-all">
                <div className="thankyou-box sec-com-padding">
                    <h1>
                        Thank you for your order, Jason Smith! <br />
                        Your order has been placed.
                    </h1>
                    <p className='thankyou-para' >Check your email your order confirmation</p>
                    <button className='section-main-btn'>Collection Reference: 2272</button>
                    <p className='thankyou-para'>Order Date: {formattedDate}</p>
                    <div className="collection-name-box flex-box">
                        <div className="collection-date-box">
                            <h5>Collection</h5>
                            <p className='thankyou-para' >January 16, 2024</p>
                        </div>
                        <div className="name-address-box">
                            <h5>Jason Smith</h5>
                            <p className='thankyou-para' >4Brushfield Street, London E16AN</p>
                        </div>
                    </div>
                    <h2>
                        How to prepare your item for collection
                    </h2>
                    <ul className='prepare-listing' >
                        <li>
                            <h6><span>1</span>Wash and clean your item</h6>
                        </li>
                        <li>
                            <h6><span>2</span>Pin or match your item</h6>
                        </li>
                        <li>
                            <h6><span>3</span>Your item is ready to hand over to our drivers</h6>
                        </li>
                    </ul>
                    <p className='problem-text' >
                        If you have any problems with your order, we’re on hand to help. <br />
                        Check our <a href="">FAQs</a> or <a href="">Contact us.</a>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Thankyou