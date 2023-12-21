import { createBrowserRouter } from 'react-router-dom';

// project import
import SideBar from '../layout/SideBar';
import Homepage from '../pages/Homepage';
import Teams from '../pages/Teams';
import Tasks from '../pages/Tasks';

const privateRoutes = createBrowserRouter([
  {
    path: '/',
    element: <SideBar />,
    children: [
      {
        path: '/',
        element: <Homepage />
      },
      {
        path: '/teams',
        element: <Teams />
      },
      {
        path: '/tasks',
        element: <Tasks />
      }
    ]
  }
]);

export default privateRoutes;
