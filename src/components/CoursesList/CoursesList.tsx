import React from "react";
import { Course } from "../Course/Course";
import { IconType } from "react-icons";

export type CoursePropsType = {
  title: string,
  url: string | null,
  platform: string | null,
  Icon?: IconType,
  imageUrl?: string,
  instructor?: string | null,
  completedDate: string | null,
  certificateUrl?: string | null,
  description: string | null,
  color?: string,
  backgroundColor?: string
}

export type CoursesListType = {
  courses: CoursePropsType[],
}

export const CoursesList: React.FC<CoursesListType> = (
  { courses }: CoursesListType
): (JSX.Element | null) => {
  if (!courses) return null;
  return (

    <div className="card no-border mt-4">
      {courses.map((course: CoursePropsType) => {
        return (
          <div className="card no-border" key={course.title}>
            <Course {...course} />
          </div>
        )
      })}
    </div>
  )
}
