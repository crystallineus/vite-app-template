import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Layout } from '../layouts/Layout';
import { NotFound } from '../pages/NotFound';
import { Products } from '../pages/product/Products';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <>
        <Layout />
      </>
    ),
    children: [
      { path: '/home', element: <Home /> },
      { path: '/products', element: <Products /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
