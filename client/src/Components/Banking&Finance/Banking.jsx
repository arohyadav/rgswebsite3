import React from 'react';
import './Banking.scss';
import FinanceDetail from './FinanaceDetail';

const Banking = () => {
  return (
    <div>
      <div className='banking_fiananc'>
        <img
          className='banking_img_data'
          src='rgs-img/Banking.png'
          alt=''
        ></img>
      </div>
      <div className='bank_finan_div'>
        <h2 className='banks_h2_ds'>Banking & Financial Services</h2>
        <p className='finan_p_sty'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque atque
          natus suscipit mollitia? Error, quam.
        </p>
      </div>

      <p className='finance_bank_p'>
        As traditional institutions and fintechs alike strive for growth and to
        improve margins, reducing complexity and optimizing operations is
        imperative to deliver differentiated experiences. We help our clients to
        achieve this through the implementation of a digital mosaic of
        disruptive technologies – empowering them to deliver hyper-personalized
        financial services that are valued by their customers.
      </p>

      <FinanceDetail />

      <div className='banks-info'>
        <h3 className='bnks-h3-des'>
          We selected RGS to help us build our platform for a number of reasons,
          including their deep experience and expertise in the digital banking
          space and with the core component technologies we have chosen, and
          also because our strategy aligns closely with Rhombus Global Serivce
          own thinking on Digital Mosaic. We took great comfort in finding that
          alignment, and as a result, our relationship is proving to be a great
          fit
        </h3>
        <p className='bank-fs-p'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
          eligendi.
        </p>
      </div>

      {/* why choose rgs */}

      <div className='banking_div_ds'>
    <p className='bank_p_fs'>Why Choose RGS ?</p> 
    <div className="banks-finance-box">Deep Industry Expertise</div>
    <div className="banks-finance-box">Technology Insights</div>
    <div className="banks-finance-box">Robust partner Ecosystem</div> 
    </div>

    </div>
  );
};

export default Banking;
