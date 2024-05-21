import styled from "styled-components"

export const StyledBrandContainer: any = styled.div`
  text-align: center;
  position: relative;
  cursor: pointer;

  p {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translateX(-50%);
  }
`
export const StyledBrand: any = styled.div`
    padding: 0;
    margin: 1rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 50px;
    font-family: Pacifico, serif;
    width: 120px;
    border-radius: 50%;

    img {
      max-width: 100%;
      display: block;
    }
`
export const StyledLayout = styled.div`
  .container-fluid {
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
  }

  .wrapper-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .content {
    padding: 1.5rem;
  }

  .rounded-circle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .navbar-collapse {
    flex-basis: 100%;
    justify-items: center;
    align-items: center;
    justify-content: center;
  }
  .navbar-collapse nav {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 320px;
    margin: 1rem 0;
  }
  .navbar-collapse ul li {
    text-align: center;
  }
`