import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import btnArrow from '../assets/img/section-btn-arrow.webp'
function TypeSelectionScreen() {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleBox = () => {
    setIsOpen(!isOpen);
  };

  const [selectedType, setSelectedType] = useState(() => {
    const savedType = localStorage.getItem('selectedType');
    return savedType || '';
  });
  const [describe, setDescribe] = useState(() =>{
    const savedDescribe = localStorage.getItem('describe');
    return savedDescribe || '';
  });
  const [selectedPlan, setSelectedPlan] = useState(() => {
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
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('describe', describe);
    localStorage.setItem('selectedType', selectedType);
  }, [describe, selectedType ]);
  
  const handleTypeSelection = (type) => {
    setSelectedType(type);
  };

  const handleApply = () => {
    navigate('/plan', { state: { selectedType } });
  };

  return (
    <section className='items-section same-bg-section relative' >
      <div className="container padding-x-all">
        <div className="items-box item-pad-box sec-com-padding flex-box justify-between align-center">
    
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
            <h2>Which item would you like to <br/>alter or repair?</h2>
            <p className='para' >Choose one item. You can add another item later on.</p>

            <div className="wears-box">
              <h5>Upper Wears & Bottom Wears</h5>
              <ul className='items-wears-listing' >
                <li>
                  <button
                    onClick={() => handleTypeSelection('Trench coat')}
                    className={selectedType === 'Trench coat' ? 'item-selected' : ''}
                  >
                    {selectedType === 'Trench coat' ? 'Trench coat' : 'Trench coat'}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleTypeSelection('T-shirt')}
                    className={selectedType === 'T-shirt' ? 'item-selected' : ''}
                  >
                    {selectedType === 'T-shirt' ? 'T-shirt' : 'T-shirt'}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleTypeSelection('Tie')}
                    className={selectedType === 'Tie' ? 'item-selected' : ''}
                  >
                    {selectedType === 'Tie' ? 'Tie' : 'Tie'}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleTypeSelection('Jackets')}
                    className={selectedType === 'Jackets' ? 'item-selected' : ''}
                  >
                    {selectedType === 'Jackets' ? 'Jackets' : 'Jackets'}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleTypeSelection('Ponchos')}
                    className={selectedType === 'Ponchos' ? 'item-selected' : ''}
                  >
                    {selectedType === 'Ponchos' ? 'Ponchos' : 'Ponchos'}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleTypeSelection('Windbreaker')}
                    className={selectedType === 'Windbreaker' ? 'item-selected' : ''}
                  >
                    {selectedType === 'Windbreaker' ? 'Windbreaker' : 'Windbreaker'}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleTypeSelection('Cargo pants')}
                    className={selectedType === 'Cargo pants' ? 'item-selected' : ''}
                  >
                    {selectedType === 'Cargo pants' ? 'Cargo pants' : 'Cargo pants'}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleTypeSelection('Pea Coat')}
                    className={selectedType === 'Pea Coat' ? 'item-selected' : ''}
                  >
                    {selectedType === 'Pea Coat' ? 'Pea Coat' : 'Pea Coat'}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleTypeSelection('Sweater')}
                    className={selectedType === 'Sweater' ? 'item-selected' : ''}
                  >
                    {selectedType === 'Sweater' ? 'Sweater' : 'Sweater'}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleTypeSelection('Shirt')}
                    className={selectedType === 'Shirt' ? 'item-selected' : ''}
                  >
                    {selectedType === 'Shirt' ? 'Shirt' : 'Shirt'}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleTypeSelection('Blazer')}
                    className={selectedType === 'Blazer' ? 'item-selected' : ''}
                  >
                    {selectedType === 'Blazer' ? 'Blazer' : 'Blazer'}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleTypeSelection('Cardigan')}
                    className={selectedType === 'Cardigan' ? 'item-selected' : ''}
                  >
                    {selectedType === 'Cardigan' ? 'Cardigan' : 'Cardigan'}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleTypeSelection('Culottes')}
                    className={selectedType === 'Culottes' ? 'item-selected' : ''}
                  >
                    {selectedType === 'Culottes' ? 'Culottes' : 'Culottes'}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleTypeSelection('Trousers')}
                    className={selectedType === 'Trousers' ? 'item-selected' : ''}
                  >
                    {selectedType === 'Trousers' ? 'Trousers' : 'Trousers'}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleTypeSelection('Skirts')}
                    className={selectedType === 'Skirts' ? 'item-selected' : ''}
                  >
                    {selectedType === 'Skirts' ? 'Skirts' : 'Skirts'}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleTypeSelection('Leggings')}
                    className={selectedType === 'Leggings' ? 'item-selected' : ''}
                  >
                    {selectedType === 'Leggings' ? 'Leggings' : 'Leggings'}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleTypeSelection('Jeggings')}
                    className={selectedType === 'Jeggings' ? 'item-selected' : ''}
                  >
                    {selectedType === 'Jeggings' ? 'Jeggings' : 'Jeggings'}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleTypeSelection('Bell Bottoms')}
                    className={selectedType === 'Bell Bottoms' ? 'item-selected' : ''}
                  >
                    {selectedType === 'Bell Bottoms' ? 'Bell Bottoms' : 'Bell Bottoms'}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleTypeSelection('Cigarette pants')}
                    className={selectedType === 'Cigarette pants' ? 'item-selected' : ''}
                  >
                    {selectedType === 'Cigarette pants' ? 'Cigarette pants' : 'Cigarette pants'}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleTypeSelection('Chinos')}
                    className={selectedType === 'Chinos' ? 'item-selected' : ''}
                  >
                    {selectedType === 'Chinos' ? 'Chinos' : 'Chinos'}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleTypeSelection('Joggers')}
                    className={selectedType === 'Joggers' ? 'item-selected' : ''}
                  >
                    {selectedType === 'Joggers' ? 'Joggers' : 'Joggers'}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleTypeSelection('Cropped Trousers')}
                    className={selectedType === 'Cropped Trousers' ? 'item-selected' : ''}
                  >
                    {selectedType === 'Cropped Trousers' ? 'Cropped Trousers' : 'Cropped Trousers'}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleTypeSelection('Jeans')}
                    className={selectedType === 'Jeans' ? 'item-selected' : ''}
                  >
                    {selectedType === 'Jeans' ? 'Jeans' : 'Jeans'}
                  </button>
                </li>
                
              </ul>
            </div>

            <div className="item-describe-box">
              <h5 className='describe-heading' >Describe your items</h5>
              <textarea
                value={describe}
                onChange={(e) => setDescribe(e.target.value)}

                placeholder="e.g. tan & yellow striped shirt"
              />
            </div>

            <button className='section-main-btn' onClick={handleApply}>Select a service <span><img src={btnArrow} alt="" /></span></button>

          </div>
        </div>
      </div>
    </section>

    
  );
}

export default TypeSelectionScreen;
