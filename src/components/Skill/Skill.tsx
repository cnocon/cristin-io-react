import React from "react";
import { Skill as SkillType} from "../../data/types"
import styled from "styled-components";

const Label = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  margin: 1rem 0 0.25rem;
  font-weight: 500;
  font-family: Oswald, Impact, sans-serif;
  text-transform: uppercase;

  svg {
    margin-right: 0.5rem;
  }
`

const ProgressBar = styled.div`
  vertical-align: middle;
  font-family: Oswald, Impact, serif;
  font-weight: 700;
  letter-spacing: 1px;
  height: 6px;
  width: 100%;
`

const Progress = styled.div`
  height: 6px;
`

const Percentage = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  display: block;
  z-index: 2;
  width: 36px;
  height: 26px;
  font-weight: 600;
  padding: 2px 4px;
  font-size: 14px;
  font-family: Lato, Verdana, sans-serif;
  border-bottom-left-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
`

export const Skill = (props: SkillType) => {
  const { label, percentage, icon } = props;
  return (
    <div>
      <Label className="text-dark">
        {icon({className: "text-dark"})} {label}
        <Percentage
          className="bg-dark text-light rounded"
        >
          {percentage}%
        </Percentage>
      </Label>
      <Progress
        className="progress"
        role="progressbar"
        aria-label={label}
      >
        <ProgressBar
          className="progress-bar bg-secondary"
          style={{width: `${percentage}%`}}
        />
    </Progress>
  </div>
  )
}

