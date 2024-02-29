import React, { useState, useEffect, useRef  } from 'react';
import { useNavigate } from 'react-router-dom';
import btnArrow from '../assets/img/section-btn-arrow.webp'
import  iconOne from '../assets/img/pincode-icon-1.webp' 
import  iconTwo from '../assets/img/pincode-icon-2.webp' 
import  iconThree from '../assets/img/fxry-promise-icon-3.webp' 
import checkBox from '../assets/img/check-mark.webp'
import Calendar from 'react-calendar';
import payPalIcon from '../assets/img/paypal-icon.png'
import cardIcon from '../assets/img/card-icon.png'
import 'react-calendar/dist/Calendar.css';


const Checkout = () =>{

    const [subscribed, setSubscribed] = useState(false);
    const [yesNo, setyesNo] = useState(false);
    const [payment, setPayment] = useState(false);
    const [selected, setSelected] = useState(1); 
    
    
    const handleSubscriptionClick = () => {
        setSubscribed(!subscribed);
    }
    const handleYesNoClick = () => {
        setyesNo(!yesNo);
    }
    const handlePaymentClick = () => {
        setPayment(!payment);
    }
    const personalDetailRef = useRef(null);
    const addressDetailRef = useRef(null);
    const deliveryDetailRef = useRef(null);
    const paymentDetailRef = useRef(null);
    
    const scrollToPersonalDetail = () => {
        personalDetailRef.current.scrollIntoView({ behavior: 'smooth' });
        setSelected(1);
    };
    const scrollToAddressDetail = () => {
        addressDetailRef.current.scrollIntoView({ behavior: 'smooth' });
        setSelected(2);
    };
    const scrollToDeliveryDetail = () => {
        deliveryDetailRef.current.scrollIntoView({ behavior: 'smooth' });
        setSelected(3);
    };
    const scrollToPaymenyDetail = () => {
        paymentDetailRef.current.scrollIntoView({ behavior: 'smooth' });
        setSelected(4);
    };

    const [date, setDate] = useState(new Date());

    const onChange = (date) => {
        setDate(date);
    };

    return (
        <section className='checkout-section item-detail-section items-section same-bg-section relative'>
            <div className="container padding-x-all">
                <div className="item-detail-box sec-com-padding flex-box justify-between align-center">
                    <div className="checkout-left-box">
                        <div className="promo-code-box">
                            <form className='promo-code'>
                                <input
                                    type="text"
                                    placeholder="Promo code"
                                />
                                <button className='promo-code-btn' type="submit">Apply</button>
                            </form>
                            <div className="checkout-sub-total">
                                <div className="flex-box justify-between">
                                    <h6>Subtotal</h6>
                                    <h6>$40.00</h6>
                                </div>
                                <div className="flex-box justify-between">
                                    <h6>Collection & delivery fee</h6>
                                    <h6>$4.00</h6>
                                </div>
                            </div>
                            <div className="checkout-total flex-box justify-between">
                                <h5>Total</h5>
                                <h5>$44.00</h5>
                            </div>
                        </div>
                        <div className="frxy-promise">
                            <h4 className='fxry-promise-text' >The FXRY Promise..!</h4>
                            <ul className='fxry-usp-listing pincode-usp-listing flex-box' >
                                <li >
                                    <div className="img-box">
                                    <img src={iconOne} alt="" />
                                    </div>
                                    <div className="text-box">
                                    <p>
                                        <strong>Hassle Free </strong> <br />
                                        Transactions
                                    </p>
                                    </div>
                                </li>
                                <li >
                                    <div className="img-box">
                                    <img src={iconTwo} alt="" />
                                    </div>
                                    <div className="text-box">
                                    <p>
                                        100% Bespoke <br />
                                        <strong> Solutions</strong>
                                    </p>
                                    </div>
                                </li>
                                <li >
                                    <div className="img-box">
                                    <img src={iconThree} alt="" />
                                    </div>
                                    <div className="text-box">
                                    <p>
                                        <strong>Doorstep </strong> <br />
                                        Delivery
                                    </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="sub-total-box">
                        <div className="user-detail-head-box flex-box justify-between">
                        <div ref={personalDetailRef} className={`${selected === 1 ? 'selected' : ''}`} style={{ backgroundColor: selected === 1 ? '#E2E21A' : '#fff' }} onClick={() => scrollToPersonalDetail()}>
                            <h6>01</h6>
                            <h5>Personal Detail</h5>
                        </div>
                        <div ref={addressDetailRef} className={`${selected === 2 ? 'selected' : ''}`} style={{ backgroundColor: selected === 2 ? '#E2E21A' : '#fff' }} onClick={() => scrollToAddressDetail()}>
                            <h6>02</h6>
                            <h5>Your Address</h5>
                        </div>
                        <div ref={deliveryDetailRef} className={`${selected === 3 ? 'selected' : ''}`} style={{ backgroundColor: selected === 3 ? '#E2E21A' : '#fff' }} onClick={() => scrollToDeliveryDetail()}>
                            <h6>03</h6>
                            <h5>Delivery Details</h5>
                        </div>
                        <div ref={paymentDetailRef} className={`${selected === 4 ? 'selected' : ''}`} style={{ backgroundColor: selected === 4 ? '#E2E21A' : '#fff' }} onClick={() => scrollToPaymenyDetail()}>
                            <h6>04</h6>
                            <h5>Payment Information</h5>
                        </div>

                        </div>
                        <div className="user-detail-main-box">
                            <form> 
                                <div className="personal-detail-box form-section-border" ref={personalDetailRef}>
                                    <h4>Personal Details</h4>
                                    <div className="field-box">
                                        <label className='label-on-line' >Full Name*</label>
                                        <input type="text"/>
                                    </div>
                                    <div className="field-box">
                                        <label className='label-on-line' >Email*</label>
                                        <input type="email"/>
                                    </div>
                                    <p className={`para click-to-change ${subscribed ? 'subscribed' : ''}`} onClick={handleSubscriptionClick} >
                                        <span style={{ backgroundColor: subscribed ? 'grey' : '#26DB38' }} ><img src={checkBox} alt="" /></span>
                                        Yes, I want to subscribe to FXRY’s newsletter and receive tailored updates straight to my inbox!
                                    </p>
                                    <label className='label' > Phone Number* </label>
                                    <input type="number" />
                                    <p className='smallest-para' >By clicking confirm details, you agree to FXRY’s Privacy policy & Terms and Conditions.</p>
                                </div>

                                <div className="your-address-box form-section-border" ref={addressDetailRef}>
                                    <h4>Your Address</h4>
                                    <input type="text" placeholder='32 Andrews Rd, London E8 4QL, UK'/>
                                    <p className='underlined-text' >Enter address manually</p>

                                    <div className="field-box">
                                        <label className='label-on-line' >Line 01*</label>
                                        <input type="text"/>
                                    </div>
                                    <div className="field-box">
                                        <label className='label-on-line' >Line 02*</label>
                                        <input type="email"/>
                                    </div>
                                    <div className="field-box">
                                        <label className='label-on-line' >City*</label>
                                        <input type="text"/>
                                    </div>
                                    <div className="field-box">
                                        <label className='label-on-line' >Post code*</label>
                                        <input type="email"/>
                                    </div>
                                    <p className='smallest-para' >Sorry, this area is not yet supported for delivery, yet.</p>
                                </div>

                                <div className="collections-box form-section-border">
                                    <h4>Collections</h4>
                                    <p className="smallest-para">Receive your items back in 7-10 days from collection.</p>
                                    <p className="smallest-para">Collection is between 11:00 - 17:00.</p>
                                    <p className="smallest-para">Tracking link and estimated arrival time shared the day before.</p>
                                    <Calendar onChange={onChange} value={date} />
                                </div>

                                <div className="form-delivery-box  form-section-border" ref={deliveryDetailRef}>
                                    <h4>Delivery</h4>
                                    <p className='para' >Can we leave the order with a neighbor?</p>
                                    <div className="yes-no-box flex-box">
                                        <div className={`${yesNo ? 'yesNo' : ''}`} style={{ backgroundColor: yesNo ? '#D6D1C4' : '#E2E21A' }} onClick={handleYesNoClick} >Yes</div>
                                        <div className={`${yesNo ? 'yesNo' : ''}`} style={{ backgroundColor: yesNo ? '#E2E21A' : '#D6D1C4' }} onClick={handleYesNoClick} >No</div>
                                    </div>
                                    <h6 className='form-question' >Is there a safe place to leave the delivery?</h6>
                                    <input type="text" placeholder='No'/>
                                    <h6 className='form-question' >Extra delivery instructions</h6>
                                    <input className='mb-0' type="text" placeholder='No'/>
                                </div>

                                <div className="payment-info-box" ref={paymentDetailRef}>
                                    <h4>Payment information</h4>
                                    <div className="card-paypal-box flex-box justify-between">
                                        <div className={`${payment ? 'payment' : ''}`} style={{ backgroundColor: payment ? '#F6F6F6' : '#E2E21A' }} onClick={handlePaymentClick}>
                                            <h5><span><img src={cardIcon} alt="" /></span> Card</h5>
                                        </div>
                                        <div className={`${payment ? 'payment' : ''}`} style={{ backgroundColor: payment ? '#E2E21A' : '#F6F6F6' }} onClick={handlePaymentClick}>
                                            <h5><span><img src={payPalIcon} alt="" /></span> Paypal</h5>
                                        </div>
                                    </div>
                                    <div className="card-detail-box">
                                        <div className="field-box">
                                            <label className='label-on-line' >Card Number*</label>
                                            <input type="text"/>
                                        </div>
                                        <div className="two-input-box flex-box justify-between">
                                            <div className="field-box half-box">
                                                <label className='label-on-line' >Expiration*</label>
                                                <input type="text"/>
                                            </div>
                                            <div className="field-box half-box">
                                                <label className='label-on-line' >CVC*</label>
                                                <input type="text"/>
                                            </div>
                                        </div>
                                        <div className="field-box">
                                            <label className='label-on-line' >Country*</label>
                                            <input type="text"/>
                                        </div>
                                    </div>
                                    <div className="paypal-detail-box">

                                    </div>
                                    <button className='section-main-btn'   >Pay Now<span><img src={btnArrow} alt="" /></span></button>
                                </div>

                            </form>
                        </div>
                    </div>                        
                </div>
            </div>
        </section>
    )
}

export default Checkout