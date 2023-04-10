import React from 'react';
import ReactDOM from 'react-dom/client';
import Capitulos from './Capitulos';
import './styles.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Capitulo3 from "./capitulo3";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Capitulos/>
  },
  {
    path: '/capitulo3',
    element: <Capitulo3/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);
