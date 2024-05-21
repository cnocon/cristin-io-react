import styled from "styled-components"

export const ArticleLayout = styled.section`
  margin: 0 auto;
  line-height: 1.65em;
  font-weight: 400;
  font-family: 'Times New Roman';
  font-size: 1rem;
  lineHeight: 1.65em;

  section {
    max-width: 960px;
    margin: 1rem auto;
  }

  * {
    box-sizing: border-box;
  }

  header {
    text-align: center;
    max-width: 1040px;
    margin: 0 auto 2rem;
  }

  header h1 {
    font-family: Oswald, Impact, sans-serif;
    font-weight: 600;
    letter-spacing: 1px;
  }

  header p {
    margin: 0 auto;
    font-family: "Lato", Verdana, sans-serif;
  }

  p {
    font-size: 18px;
    line-height: 1.625em;
  }

  aside {
    max-width: 75%;
    display: block;
    margin: 0 auto 1rem;
    font-size: 20px;
    line-height: 1.4em;
    background-color: #efefef;
    border-radius: 8px;
    color: #000;
    padding: 1rem 1.5rem;
  }

  aside p {
    max-width: 95%;
    margin: 1rem auto;
    font-style: italic;
  }

  p.drop-cap:first-letter {
    font-weight: 700;
    font-size: 2.5em;
  }

  a {
    text-decoration: none;
    border-bottom: 1px solid #0000ff;
  }

  a:hover,
  a:focus,
  a:active {
    border-bottom: 0;
  }

  h2 {
    text-align: center;
    font-size: 28px;
    font-family: Oswald, Impact, sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 3rem auto 1.5rem;
  }

  h3 {
    font-size: 28px;
    font-weight: 100;
    font-family: Lato, Arial, sans-serif;
    font-weight: 400;
    margin: 2.5rem auto 1.5rem;
  }

  blockquote {
    max-width: 60%;
  }

  figure {
    display: block;
    max-width: 100%;
    margin: 2.5rem auto;
    padding: 2rem;
    // border: 1px solid rgba(0,0,0,.1);
    border-radius: 4px;
    box-shadow: -3px 3px 6px rgba(0,0,0,.05),
      3px 3px 6px rgba(0,0,0,.05),
      3px -3px 6px rgba(0,0,0,.05),
      -3px -3px 6px rgba(0,0,0,.05);
  }

  figcaption {
    text-align: center;
    font-size: 1rem;
    color: hsla(0, 0.00%, 42.40%, 0.79);
    font-family: "Open Sans", Arial, sans-serif;
  }

  figcaption strong {
    color: #000;
  }

  article {
    display: block;
    margin: 4rem auto 0;
    padding-top: 1rem;
    border-top: 1px dotted hsla(0, 0.00%, 42.40%, 0.35);
  }
`
