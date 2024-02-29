import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import btnArrow from '../assets/img/section-btn-arrow.webp'
import tickMark from '../assets/img/check-mark.webp'
import standardIcon from '../assets/img/std-icon.webp'
import premiumIcon from '../assets/img/pre-icon.webp'

function PlanScreen() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleBox = () => {
    setIsOpen(!isOpen);
  };


  const location = useLocation();
  const selectedType = location.state?.selectedType || '';

  const [selectedPlan, setSelectedPlan] = useState(() => {
    const savedPlan = localStorage.getItem('selectedPlan');
    return savedPlan || '';
  });

  const [selectedTask] = useState(() => {
    const savedTask = localStorage.getItem('selectedTask');
    return savedTask || '';
  });

  const [selectedOption] = useState(() => {
    const savedOption = localStorage.getItem('selectedOption');
    return savedOption || '';
  });

  const handlePlanSelection = (plan) => {
    setSelectedPlan(plan);
  };

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('selectedPlan', selectedPlan);
  }, [selectedPlan]);

  const handleApply = () => {
    navigate('/alteration', { state: { selectedPlan, selectedType } });
  };

  return (
    <section  className='select-plan-section same-bg-section relative' >
      <div className="container  padding-x-all">
        <div className="select-plan-box sec-com-padding flex-box justify-between align-center">

          <div className={`show-box ${isOpen ? 'open' : ''}`} onClick={toggleBox}>
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
              <h4 className='show-box-answer'>{selectedType ? selectedType : ''} {selectedTask ? selectedTask : '-'}</h4>
              <p className='show-box-para' >{selectedOption ? selectedOption : '-'}</p>
            </div>
          </div>

          <div className="select-plan-inner-box">
            <h2>Select your FXRY plans that suit you.</h2>
            <button onClick={() => handlePlanSelection('Standard')}
            className={selectedPlan === 'Standard' ? 'plan-selected standard-btn flex-box justify-between align-center' : 'standard-btn flex-box justify-between align-center'} >
              <div className="icon-box">
                <img src={standardIcon} alt="" />
              </div>
              <div className="text-box">
                  <h3>FXRY Standard Pricing</h3>
                  <h4>Quality at an affordable price for <br/> your everyday items.</h4>
                  <p className='para' >Our skilled and experienced in-house tailor team means you can expect a high quality finish.</p>
              </div>  
              <div className="check-box">
                <img src={tickMark} alt="" />
              </div>
            </button>

            <button  onClick={() => handlePlanSelection('Premium')} 
            className={selectedPlan === 'Premium' ? 'plan-selected premium-btn flex-box justify-between align-center' : 'premium-btn flex-box justify-between align-center'}>
            <div className="icon-box">
                <img src={premiumIcon} alt="" />
              </div>
              <div className="text-box">
                  <h3>FXRY Premium Pricing</h3>
                  <h4>Recommended for higher value, as well as intricate, delicate or more sentimental items.</h4>
                  <p className='para' >Our most experienced tailors will be handling your items to ensure the highest quality.</p>
              </div>  
              <div className="check-box">
                <img src={tickMark} alt="" />
              </div>
            </button>
            <p className='unsure-btn' >Unsure? Book a free virtual fixer consultation</p>
            <button className='section-main-btn' onClick={handleApply}>Select a service <span><img src={btnArrow} alt="" /></span></button>
          </div>
        </div>
      </div>  
    </section>
  );
}

export default PlanScreen;
