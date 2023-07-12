import React from 'react';
import '../../../design/custom/pages/profilecard.scss';
import ProfilePic from '../../../assets/images/profile image.png';
import ProfileAvtar from '../../../assets/images/profile-avtar.svg';

function ProfileCard() {
  return (
    <>
    <div className='profile-card d-flex flex-column'>
      <div className='top'>
          <h2 className='card-title'>Welcome Back!</h2>
          <p className='card-s-title'>Spericorn Project Management Tool</p>
      </div>
      <div className='btm-info'>
      <div className='profile-pic'>
        <img src={ProfilePic} alt='profile pic'/>
      </div>
      <div className='user-info'>
        <ul className='d-flex no-list-usr flex-wrap'>
          <li>
            <h2 className='usr-name'>Matthew Wade</h2>
            <p className='usr-title'>Front End Developer</p>
          </li>
          <li>
            <span className='count'>244</span>
            <p className='c-data'>Spericorn ID</p>
          </li>
          <li>
            <span className='count'>244</span>
            <p className='c-data'>Projects Assigned</p>
          </li>
        </ul>
      </div>
      </div>
    </div>
    </>
  )
}

export default ProfileCard