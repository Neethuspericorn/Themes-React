import React from 'react';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div onClick={() => navigate('/login')}>Click here to go to Auth</div>
      <div onClick={() => navigate('/dashboard')}>
        Click here to go to DashBoard
      </div>
      <div onClick={() => navigate('/project')}>
        Click here to go to Project Management
      </div>

      <div onClick={() => navigate('/project-board')}>
        Click here to go to Project Management Board
      </div>

      <div onClick={() => navigate('/permissions')}>
        Click here to go to Permissions
      </div>

      
    </div>
  );
};

export default HomePage;
