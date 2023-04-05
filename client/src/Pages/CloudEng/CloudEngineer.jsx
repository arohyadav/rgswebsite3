import React from 'react';
import CloudSlides from './CloudSlide/CloudSlides';
import "./CloudEngineer.scss";
import Footer from '../NewFooter/Footer';



const CloudEngineer = () => {
  return (
    <div>
      <CloudSlides/>
      <div className='cloud_div_cont'>
        <h2 className='cloud_h2_text'>Strategy to scale</h2>
        <p className='cloud_p_textds'>This company has a unique purpose and growth journey. That's why you need a distinct cloud strategy to take advantage of breakthrough technologies, scale rapidly, and seize emerging opportunities. RGS can help you drive business value, build resilience, and advance your goals of transformation, adaptation, and innovation for a reimagined future.</p>
      </div>


      {/*our approach */}

      <div className='cloud_approach_sec'>
        <h2 className='cloud_apprch_des'>Our Cloud Approach</h2>
        <img  src="rgs-img/cloudapp.png" alt="" className='cloud_approac_img'></img>
        <p className='cloud_apprch-p'>Innovative and reimagine</p>




      </div>

      {/* Cloud offering page */}
{/*<div className='cloud_offer_div'>
      <div className='cloud_offer_info'>
       <div className="cloud-offer-fsimg"></div>
       <div className="cloud-offer1"></div>
       <div className="cloud-offer1"></div>
       <div className="cloud-offer1"></div>
       <div className="cloud-offer1"></div>
      </div>
  </div> */}

<div className='cloud_data_grid'>
  <h2 className='cloud-off-inf'>Our Cloud Offering</h2>

<div class="image-grid">
		<img class="image-grid-col-2 image-grid-row-2" src=" rgs-img/cloud1.png" alt="architecture"/>


		<img src="rgs-img/cloudins.png" alt="architecture"/>
		<img src="rgs-img/clouds_loop.jpg" alt="architecture"/>
		<img src="rgs-img/cloud4.png" alt="architecture"/>
		<img src="rgs-img/datacoll.webp" alt="architecture"/>
	</div>


  </div>


{/* Client SUccess AWS */}


<div className="aws-client_info">
        <img className="aws_learn_imgs" src="rgs-img/awslst.png" alt=""></img>

        <div className="aws-client_wrap">
     <h3  className='aws-font-style'> AWS re:Invent – Data Monetization <br/> Journey on AWS </h3>

     <p className='aws-dataeng-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
     </div>
     </div>

<Footer/>
    </div>
  )
}

export default CloudEngineer
