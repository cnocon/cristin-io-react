import styled from "styled-components"

export const TimeRange = styled.h5`
  display: flex;
  align-items: center;
  font-size: 14px;

  svg {
    display: inline-block;
    margin: 0 4px;
    font-size: 1rem;
  }
`

export const TimeRangeTime = styled.time`
  display: inline-block;
  font-style: italic;
`

export const School = styled.h4`
  padding-bottom: 0;
  margin-bottom: 0;

  a, span {
    font-weight: 500;
    text-transform: uppercase;
    font-family: Oswald, Impact, sans-serif;
    font-size: 1.15rem;
    letter-spacing: 1px;
    margin-bottom: 0;
    color: inherit;
    text-decoration: none;
  }
`

export const StyledTitle = styled.h3`
  font-size: 1rem;
`