import React from "react";
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import './components/layout.module.scss';
import Layout from './components/Layout.jsx';

export const DataContext = React.createContext();
const { Provider } = DataContext;

const data = { title: "Cristin O'Connor" };

function App({ children }) {

  return (
    <Provider value={data}>
      <Layout>
        {children}
      </Layout>
    </Provider>
  )
}

export default App
