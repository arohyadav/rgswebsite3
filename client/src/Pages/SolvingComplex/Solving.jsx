import React from 'react';
import "./Solving.scss"

const Solving = () => {
  return (
    
        
        <div className='Solving-video'>
        <h2 className='solving-h2-text'>Solving Complex Challenges</h2>
        <p className='solving-challenge-p'>In today’s hyper-connected world and  uncertain times,  organizations </p>
        <p className='solving-sec-p'>are  challenged in more ways than ever</p>
        <video
                  className='solving-video-wrapp'
                  src="rgs-img/solvingvideo.mp4"
                  muted
                  playsInline
                  autoPlay
                  loop
                ></video>
                <p className="solving-last-p-style">We help CXO's and enterprises solve their most complex technology <br/>and business challenges. Our expertise is in our ability to help you sustain, grow and stay ahead of the curve</p>
                </div>

    
  )
}

export default Solving;
