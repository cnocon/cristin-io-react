import React from "react";
// import { DataContext } from '../App.jsx';
import Header from "./Header.jsx"
import Footer from "./Footer.jsx";
import "./layout.module.scss";


const Layout = ({ children }) => {
  // const data = React.useContext(DataContext);

  return <div className="layout-container">
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </div>

}

export default Layout;
