import React from "react";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import { MdOutlineSchool } from "react-icons/md";
import { CoursePropsType } from "../CoursesList/CoursesList";
import * as S from "./Course.styled";
import { IconType } from "react-icons";
import themeStyles from "../../utils/constants/constants"

type CourseTitleProps = {
  title: string,
  platform?: string | null,
  url?: string | null,
  imageUrl?: string,
  Icon?: IconType & { background?: string },
  backgroundColor?: string,
  color?: string
}

export type CourseIconWrapperPropsType = {
  Icon: IconType,
  backgroundColor?: string,
  color?: string,
}

export const CourseIconWrapper = ({
  backgroundColor,
  color,
  Icon,
}: CourseIconWrapperPropsType) => {
  return (
    <S.CourseIconWrapperStyle
      color={color}
      Icon={Icon}
      backgroundColor={backgroundColor}
    >
      <S.CourseIconWrapperStyle>
        <Icon />
      </S.CourseIconWrapperStyle>
    </S.CourseIconWrapperStyle>
  )
}
const CourseTitle: React.FC<CourseTitleProps> = ({
  title,
  url,
  platform,
  imageUrl,
  Icon,
  backgroundColor,
  color
}: CourseTitleProps) => {
  return (
    typeof(url) !== 'string'
      ? (
          <S.CourseTitle>
            {Icon && (
              <CourseIconWrapper Icon={Icon} color={color} backgroundColor={backgroundColor} />
            )}
            <span>{title}</span>
            {` `}
            <HiOutlineChevronDoubleRight />
            {` `}
            <S.Platform>{platform}</S.Platform>
          </S.CourseTitle>
        ) : (
          <S.CourseTitle>
            <S.Link href={url} target="_blank" rel="nofollow noreferrer">
              {Icon && (
                <CourseIconWrapper Icon={Icon} color={color} backgroundColor={backgroundColor} />
              )}
              <span>{title}</span>
              {` `}
              <HiOutlineChevronDoubleRight />
              {` `}
              <S.Platform>{platform}</S.Platform>
            </S.Link>
        </S.CourseTitle>
      ))
}

type CourseDescriptionProps = {
  description: string | null,
  Icon?: any
}

const CourseDescription: React.FC<CourseDescriptionProps> = (props: CourseDescriptionProps): JSX.Element | null => {
  const { description } = props;
  return typeof(description) === 'string' ? (
    <S.CourseDescription>
      {!!description && (
        <p>{description}</p>
      )}
    </S.CourseDescription>
  ) : (
    null
  )
}

export const Course: React.FC<CoursePropsType> = (props) => {
  const {
    title,
    url,
    platform,
    Icon = MdOutlineSchool,
    instructor,
    completedDate,
    certificateUrl,
    description,
    imageUrl,
    color = themeStyles.colors.secondary,
    backgroundColor = themeStyles.colors.primary,
  } = props;

  return (
    <div className="card px-4 pt-2 mb-4 pb-3 shadow" style={{textAlign: "center"}}>
      <CourseTitle
        title={title}
        url={url}
        platform={platform}
        imageUrl={imageUrl}
        Icon={Icon}
        backgroundColor={backgroundColor}
        color={color}
      />
      <CourseDescription
        description={description}
        Icon={Icon}
      />
      {typeof instructor === 'string' && (<S.FooterDetail><b>Instructor</b>: {instructor}</S.FooterDetail>)}
      {typeof completedDate === 'string' && (<S.FooterDetail><b>Completed</b>: {completedDate}</S.FooterDetail>)}
      {typeof certificateUrl === 'string' && (<S.FooterDetail><b>Credential</b>: <a href={certificateUrl} target="_blank" rel="noopener noreferrer">Certificate of Completion</a></S.FooterDetail>)}
    </div>
  )
}

