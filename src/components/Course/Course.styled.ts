import styled from "styled-components"
// import { CourseIconWrapperPropsType, CourseIconWrapper } from "./Course"

export const CoursesList = styled.ul`
  display: flex;
  flex-wrap: nowrap;

  li {
    display: flex;
    flex-basis: 100%;
    justify-content: center;
    align-items: center;
  }
`
export const CourseTitle = styled.h4`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 1.15rem;
  line-height: 1.65;
  font-weight: 500;
  font-family: Oswald, Impact, sans-serif;
`

export const CourseIconWrapperStyle = styled.div<any>`
  position: relative;
  height: 100%;
  width: 100%;
  line-height: 1em;
  width: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;

  svg {
    display: block;
    font-size: 60px;
    width: 60px;
    height: 60px;
    margin: 0.5rem auto;
    border-radius: 50%;
    padding: 8px;
    ${ ( ( props: any ) => `
      color: ${ props.color };
      background-color: ${ props.backgroundColor };
    `) }
  }
`

export const CourseDescription = styled.div`
  font-size: 1rem;
  font-weight: 400;
`

export const CourseImageWrapper = styled.div`
  flex-direction: column;
`

export const CourseImage = styled.img`
  display: block;
  max-width: 100%;
  max-height: 50px;
  margin: 0.5rem auto;
`

export const Link = styled.a`
  color: inherit;
  text-decoration: none;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  line-height: 1.65;
  // border-bottom: 1px solid var(--bs-card-border-color);

  svg {
    margin: 0 0.5rem;
  }
`

export const Platform = styled.span`
  text-transform: uppercase;
  font-family: Oswald, Impact, sans-serif;
  font-weight: 400;
  font-size: 1.15rem;
`

export const CourseName = styled.span`
  font-weight: 400;
`

export const FooterDetail = styled.p`
  font-style: italic;
  font-weight: 500;

  b {
    font-style: normal;
    font-weight: 800;
  }
`