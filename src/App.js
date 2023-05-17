

import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './views/NotFound';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/devChallenges/404",
      element: <NotFound />
    }
  ])

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
