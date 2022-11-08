import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom";

import Main from './components/Main/Main';
import NotFound from './components/NotFound/NotFound';
import Products from './components/Products/Products';
import Basket from './components/Basket/Basket';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route
      path="/"
      element={<Main />}
      errorElement={<NotFound />}
    >
    <Route errorElement={<NotFound />}>
      <Route
        path="products"
        element={<Products />}
      />
      <Route
        path="basket"
        element={<Basket />}
      />
    </Route>
  </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <RouterProvider router={router} />
);