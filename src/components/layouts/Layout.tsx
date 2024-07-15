/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { StyledLayout, StyledBrand, StyledBrandContainer } from "../../layouts/StyledLayout";
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer';

const CenterDiv = ({ children }: React.PropsWithChildren ) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-12 text-center py-2">
        {children}
      </div>
    </div>
  </div>
);

const StyledCenterDiv = styled(CenterDiv)``
// Higher order component example for passing shared functionality to children that need it
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function withHover(Component: any) {
  return function (props: any) {
    const [hovering, setHovering] = React.useState(false);

    const mouseOver = () => {
      return setHovering(true);
    }
    const mouseOut = () => setHovering(false);

    return (
      <div onMouseOver={mouseOver} onMouseOut={mouseOut}>
        <Component {...props} hovering={hovering} />
      </div>
    );
  };
}

// Render props version
const Hover = ({ render }: { render: any }) => {
  const [hovering, setHovering] = React.useState(false);

  const mouseOver = () => setHovering(true);
  const mouseOut = () => setHovering(false);

  return (
    <div onMouseOver={mouseOver} onMouseOut={mouseOut}>
      {render(hovering)}
    </div>
  );
}

const Brand: React.FC<{ hovering: boolean }> = ({ hovering }) => {
  return (
    <StyledBrandContainer>
      <StyledBrand className="navbar-brand" href="/">
        <img src="/images/avatar-white.png" alt="Cristin O'Connor illustration" className="rounded rounded-circle" />
        <h1 className="fw-normal fw-bolder font-pacifico">Cristin O'Connor</h1>
      </StyledBrand>
      <p className="badge bg-dark text-light">{hovering && 'Hello!'}</p>
    </StyledBrandContainer>
  )
}

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [hovering, setHovering] = useState(false);
  
  return (
    <>
      <StyledLayout>
        <div className="header wrapper-outer">
          <header className="wrapper-inner">
            <nav className="navbar navbar-expand-md">
              <StyledCenterDiv>
                <Hover render={
                  (hovering: boolean) => <Brand hovering={hovering} />
                } />
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <nav style={{marginBottom: "2rem"}}>
                    <NavLink
                      to="/"
                      style={{marginRight: "1rem"}}
                      className={({ isActive }) => isActive ? "active btn btn-secondary" : "btn btn-secondary"}
                    >
                      Résumé
                    </NavLink>
                    <NavLink
                      to="/writing-sample"
                      style={{whiteSpace: "nowrap", marginRight: "1rem"}}
                      className={({ isActive }) => isActive ? "active btn btn-secondary" : "btn btn-secondary"}
                    >
                      Writing Sample
                    </NavLink>
                    {/* <NavLink
                      to="/portfolio"
                      className={({ isActive }) => isActive ? "active btn btn-secondary" : "btn btn-secondary"}
                    >
                      Portfolio
                    </NavLink> */}
                  </nav>
                </div>
                </StyledCenterDiv>
            </nav>
          </header>
        </div>
        <div className="content wrapper-outer">
          <div className="wrapper-inner">
            {children}
          </div>
        </div>
      </StyledLayout>
      <Footer />
    </>
  );
}

export default withHover(Layout);
