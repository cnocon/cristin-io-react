import React from "react";
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import {
  Routes,
  Route
} from 'react-router-dom'
import Home from "./components/pages/Home.jsx";
import Resume from "./components/pages/Resume.jsx";
import Portfolio from "./components/pages/Portfolio.jsx";
import './components/layout.module.scss';
import Layout from './components/Layout.jsx';
import Blog from "./components/pages/Blog.jsx"
import NotFound from "./components/pages/NotFound.jsx";

export const DataContext = React.createContext();
const { Provider } = DataContext;

const data = { title: "Cristin O'Connor" };

function App({ children }) {

  return (

    <Provider value={data}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Provider>
  )
}

export default App
