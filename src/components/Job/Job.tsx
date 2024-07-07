import React from "react";
import dayjs from "dayjs";
import {Company, Honor, Honors, Description, Descriptions, Timespan, Technologies, Technology, StyledJob, Location, JobTitle } from "./Job.styled";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
// import { BsTrophy } from "react-icons/bs";
import { FaAward } from "react-icons/fa";
import { HonorType } from "../../data/types"

export const Job = ({
  title,
  // year,
  company,
  location,
  companyUrl,
  description,
  start,
  end,
  honors,
  technologies
}: {
  title: string,
  year?: string,
  company: string,
  location: string,
  companyUrl: string,
  description: string[],
  start: string,
  end: string,
  honors: HonorType[],
  technologies: string[]
}) => {
  const endDate = end === "Present" ? "Present" : dayjs(end).format("MMM YYYY");
  const startDate = dayjs(start).format("MMM YYYY")

  return (
    <StyledJob className="job card py-3 px-2 shadow">
      <header className="card-header bg-white border-bottom-0">
        <JobTitle key={`job-${company}`}>{title}</JobTitle>
        <Company>
          <a href={companyUrl} target="_blank" rel="nofollow noreferrer">{company}</a> <HiOutlineChevronDoubleRight /> <Location>{location}</Location>
        </Company>
        <Timespan>{startDate} &mdash; {endDate}</Timespan>
      </header>
      <div className="card-body pt-0">
        <Descriptions>
          {description.map((desc, index) => <Description key={`${index}-desc-for-${company}`}>{desc}</Description>)}
        </Descriptions>
        {!!honors?.length && (
          <Honors>
            {honors.map((honor, index) => <Honor key={`${index}-tech-for-${company}`}><FaAward /> <div><b>{honor.name}</b><span>{honor?.detail}</span></div></Honor>)}
          </Honors>
        )}
        <Technologies>
          {technologies.map((tech, index) => <Technology key={`${index}-tech-for-${company}`}><span className="badge text-dark"><span className="hashtag">#</span>{tech}</span></Technology>)}
        </Technologies>
      </div>
    </StyledJob>
  )
}




