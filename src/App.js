import React from 'react';
import { Outlet } from 'react-router-dom';

import './design/app.scss'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
const App = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
export default App;
