import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io"
import { FaReact } from "react-icons/fa"
import { MdMobileFriendly, MdOutlineSettingsInputComponent, MdDataObject } from "react-icons/md"
import { BsFillPersonCheckFill, BsGit } from "react-icons/bs"
import { SiTypescript } from "react-icons/si"
import { ReactNode } from "react"
import { TbFishHook } from "react-icons/tb"
import themeStyles from "../utils/constants/constants"

export type Skill = {
  label: string,
  percentage: string,
  icon: ReactNode
}

const data = {
  courses: [
    {
      title: "Advanced JavaScript",
      url: "https://ui.dev/advanced-javascript",
      platform: "ui.dev",
      Icon: IoLogoJavascript,
      instructor: null,
      completedDate: "03/10/2023",
      certificateUrl: "/assets/advanced-javascript-certificate.pdf",
      description: "",//"Occaecat ea minim excepteur commodo exercitation laboris velit do. Culpa nisi elit eu labore aliqua ex anim.",
      imageUrl: "https://ui.dev/images/advanced-javascript-logo.svg",
      color: themeStyles.colors.primary,
      backgroundColor: themeStyles.colors.secondary
    },
    {
      title: "React Hooks",
      url: "https://ui.dev/react-hooks",
      platform: "ui.dev",
      Icon: TbFishHook,
      instructor: null,
      completedDate: "04/15/2022",
      certificateUrl: null,
      description: "",//"Anim ipsum excepteur adipisicing aliquip nulla pariatur exercitation aute consequat commodo officia veniam aliquip culpa. Culpa nisi elit eu labore aliqua ex anim. Adipisicing qui ea esse velit anim in do commodo nulla elit id. Fugiat do do tempor reprehenderit.",
      imageUrl: "https://ui.dev/images/hook.svg",
      color: themeStyles.colors.secondary,
      backgroundColor: themeStyles.colors.primary
    },
    {
      title: "Redux",
      url: "https://ui.dev/c/redux/introduction-philosophy-and-tips",
      platform: "ui.dev",
      Icon: FaReact,
      instructor: null,
      completedDate: "02/18/2023",
      certificateUrl: "/assets/redux-certificate.pdf",
      description: "",//Culpa nisi elit eu labore aliqua ex anim. Adipisicing qui ea esse velit anim in do commodo nulla elit id. Fugiat do do tempor reprehenderit.",
      imageUrl: "https://ui.dev/images/redux-logo.svg",
      color: themeStyles.colors.primary,
      backgroundColor: themeStyles.colors.secondary
    }
  ],
  resume: {
    education: [
      {
        title: "B.A. Sociology, Computer Applications",
        school: "University of Notre Dame",
        schoolUrl: "https://nd.edu",
        location: "Notre Dame, IN",
        start: "08/01/2006",
        end: "05/01/2011",
        honors: [
          {
            name: "Summa Cum Laude",
            detail: "College of Arts and Letters",
          },
          {
            name: "Phi Beta Kappa",
            detail: "They made me pay a fee...",
          },
          {
            name: "Alpha Kappa Delta",
            detail: "International Sociology Honor Society",
          },
        ]
      },
      {
        title: "Dev Bootcamp (Chicago)",
        school: "Dev Bootcamp",
        schoolUrl: null,
        location: "Chicago, IL",
        start: "01/01/2014",
        end: "04/01/2014",
      },
    ],
    technicalSkills: [
      {
        label: "React",
        percentage: 85,
        icon: FaReact
      },
      {
        label: "React Component Libraries",
        percentage: 82,
        icon: MdOutlineSettingsInputComponent
      },
      {
        label: "Full Stack JavaScript",
        percentage: 80,
        icon: IoLogoJavascript
      },
      {
        label: "Web Accessibility",
        percentage: 80,
        icon: BsFillPersonCheckFill
      },
      {
        label: "TypeScript",
        percentage: 80,
        icon: IoLogoJavascript
      },
      {
        label: "SCSS, LESS, CSS",
        percentage: 80,
        icon: IoLogoCss3
      },
      {
        label: "Playwright, Jest, TestCafé, RTL",
        percentage: 75,
        icon: MdDataObject
      },
      {
        label: "Responsive Web Development",
        percentage: 70,
        icon: MdMobileFriendly
      },
      {
        label: "Git, GitHub, GitHub Actions",
        percentage: 70,
        icon: BsGit
      },
      {
        label: "TypeScript",
        percentage: 70,
        icon: SiTypescript
      },
      {
        label: "Ruby, Ruby on Rails",
        percentage: 60,
        icon: MdDataObject
      }
    ],
    softSkills: [ "Empathy to be an effective teammate", "Organizational abilities for managing projects independently", "Research skills to find the best solutions", "Enthusiasm and passion for front end work", "Positive attitude and willingness to handle a wide variety of responsibilities", "Effective communicator with people from varying technical backgrounds", "Dedicated to ongoing professional development", "5+ years of Agile experience", "12+ years of experience working on web applications in various capacities" ],
    workHistory: [ {
      year: "2022-23",
      title: "Software Engineer",
      location: "Chicago, IL (remote)",
      company: "CityBase, Inc.",
      start: "08/01/2022",
      end: "Present",
      companyUrl: "https://citybase.com",
      description: [ `Maintained and added new features to multiple single page web applications, utilizing technologies including JavaScript, Yarn, NPM, Webpack, Parcel, React, Redux, RxJS, TypeScript, SCSS, and GraphQL`, `Care for and grow a proprietary React component library, and integrate those components successfully into myriad contexts`, `Incrementally set up and convert JavaScript codebases to use TypeScript (front end and full stack)`, `Participate in design critiques (along with other engineers) to help facilitate cross-discipline knowledge transfer and early detection of potential gotchas in development`, `Upgraded our CI pipeline by incorporating Playwright tests to automatically run against the latest commit in a PR, leveraging Docker and GitHub Actions`, `Planned and executed accessibility overhauls of several front-end applications to bring them into compliance with WCAG 2.2 AA`      ],
      technologies: [ "AdvancedJS", "React", "TypeScript", "Functional Programming", "a11y", "GraphQL", "GitHub Actions", "Storybook" ],
      honors: []
    },
    {
      year: "2022",
      title: "Sr. Front End Engineer",
      location: "San Francisco, CA (remote)",
      company: "Nabis",
      start: "01/01/2022",
      end: "06/01/2022",
      companyUrl: "https://nabis.com",
      description: [ `Worked with product managers and graphic designers to overhaul the existing UI/ UX with the goal of creating a single pristine user experience throughout the application ecosystem`, `Oversaw the introduction of a new design system to the codebase using Chakra UI's component library, extending Chakra UI where needed for custom components using React, GraphQL, CSS, and SCSS`, `Supervised two consultants in developing reusable components for Nabis' new design system`, `Improved accessibility and performance of an online marketplace search utility` ],
      technologies: [ "ES6", "React", "TypeScript", "ChakraUI", "SASS" ],
      honors: []
    },
    {
      year: "2021",
      title: "Software Engineer",
      company: "Vivint Smart Home, Inc",
      location: "Lehi, UT",
      start: "02/01/2021",
      end: "12/31/2021",
      companyUrl: "https://www.vivint.com/",
      description: [ `Coded the front-end for multiple JavaScript-based sales applications, leveraging technologies including Vue.js, TypeScript, LESS, and Ember.js`, `Spearheaded the creation of new documentation and code quality standards for front-end development within the sales department`, `Provided full stack on-call support for emergencies, leveraging logs and data from Splunk, Dynatrace, and AppDynamics to quickly identify and ﬁx critical bugs under pressure (in a 24/7 rotation for a week each month)`, `Created a new onboarding process for front-end and full stack engineers in sales (for current employees and new hires) that aimed to reduce sales' isolation from the company's broader front-end initiatives and practices`],
      technologies: [ "Ember", "Vue", "LESS", "TypeScript" ],
      honors: [ { name: "Innovation Week Presenter", detail: "Nov 2021" } ]
    },
    {
      year: "2020-21",
      title: "Front End Developer II",
      company: "Clearlink",
      location: "Salt Lake City, UT",
      start: "02/01/2020",
      end: "02/01/2021",
      companyUrl: "https://www.clearlink.com/",
      description: [ `Coded responsive websites from mockups using Handlebars, SCSS, JavaScript, and a proprietary component library`, `Assisted in maintaining and extending applications using JavaScript`, `Mentored and supported junior developers`, `Extended functionality of component library core package`, `Supported a broad range of browsers and devices with a focus on accessibility`],
      technologies: [ "JavaScript", "PHP", "React", "Gatsby" ],
      honors: [ { name: "Frontend Project Showcase Winner", detail: "July 2020" }, { name: "Frontend Project Showcase Winner", detail: "Oct 2020" } ]
    },
    {
      year: "2018-19",
      title: "Software Engineer",
      company: "The Scion Group",
      location: "Chicago, IL",
      start: "Apr 2018",
      end: "Jun 2019",
      companyUrl: "https://www.thesciongroup.com/",
      description: [ `Increased average page load speed by a factor of four`, `Updated in-house business intelligence software to use StimulusJS, DataTables, Highcharts, Rails 5, and data from multiple third party APIs including ADP, Entrata, Centro, and Chatmeter`, `Redesigned UI/UX for a more modern, clean, look and feel`, `Aggregated over a dozen third party data sources into a data warehouse via an ETL application` ],
      technologies: [ "Ruby", "Rails", "JavaScript", "SQL" ],
      honors: []
    }
    ]
  }
}

export default data