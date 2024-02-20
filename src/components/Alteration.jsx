import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import btnArrow from '../assets/img/section-btn-arrow.webp'
import alterationIconTwo from'../assets/img/alteration-icon-2.webp'
import alterationIconOne from'../assets/img/alteration-icon-1.webp'


function Alteration() {
    const location = useLocation();
    const selectedType = location.state?.selectedType || '';
  
    const [selectedPlan, setSelectedPlan] = useState(() => {
      const savedPlan = localStorage.getItem('selectedPlan');
      return savedPlan || '';
    });
    


  return (
    <section className='items-section same-bg-section relative' >
      <div className="container padding-x-all">
        <div className="items-box sec-com-padding flex-box justify-between align-center">
    
          <div className="show-box">
            <div className="show-box-list">
              <p className='show-box-para' >Your items</p>
              <h4 className='show-box-answer'>{selectedType ? selectedType : '-'}</h4>
            </div>

            <div className="show-box-list">
              <p className='show-box-para' >Services</p>
              <h4 className='show-box-answer'>{selectedPlan ? selectedPlan : '-'}</h4>
            </div>

            <div className="show-box-last-list">
              <p className='show-box-para' >Task Detail</p>
              <h4 className='show-box-answer'>{selectedType} altration</h4>
              <p className='show-box-para' >Hem & Inseam, Rise & Break, Cuff, Waist, Bottom, Taper, Take in</p>
            </div>
          </div>

          <div className="item-select-box">
            <h2>Would you like your skirt altered<br/> or repaired?</h2>
            <p className='para' >Select one service, if you require another you can add this at a later stage.</p>

            <div className="alteration-select-box wears-box flex-box justify-between">
                <div className="icon-main-box">
                    <div className="icon-box">
                        <img src={alterationIconOne} alt="" />
                        <h6>Altered</h6>
                    </div>
                    <div className="icon-box">
                        <img src={alterationIconTwo} alt="" />
                        <h6>Repair</h6>
                    </div>
                </div>
                <div className="text-box">
                    <h4>How would you like your item<br/> to be altered?</h4>
                    <p className="para">Select one option...</p>
                    <ul className='items-wears-listing' >
                        <li>
                            <button>
                                Waist in
                            </button>
                        </li>
                        <li>
                            <button>
                                Take in from sides
                            </button>
                        </li>
                        <li>
                            <button>
                                Shorten
                            </button>
                        </li>
                        <li>
                            <button>
                                Upsize
                            </button>
                        </li>
                        
                    </ul>
                </div>
            </div>

            <button className='section-main-btn'>Fit it to you<span><img src={btnArrow} alt="" /></span></button>

          </div>
        </div>
      </div>
    </section>

    
  );
}

export default Alteration;
