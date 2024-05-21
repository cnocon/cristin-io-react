import styled from "styled-components"

export const JobTitle = styled.h3`
  font-weight: 500;
  text-transform: uppercase;
  font-family: Oswald,Impact,sans-serif;
  font-size: 1.15rem;
  letter-spacing: 1px;
  margin-bottom: 0;
`
export const StyledJob = styled.article`
  margin: 2rem 0;
  position: relative;

  &:first-child {
    margin-top: 0;
  }

  h4 a {
    font-weight: 500;
  }

  svg {
    display: inline-block;
    margin-bottom: 0.275rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`
export const Company = styled.h4`

    font-size: 1.25rem;
    margin-top: 0.2rem;
    margin-bottom: 0.1rem;
    font-family: Lato, Verdana, sans-serif;
`
export const Location = styled.span`
  font-weight: 300;
  font-family: Lato, Verdana, sans-serif;
`

export const Technologies = styled.ul`
  padding: 0;
  margin: 0;
`
export const Technology = styled.li`
  display: inline-block;
  margin-right: 0.25rem;
  font-family: Lato, Verdana, sans-serif;
  font-size: 1.25rem;

  .hashtag {
    color: #ffc107;
    font-weight: 600;
    margin-right: 2px;
  }
`
export const Timespan = styled.h5`
  font-weight: 500;
  margin-top: 0;
  font-size: 1em;
`

export const Descriptions = styled.ul`
  font-weight: 500;
  font-family: Lato, Verdana, sans-serif;
  margin: 0;
  padding: 0 0 0 2rem;
  list-style-type: disc;
`

export const Description = styled.li`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  line-height: 1.5em;
  margin-top: 0;
  padding: 0;

  &:last-child {
    margin-bottom: 1rem;
  }
`

export const Honors = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin-top: 1.5rem;
  padding-top: 0;
`

export const Honor = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  line-height: 1.25em;
  padding: 0 0 1rem;
  font-size: 13px;
  font-style: italic;
  text-transform: none;

  &:last-child {
    padding-bottom: 0;
  }

  b {
    font-style: normal;
    text-transform: uppercase;
  }

  svg {
    color: #ffc107;
    font-size: 16px;
    margin: 0.25rem 0.5rem 0 0;
    font-weight: 400;
  }

  div {
    display: flex;
    flex-wrap: wrap;
  }

  div b,
  div span {
    flex-basis: 90%;
  }
`