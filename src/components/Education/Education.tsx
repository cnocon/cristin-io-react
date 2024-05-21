import React from "react";
import { Honor, Honors } from "../Job/Job.styled";
import { EducationType, HonorType } from "../../data/types"
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import { FaAward } from "react-icons/fa"
import { School, StyledTitle, TimeRange, TimeRangeTime } from "./Education.styled"
import dayjs from "dayjs"

export const Education = ({ school, title, schoolUrl, location, honors, start, end }: EducationType) => {
  const startDate = dayjs(start).format("MMM YYYY")
  const endDate = end === "Present" ? "Present" : dayjs(end).format("MMM YYYY")
  return (
    <div className="card no-border">
      <div className="card-body">
      <School>
        {schoolUrl !== null ? (
            <a
              href={schoolUrl}
              target="_blank"
              rel="noreferrer"
            >
              {school}
            </a>
          ) : <span>{school}</span>
        }
      </School>
      <StyledTitle>{title}</StyledTitle>
      <TimeRange>
        <TimeRangeTime>{startDate}</TimeRangeTime> &mdash; <TimeRangeTime>{endDate}</TimeRangeTime> <HiOutlineChevronDoubleRight /> <span className="location">{location}</span>
      </TimeRange>
      <Honors>
        {!!honors?.length && honors.map((honor: HonorType) =>
          (<Honor
            key={honor.name}
            {...honor}
          >
            <FaAward />
            <div>
              <b className="text-dark">{honor.name}</b>
              <span>{honor?.detail}</span>
            </div>
          </Honor>
        ))}
      </Honors>
  </div></div>
)}