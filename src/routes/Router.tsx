import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';
import SalaryPage from '../pages/SalaryPage';
import NotFoundPage from '../pages/NotFoundPage';
import Layout from '../layout/Layout';
import { ROUTER_PATH } from '../constants/constant';

const Router = () => {
  const { HOME, LOGIN, PROFILE, SALARY } = ROUTER_PATH;

  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <NotFoundPage />,
      children: [
        { path: HOME, element: <HomePage /> },
        { path: LOGIN, element: <LoginPage /> },
        { path: PROFILE, element: <ProfilePage /> },
        { path: SALARY, element: <SalaryPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;