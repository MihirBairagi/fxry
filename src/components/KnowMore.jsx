import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import btnArrow from '../assets/img/section-btn-arrow.webp'

const KnowMore = ()=>{

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

    const [selectedTask] = useState(() => {
      const savedTask = localStorage.getItem('selectedTask');
      return savedTask || '';
    });
    
    const [selectedOption] = useState(() => {
      const savedOption = localStorage.getItem('selectedOption');
      return savedOption || '';
    });

    const [notes, setNotes] = useState(() => {
        const notes = localStorage.getItem('notes');
        return notes || '';
      });

      const navigate = useNavigate();

      useEffect(() => {
        localStorage.setItem('notes', notes);
      }, [notes]);
    

    return(
        <section className=' items-section same-bg-section relative' >
        <div className="container padding-x-all">
          <div className="know-more-box sec-com-padding flex-box justify-between align-center">
      
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
              <h2>Is there anything else you would<br/> like for us to know?</h2>
              <p className='para mb-1' >Give us the measurements, pin the item, or send in a matching item before? Watch our <br/> super quick and helpful tutorial videos.</p>
  
  
              <div class="item-describe-box"><h5 class="describe-heading">Notes to our tailors</h5>
                <textarea class="know-more-description" placeholder="eg.Be careful of the zip."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                ></textarea>
              </div>

              <a class="popup-text">Unsure? Book a free virtual fixer consultation?</a>

              <button className='section-main-btn mt-2-8' >Next<span><img src={btnArrow} alt="" /></span></button>
  
            </div>
          </div>
        </div>
      </section>
    )

} 
    

export default KnowMore