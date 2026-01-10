import React from "react";
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.scss'
import {
  Routes,
  Route
} from 'react-router-dom'
import Home from "./components/pages/Home.jsx";
import Resume from "./components/pages/Resume.jsx";
import Portfolio from "./components/pages/Portfolio.jsx";
import Layout from './components/Layout.jsx';
import BlogIndex from "./blog/BlogIndex.jsx";
import BlogPost from "./blog/BlogPost.jsx";
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
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Provider>
  )
}

export default App
