import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  iconOne from '../assets/img/pincode-icon-1.webp' 
import  iconTwo from '../assets/img/pincode-icon-2.webp' 
import  iconThree from '../assets/img/pincode-icon-3.webp' 

function PincodeScreen() {
  const [pincode, setPincode] = useState(() => {

    const savedPincode = localStorage.getItem('pincode');
    return savedPincode || '';
  });
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('pincode', pincode);
  }, [pincode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate pincode if needed
    navigate('/types');
  };

  return (
    <section className='pincode-section relative' >
      <div className="container padding-x-all">
        <div className="pincode-box sec-com-padding " >
          <h1 className='relative' >Stitch magic, doorstep click:<br/> Affordable fit on the go.</h1>

          <ul className='pincode-usp-listing flex-box' >
              <li className='flex-box' >
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
              <li className='flex-box' >
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
              <li className='flex-box' >
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

          <form className='pincode-form' onSubmit={handleSubmit}>
            <input
              type="text"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              placeholder="Enter Your Zip Cope..."
              />
            <button className='pincode-form-btn' type="submit">Get Started</button>
          </form>

          <p className='form-down-text' >
            Currently only in Seattle*
          </p>

        </div>
      </div>
    </section>
  );
}

export default PincodeScreen;
