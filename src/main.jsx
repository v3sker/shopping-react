import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import '@fontsource-variable/montserrat';
import '@fontsource-variable/inter';

import routes from './lib/routes.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
