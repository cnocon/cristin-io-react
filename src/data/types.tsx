import { IconType } from "react-icons";

export type Skill = {
  label: string,
  percentage: number,
  icon: IconType
}

export type HonorType = {
  name: string,
  detail: string
}

export type Job = {
  year?: string,
  title: string,
  location: string,
  company: string,
  companyUrl: string,
  start: string,
  end: string,
  description: string[],
  technologies: string[],
  honors: HonorType[]
}

export type ResumeData = {
  softSkills: string[],
  workHistory: Job[],
  technicalSkills: Skill[],
}

export type Data = {
  resume: ResumeData
}

export type EducationType = {
  school: string,
  title: string,
  schoolUrl: string | null,
  location: string,
  honors: HonorType[],
  start: string,
  end: string
}