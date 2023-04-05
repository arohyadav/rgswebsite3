import React,{useState} from 'react';
import { clientdata } from './clientdata';
import "./ClientStories.scss";
import leftArrow from "../image/leftArrow.png";
import rightArrow from "../image/rightArrow.png";
import { motion } from 'framer-motion';




const ClientStory = () => {
  
  const transition = {type:"spring" , duration: 3};
  const [clientselect,setClientSelect]= useState(0);
const clientLength = clientdata.length;

  return (
    <div className='client-story-container'>
      <div className="client-left-t">
      <h2 className="client-h2">Client Stories</h2>
      <span>What they</span>
      <span>About Us</span>
      <motion.span
      key={clientselect}
        initial={{opacity:0, x:100}}
        animate={{opacity:1, x:0}}
        exit={{opacity:0, x:-100}}
        transition={transition} >
     {clientdata[clientselect].review}
      </motion.span>
      <span>
        <span style={{color:"var(--blue)"}}>
        {clientdata[clientselect].name}
        </span>{" "}
        --  {clientdata[clientselect].status}
      </span>
      </div>
    
    <div className="client-right-t">
      <motion.div 
      initial ={{opacity:0, x:-100}}
      transition={{...transition, duration: 2}}
      whileInView={{opacity:1, x:0}}></motion.div>

      <motion.div
       initial ={{opacity:0, x:100}}
       transition={{...transition, duration: 2}}
       whileInView={{opacity:1, x:0}}
      ></motion.div>


<motion.img key={clientselect} initial={{opacity:0, x:100}}
animate={{opacity:1, x:0}}
exit={{opacity:0, x:-100}}
transition={transition}
src={clientdata[clientselect].image} alt="" />

<div className="client-arrow">
  <img onClick={()=>{
    clientselect===0?setClientSelect(clientLength -1): setClientSelect((prev)=>prev-1)
  }} 
  src={leftArrow} alt=""/>
  <img onClick={()=>{
   // if user last slide then return first slide & if user already first slide then go sec slide
    clientselect === clientLength - 1
    ? setClientSelect(0)
    : setClientSelect((prev) => prev+1);
  }}
   src={rightArrow} alt=""/>
</div>
    </div>
    </div>
  );
}

export default ClientStory
