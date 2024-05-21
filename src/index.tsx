import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import data from "./data/appData";
import reportWebVitals from './reportWebVitals';
import 'bootstrap';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Resume } from "./Pages/Resume"
// import { Home } from "./Pages/Home"
import { WritingSample } from './Pages/WritingSample';
import NotFound from './Pages/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Resume />,
    loader: () => data
  },
  {
    path: "/resume",
    element: <Resume />,
    loader: () => data
  },
  {
    path: "/writing-sample",
    element: <WritingSample />,
    loader: () => data
  },
  {
    path: "*",
    element: <NotFound />,
    loader: () => data

  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
