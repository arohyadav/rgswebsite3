import React from 'react';
import "./Dataflow.scss";

const Dataflow = () => {
  return (
    <div className="dataflow-container">
      <img className="data-flow-img" src="rgs-img/white_logo.png" alt=""></img>

    
    
     <div className="data-flow-rgs-contact">
     <img style={{position:"absolute",paddingTop:"60px " ,paddingLeft:"25px"}} src="rgs-img/arrow-btn-light-blue.svg" alt=""></img> 
      <a aria-label="Contact us" class="arrow-btn-white-blue" >Contact </a> 
     


     

      <a aria-label="about" class="arrow-btn-white-blue">About Us</a>
        <img style={{position:"absolute",paddingTop:"152px", paddingLeft:"25px"}}  src="rgs-img/arrow-btn-light-blue.svg" alt=""></img>  
  </div> 
    </div>
  )
}

export default Dataflow
