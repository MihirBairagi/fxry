import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import btnArrow from '../assets/img/section-btn-arrow.webp'
import alterationIconTwo from'../assets/img/alteration-icon-2.webp'
import alterationIconOne from'../assets/img/alteration-icon-1.webp'


function Alteration() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleBox = () => {
    setIsOpen(!isOpen);
  };


    const location = useLocation();
    const selectedType = location.state?.selectedType || '';
  
    const [selectedPlan] = useState(() => {
      const savedPlan = localStorage.getItem('selectedPlan');
      return savedPlan || '';
    });

    const [selectedTask, setSelectedTask] = useState(() => {
      const savedTask = localStorage.getItem('selectedTask');
      return savedTask || '';
    });
    
    const [selectedOption, setSelectedOption] = useState(() => {
      const savedOption = localStorage.getItem('selectedOption');
      return savedOption || '';
    });
    
  
    const handleTaskSelection = (task) => {
      setSelectedTask(task);
    };
  
    const handleOptionSelection = (option) => {
      setSelectedOption(option);
    };
  
    const navigate = useNavigate();
  
    useEffect(() => {
      localStorage.setItem('selectedTask', selectedTask);
    }, [selectedTask]);
  
    useEffect(() => {
      localStorage.setItem('selectedOption', selectedOption);
    }, [selectedOption]);


    const handleApply = () => {
      navigate('/perfect-fit', { state: { selectedPlan, selectedType, selectedOption } });
    };


  return (
    <section className='items-section same-bg-section relative' >
      <div className="container padding-x-all">
        <div className="alteration-box items-box sec-com-padding flex-box justify-between align-center">
    
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

          <div className="item-select-box">
            <h2>Would you like your {selectedType ? selectedType : 'item'} altered or repaired?</h2>
            <p className='para' >Select one service, if you require another you can add this at a later stage.</p>

            <div className="alteration-select-box wears-box flex-box justify-between">
                <div className="icon-main-box">
                        <h4 className='desktop-none' >How would you like your item<br/> to be {selectedTask ? selectedTask : ''}?</h4>
                        <button onClick={() => handleTaskSelection('Alteration')}  className={selectedTask === 'Alteration' ? 'icon-box item-selected' : 'icon-box'} >
                          <img src={alterationIconOne} alt="" />
                          <h6>Altered</h6>
                        </button>
                        <button onClick={() => handleTaskSelection('Repair')}  className={selectedTask === 'Repair' ? 'icon-box item-selected' : 'icon-box'} >
                          <img src={alterationIconTwo} alt="" />
                          <h6>Repair</h6>
                        </button>
                </div>
                <div className="text-box">
                    <h4 className='mobile-none' >How would you like your item<br/> to be {selectedTask ? selectedTask : ''}?</h4>
                    <p className="para">Select one option...</p>
                    <ul className='items-wears-listing' >
                        <li>
                            <button  onClick={() => handleOptionSelection('Waist in')} className={selectedOption === 'Waist in' ? 'item-selected' : ''}  >
                                Waist in
                            </button>
                        </li>
                        <li>
                            <button  onClick={() => handleOptionSelection('Take in from sides')} className={selectedOption === 'Take in from sides' ? 'item-selected' : ''} >
                                Take in from sides
                            </button>
                        </li>
                        <li>
                            <button  onClick={() => handleOptionSelection('Shorten')} className={selectedOption === 'Shorten' ? 'item-selected' : ''} >
                                Shorten
                            </button>
                        </li>
                        <li>
                            <button  onClick={() => handleOptionSelection('Upsize')} className={selectedOption === 'Upsize' ? 'item-selected' : ''} >
                                Upsize
                            </button>
                        </li>
                        
                    </ul>
                </div>
            </div>

            <button className='section-main-btn'  onClick={handleApply}> Fit it to you<span><img src={btnArrow} alt="" /></span></button>

          </div>
        </div>
      </div>
    </section>

    
  );
}

export default Alteration;
