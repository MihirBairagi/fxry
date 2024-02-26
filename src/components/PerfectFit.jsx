import React, { useState, useEffect, useRef  } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import btnArrow from '../assets/img/section-btn-arrow.webp'
import pinIcon from '../assets/img/pin.webp'
import matchIcon from '../assets/img/match.webp'
import measureIcon from '../assets/img/measure.webp'
import videoOne from '../assets/img/video-one.MP4'
import videoThumnail from '../assets/img/thumbnail.webp'
import playIcon from '../assets/img/play-icon.png';
import tickMark from '../assets/img/check-mark.webp'
import VideoPopup from './VideoPopup';

const PerfectFit = () => {
    const [selectedTab, setSelectedTab] = useState(() => {
        const storedTab = localStorage.getItem('selectedTab');
        return storedTab ? parseInt(storedTab) : 1;
      });
    
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

      const videoRef = useRef(null);
      const [isPlaying, setIsPlaying] = useState(false);
      const [showPopup, setShowPopup] = useState(false);

      const togglePlay = () => {
        const video = videoRef.current;
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      };

      const handleEnded = () => {
        const video = videoRef.current;
        video.currentTime = 0;
        video.play();
      };
      const handlePlay = () => {
        setIsPlaying(true);
      };
      const handlePause = () => {
        setIsPlaying(false);
      };
    const handleVideoClick = () => {
            setShowPopup(true);
        };

        const handleClosePopup = () => {
            setShowPopup(false);
        };

    const navigate = useNavigate();

      useEffect(() => {
        localStorage.setItem('selectedTab', selectedTab.toString());
      }, [selectedTab]);
    
      const selectTab = (tabNumber) => {
        setSelectedTab(tabNumber);
      };
    
      const handleApply = () => {
        navigate('/know-more', { state: { selectedPlan, selectedType, selectedOption } });
      };

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
                <h4 className='show-box-answer'>{selectedType ? selectedType : ''} {selectedTask ? selectedTask : '-'}</h4>
                <p className='show-box-para' >{selectedOption ? selectedOption : '-'}</p>
              </div>
            </div>
  
            <div className="item-select-box">
              <h2>Help us to get the perfect fit.</h2>
              <p className='para' >Select an option.</p>
  
               <div className="perfect-fit-box flex-box justify-between">
                <div className="tabs-box">
                    <button onClick={() => selectTab(1)} className={selectedTab === 1 ? 'item-selected' : ''} >
                        <img src={pinIcon} alt="" />
                        <h6>Pin Items</h6>
                    </button>
                    <button onClick={() => selectTab(2)} className={selectedTab === 2 ? 'item-selected' : ''}  >
                        <img src={matchIcon} alt="" />
                        <h6>Match Items</h6>
                    </button>
                    <button onClick={() => selectTab(3)} className={selectedTab === 3 ? 'item-selected' : ''}  >
                        <img src={measureIcon} alt="" />
                        <h6>Measure</h6>
                    </button>
                </div>
                <div className="tab-content-box">
                    {selectedTab === 1 && 
                        <div className='common-box content-box-one flex-box justify-between' >
                            <div className="video-box relative">
                                <h4 className='desktop-none' >
                                    Quality at an affordable price
                                    for your everyday items.
                                </h4>
                                {showPopup && <VideoPopup videoSrc={videoOne} onClose={handleClosePopup} />}
                                <video
                                    ref={videoRef}
                                    src={videoOne}
                                    autoPlay
                                    muted
                                    poster={videoThumnail}
                                    onClick={handleVideoClick}
                                    onEnded={handleEnded}
                                    onPlay={handlePlay}
                                    onPause={handlePause}
                                    className='desktop-none'
                                    ></video>
                                <div
                                    className="play-btn desktop-none"
                                    onClick={togglePlay}
                                    style={{ display: isPlaying ? 'none' : 'block', alignItems: 'center', justifyContent: 'center' }}
                                    >
                                    <img src={playIcon} alt="Play" />
                                </div>

                                <video className='mobile-none'  ref={videoRef} src={videoOne} autoPlay muted poster={videoThumnail}  onClick={togglePlay} onEnded={handleEnded} onPlay={handlePlay} onPause={handlePause}></video>
                                <div className="play-btn mobile-none" onClick={togglePlay} style={{ display: isPlaying ? 'none' : 'block', alignItems: 'center', justifyContent: 'center' }}>
                                    <img src={playIcon} alt="Play"/>
                                </div>
                            </div>
                            <div className="text-box">
                                <h4 className='mobile-none' >
                                    Quality at an affordable price
                                    for your everyday items.
                                </h4>
                                <p className='para' >
                                    Give us the measurements, pin the item, or send in a matching item before? Watch our super quick and helpful tutorial videos.
                                </p>
                                <a className='popup-text' >Unsure? Book a free virtual fixer consultation</a>
                                <h5> <span><img src={tickMark} alt="" /></span> I confirm that i understood & pin the item </h5>
                            </div>
                        </div>
                    }
                    {selectedTab === 2 && 
                        <div className='common-box content-box-two flex-box justify-between' >
                            <div className="video-box relative">
                                <h4 className='desktop-none' >
                                    Match Tutorial
                                </h4>
                                {showPopup && <VideoPopup videoSrc={videoOne} onClose={handleClosePopup} />}
                                <video
                                    ref={videoRef}
                                    src={videoOne}
                                    autoPlay
                                    muted
                                    poster={videoThumnail}
                                    onClick={handleVideoClick}
                                    onEnded={handleEnded}
                                    onPlay={handlePlay}
                                    onPause={handlePause}
                                    className='desktop-none'
                                    ></video>
                                <div
                                    className="play-btn desktop-none"
                                    onClick={togglePlay}
                                    style={{ display: isPlaying ? 'none' : 'block', alignItems: 'center', justifyContent: 'center' }}
                                    >
                                    <img src={playIcon} alt="Play" />
                                </div>

                                <video className='mobile-none'  ref={videoRef} src={videoOne} autoPlay muted poster={videoThumnail}  onClick={togglePlay} onEnded={handleEnded} onPlay={handlePlay} onPause={handlePause}></video>
                                <div className="play-btn mobile-none" onClick={togglePlay} style={{ display: isPlaying ? 'none' : 'block', alignItems: 'center', justifyContent: 'center' }}>
                                    <img src={playIcon} alt="Play"/>
                                </div>
                            </div>
                            <div className="text-box">
                                <h4 className='mobile-none' >
                                    Match Tutorial
                                </h4>
                                <p className='para' >
                                    Give us the measurements, pin the item, or send in a matching item before? Watch our super quick and helpful tutorial videos.
                                </p>
                                <a className='popup-text' >Unsure? Book a free virtual fixer consultation</a>
                                <div className="item-describe-box">
                                    <h5 className='describe-heading' >Match Items Description</h5>
                                    <textarea className='match-description'
                                        placeholder=""
                                    />
                                </div>
                            </div>
                        </div>
                    }
                    {selectedTab === 3 && 
                        <div className='common-box content-box-three flex-box justify-between' >
                            <div className="text-box">
                                <h4>
                                    Adjustment Notes
                                </h4>
                                <p className='para' >
                                   Please tell us how much you would like to change your item by and specify inches.<br/>Our fixers would love to know your own relevant measurements too.
                                </p>
                                <a className='popup-text' >Unsure? Book a free virtual fixer consultation</a>
                                <div className="item-describe-box">
                                    <h5 className='describe-heading' >Measure Description</h5>
                                    <textarea className='match-description'
                                        placeholder=""
                                    />
                                </div>
                            </div>
                            <div className="example-note-box">
                               <h4>Example notes</h4>
                               <p className='para mb-p5' >
                                “Sure, for the skirt, the measurements are as follows:
                               </p>
                               <p className='para' >
                                    - Waist: 28 inches
                               </p>
                               <p className='para' >
                                    - Hips: 36 inches
                               </p>
                               <p className='para mb-p5' >
                                    - Length: 22 inches
                               </p>
                               <p className='para' >
                                    Additionally, you can also check out our tutorial videos for further assistance in pinning or sending in matching items.”
                               </p>
                            </div>
                        </div>
                    }
                </div>
               </div>
  
              <button className='section-main-btn' onClick={handleApply} >Next<span><img src={btnArrow} alt="" /></span></button>
  
            </div>
          </div>
        </div>
      </section>
      );
    };
    
export default PerfectFit