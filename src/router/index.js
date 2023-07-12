import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Authentication from '../pages/Authentication';
import DashBoard from '../pages/Dashboard';
import ProjectManagement from '../pages/ProjectManagement';
import ProjectManagementList from '../pages/ProjectManagementList';
import Teams from '../pages/Teams';
import ProjectManagementBoard from '../pages/ProjectManagementBoard';
import HomePage from '../pages/HomePage';
import Permissions from '../pages/Permissions';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      { path: '/login', element: <Authentication /> },
      { path: '/dashboard', element: <DashBoard /> },
      { path: '/project', element: <ProjectManagement /> },
      { path: '/project-list', element: <ProjectManagementList /> },
      { path: '/teams', element: <Teams /> },
      { path: '/project-board', element: <ProjectManagementBoard /> },
      { path: '/permissions', element: <Permissions /> },
      
    ],
  },
]);

export default router;
