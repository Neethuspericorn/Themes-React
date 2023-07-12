import React, { useState, useEffect } from "react";
import {  Link } from 'react-router-dom';
import '../../../design/custom/structure/header.scss';

const indexX = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [darkTheme, setDarkTheme] = useState('#ccc');

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
  const root = document.documentElement;
  root?.style.setProperty(
      "--primary",
      darkTheme
  );
}, [darkTheme]);

  return(
    <>
     <header className='header d-flex align-items-center'>
       <div className="headerLinks">
       <Link to="/dashboard" className='headerLink active'>
            Dashboard
       </Link> 
       </div>

       <div className="colorpic d-flex ps-5">
            <div className='p-2'>
                <input type="radio" id="green" name="themeColor" value="green" onClickCapture={()=>setDarkTheme('green')}/>
                <label htmlFor="green">Green</label> 
            </div>

            <div className='p-2'>
              <input type="radio" id="blue" name="themeColor" value="blue" onClickCapture={()=>setDarkTheme('blue')}/>
              <label htmlFor="blue">Blue</label> 
            </div>
            
            <div className='p-2'>
              <input type="radio" id="red" name="themeColor" value="red" onClickCapture={()=>setDarkTheme('red')}/>
              <label htmlFor="red">Red</label>
            </div>
            
       </div>

       <div className="headerDatepicker">
          <div className="datePickWrap">
            <input type="text" className='form-control' placeholder='Date Range'/>
          </div>
       </div>
     </header>
    </>
  )
};

export default indexX;
