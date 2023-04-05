import React from 'react';
import Footer from '../NewFooter/Footer';
import "./Dataeng.scss";

const Dataeng = () => {
  return (
    <div class="dataeng-info">
       
      <img  className="dataeng-img" src="rgs-img/dataengineer.jpg" alt=""></img>
      <h3 className="data-eng-h3">Data Engineering and Solution</h3>
       
       <p className="data-eng-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
       <br/><br/>
       The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.</p>

      <div className="ai-data-cotain">
        
        <img className="ai-data-img" src="rgs-img/dataEng3.jpg" alt=""></img>

        <div className="ai-sec-h3-div">
     <h3  className='ai-font-style'> Artificial Intelligence</h3>

     <p className='ai-dataeng-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
     </div>
        </div>


        {/* Data Scientist */}


        <div className="data-scientist-cotain">
        <img className="data-scient-img" src="rgs-img/data-scientist.jpg" alt=""></img>

        <div className="data-scient-sec-h3">
     <h3  className='ai-font-style'> Data Scientist</h3>

     <p className='ai-dataeng-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
     </div>
        </div>



        {/* Data Management */}

        <div className="data-manage_info">
        <img className="data-manage-img" src="rgs-img/datamanag.jpeg" alt=""></img>

        <div className="data-manage-div-des">
     <h3  className='ai-font-style'> Data Management</h3>

     <p className='ai-dataeng-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
     </div>
        </div>



        {/* Machine Learning */}

        
        <div className="machine-learn_info">
        <img className="machine_learn_imgs" src="rgs-img/ML.jpg" alt=""></img>

        <div className="machine-learn_wrap">
     <h3  className='ai-font-style'> Machine Learning</h3>

     <p className='ai-dataeng-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
     </div>
     </div>
<div className='dataeng-footr_des'>
<Footer/>
</div>

    </div>
  )
}

export default Dataeng
