import React from 'react';
import '../../design/custom/pages/login.scss';
import logo from '../../assets/images/logo.svg';
import logoDark from '../../assets/images/logo-dark.svg';
import iconGoogle from '../../assets/images/google.svg';
const Authentication = () => {
  return (
    <>
      <div className="login-cover d-flex align-items-center">
        <div className='logo-block'>
          <a href='#'>
          <img src={logo} />
          </a>
        </div>
        <div className='login-block'> 
          <div className='logo-block-sm'>
            <a href='#'>
              <img src={logoDark} />
            </a>
          </div>
          <div className='login-title'>
            <h2>Login Your Account</h2>
            <p>Login using Spericorn Google Account to access the Spericorn Project Management Application</p>
          </div>
          <div className='login-btn-block'>
            <a href='#' className='login-btn d-flex align-items-center justify-content-center'>
              <img src={iconGoogle} /> Login with Spericorn Google Account
            </a>
          </div>
        </div>  
      </div>
    </>
  );
};

export default Authentication;
