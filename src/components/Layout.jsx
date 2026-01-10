import React from "react";
import { DataContext } from '../App.jsx';
import Header from "./Header.jsx"
import Footer from "./Footer.jsx";

const Layout = ({ children }) => {
  const data = React.useContext(DataContext);
  return <>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </>

}

export default Layout;
