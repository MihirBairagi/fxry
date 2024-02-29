import React, { useState, useEffect, useRef  } from 'react';
import btnArrow from '../assets/img/section-btn-arrow.webp'
import  iconOne from '../assets/img/pincode-icon-1.webp' 
import  iconTwo from '../assets/img/pincode-icon-2.webp' 
import  iconThree from '../assets/img/fxry-promise-icon-3.webp' 
import add from '../assets/img/add.png'
import deleteIcon from '../assets/img/delete.webp'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const ItemDetail = () => {

const location = useLocation();
const selectedType = location.state?.selectedType || '';

const navigate = useNavigate();

const handleApply = () => {
    navigate('/checkout');
  };

const addNew = () => {
    navigate('/types');
  };

const addService = ()   => {
    navigate('/plan',  { state: {selectedType} });
}



    return(
        <section className='item-detail-section items-section same-bg-section relative' >
            <div className="container padding-x-all ">
                <div className='item-detail-box sec-com-padding flex-box justify-between align-center' >
                    <div className="show-detail-box">
                        <button className="add-new-item-box relative" onClick={addNew}>
                            <h4 className='add-new-text' >Add a new items</h4>
                        </button>
                        <div className="price-detail-box">
                            <div className="item-name-price flex-box justify-between relative">
                                <h3 className='name-price-text item-name-text' >{selectedType ? selectedType : '-'} <span><img src={deleteIcon} alt="" /></span> </h3>
                                <h3 className='name-price-text' >$40.00</h3>
                                <p className='para' >Order Details</p>
                            </div>
                            <div className="add-another-service-box">
                                <button onClick={addService} >
                                    <h5> <span><img src={add} alt="" /></span> Add another service to your skirt</h5>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="sub-total-box">
                        <ul className="sub-total">
                            <li>  
                                <h4>Subtotal</h4>
                                <h4>$40.00</h4>
                            </li>
                            <li>  
                                <h4>Collection & delivery fee</h4>
                                <h4>$4.00</h4>
                            </li>
                            <li>  
                                <h4>Your basket</h4>
                                <h4>$44.00</h4>
                            </li>
                        </ul>
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
                        <button className='checkout-btn section-main-btn'  onClick={handleApply} >Continue to checkout<span><img src={btnArrow} alt="" /></span></button>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default ItemDetail