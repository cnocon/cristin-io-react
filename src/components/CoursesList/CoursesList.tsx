import React from "react";
import { Course } from "../Course/Course";
import Layout from "../layouts/Layout"

export type CoursePropsType = {
  title: string,
  url: string | null,
  platform: string | null,
  Icon?: any,
  imageUrl?: string,
  instructor?: string,
  completedDate: string | null,
  certificateUrl?: string,
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