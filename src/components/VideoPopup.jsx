import React from 'react';
import closeIcon from '../assets/img/close-icon.png'

const VideoPopup = ({ videoSrc, onClose }) => {
  return (
    <div className="video-popup">
      <div className="video-popup-inner">
        <video src={videoSrc} controls autoPlay></video>
        <button className="close-btn" onClick={onClose}>
            <img className='pop-up-close-icon' src={closeIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default VideoPopup;
