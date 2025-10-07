import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io"
import { FaReact } from "react-icons/fa"
import { MdMobileFriendly, MdDataObject } from "react-icons/md"
import { BsFillPersonCheckFill, BsGit } from "react-icons/bs"
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
        label: "JavaScript",
        percentage: 90,
        icon: IoLogoJavascript
      },
      {
        label: "React",
        percentage: 90,
        icon: FaReact
      },
      {
        label: "TypeScript",
        percentage: 85,
        icon: IoLogoJavascript
      },
      {
        label: "SCSS, LESS, CSS3",
        percentage: 85,
        icon: IoLogoCss3
      },
      {
        label: "Web Accessibility",
        percentage: 85,
        icon: BsFillPersonCheckFill
      },
      {
        label: "Playwright, Jest, RTL, TestCafé",
        percentage: 80,
        icon: MdDataObject
      },
      {
        label: "Git, GitHub",
        percentage: 78,
        icon: BsGit
      },
      {
        label: "Responsive Web Development",
        percentage: 70,
        icon: MdMobileFriendly
      },
      {
        label: "GitHub Actions",
        percentage: 60,
        icon: BsGit
      },
      {
        label: "Ruby, Ruby on Rails",
        percentage: 60,
        icon: MdDataObject
      }
    ],
    softSkills: [ "Dedicated to mentorship, teaching and helping others", "Empathy to be an effective teammate", "Initiative to become an SME for broad range of technologies", "15+ years of coding experience throughout the stack","Committed to ongoing professional growth and development", "Passion for high quality solutions, ease of code maintenance, and quality documentation", "Effective writer and communicator for audiences with varying technical skills" ],
    workHistory: [ {
      year: "August 2022-Present",
      title: "Software Engineer",
      location: "Chicago, IL (Remote)",
      company: "Euna Solutions",
      start: "08/01/2022",
      end: "Present",
      companyUrl: "https://thecitybase.com/",
      description: [ `Decreased time to run automated Playwright test suite in CI pipeline by ~10% using Docker and GitHub Actions`, `Became the subject matter expert for accessibility, floating between teams to educate and ensure future compliance with the Web Content Accessibility Guidelines 2.2 Level AA`, `Doubled frontend test coverage with Playwright, React Testing Library, and Jest`, `Converted JavaScript into TypeScript across multiple frontends`     ],
      technologies: [ "JavaScript", "React", "TypeScript", "Functional Programming", "Accessibility", "Storybook", "GitHub Actions", "Redux" ],
      honors: []
    },
    {
      year: "January 2022 - June 2022",
      title: "Senior Front End Engineer",
      location: "Oakland, CA (remote)",
      company: "Nabis",
      start: "01/01/2022",
      end: "06/01/2022",
      companyUrl: "https://nabis.com",
      description: [ `Led the overhaul of the existing UI and UX using React and the Chakra UI component library`, `Created, contributed to, and supervised multiple contractors in the development of a new design system`, `Updated the marketplace search code to be compliant with the WCAG 2.2. Level AA` ],
      technologies: [ "JavaScript", "React", "TypeScript", "ChakraUI", "SCSS", "E-Commerce", "Accessibility", "Mentorship" ],
      honors: []
    },
    {
      year: "February 2021 - December 2021",
      title: "Software Engineer",
      company: "Vivint Smart Home, Inc",
      location: "Lehi, UT",
      start: "02/01/2021",
      end: "12/31/2021",
      companyUrl: "https://www.vivint.com/",
      description: [ `Saved sales engineers from two months of database work by proposing a UI-based solution that took one hour to implement`, `Created a front end style guide for cross-team code quality standards on the front end using Confluence and Storybook`, `Executed fullstack tasks using the Salesforce API, Postgres, JavaScript, Ember, and Vue`],
      technologies: [ "Ember", "Vue", "LESS", "TypeScript", "E-Commerce", "JavaScript", "Salesforce" ],
      honors: [ { name: "Innovation Week Presenter", detail: "November 2021" } ]
    },
    {
      year: "February 2019 - February 2020",
      title: "Front End Developer II",
      company: "Clearlink",
      location: "Salt Lake City, UT",
      start: "02/01/2020",
      end: "02/01/2021",
      companyUrl: "https://www.clearlink.com/",
      description: [ `Mentored and supported junior developers`, `Learned how to use the React-based Gatsby framework as a static site generator, eventually becoming an SME for all frontend developers on the team`, `Supported a broad range of browsers and devices with a focus on accessibility and modular code`],
      technologies: [ "JavaScript", "PHP", "React", "Gatsby", "Responsive Web Development", "Mentorship" ],
      honors: [ { name: "Frontend Project Showcase Winner", detail: "July 2020" }, { name: "Frontend Project Showcase Winner", detail: "Oct 2020" } ]
    },
    {
      year: "April 2018 - June 2019",
      title: "Software Engineer",
      company: "The Scion Group",
      location: "Chicago, IL",
      start: "04/01/2018",
      end: "05/31/2019",
      companyUrl: "https://www.thesciongroup.com/",
      description: [ `Increased average page load speed by a factor of four by eliminating n+1 queries in Ruby on Rails application`, `Lead and helped to implement the redesign of the internal business intelligence tool frontend, start to finish`, `Converted ancient JavaScript code to improve the developer experience using StimulusJS, DataTables, Highcharts, Rails 5, and data from multiple third party APIs including ADP, Entrata, Centro, and Chatmeter`, `Helped to aggregate hundreds of millions of records daily via an ETL process using SQL Server, multiple APIs, and Snowflake into a data warehouse` ],
      technologies: [ "Ruby", "Ruby on Rails", "JavaScript", "SQL", "StimulusJS", "Highcharts", "DataTables", "Snowflake", "ETL" ],
      honors: []
    },
    {
      year: "July 2015 - September 2017",
      title: "Software Engineer",
      company: "NCSA Next College Student Athlete",
      location: "Chicago, IL",
      start: "07/01/2015",
      end: "09/31/2017",
      companyUrl: "https://www.ncsasports.org/",
      description: [ `Floated between the separate design team and engineering teams, leveraging LESS, CoffeeScript, Slim, JavaScript, React, Backbone, Ruby, Ruby on Rails, and ActiveRecord` ],
      technologies: [ "JavaScript", "Backbone", "Ruby", "Ruby on Rails", "Less", "React", "CoffeeScript", "Slim", "ActiveRecord" ],
      honors: []
    },
    {
      year: "August 2014 - March 2015",
      title: "Junior Frontend Engineer",
      company: "DialogTech (now Invoca)",
      location: "Chicago, IL",
      start: "09/01/2014",
      end: "03/31/2015",
      companyUrl: "https://www.invoca.com/",
      description: [ `Converted mockups into responsive, data-driven web pages with MongoDB, Node, Express, Backbone, Less, Node, Mustache, Lodash, and Handlebars` ],
      technologies: [ "JavaScript", "Backbone", "Node", "Git", "LESS" ],
      honors: []
    },
    {
      year: "May 2014 - July 2014",
      title: "Rails Developer",
      company: "Blueye Creative",
      location: "Chicago, IL",
      start: "09/01/2014",
      end: "03/31/2015",
      companyUrl: "https://no.linkedin.com/company/blueye",
      description: [ `Built a new database for Wilson’s tennis racket inventory with a Microsoft Access front end and Ruby on Rails`, `Created a script to parse, import, and restructure years of inconsistently formatted Excel spreadsheet data with Ruby scripts` ],
      technologies: [ "Ruby", "Ruby on Rails", "Microsoft Access", "SQL" ],
      honors: []
    },
    {
      year: "May 2011 - December 2013",
      title: "Web Support Developer",
      company: "University of Notre Dame",
      location: "Notre Dame, IN",
      start: "05/01/2011",
      end: "12/31/2013",
      companyUrl: "https://nd.edu",
      description: [ `Served as the sole support developer for ~400 websites built with a homegrown Ruby on Rails-powered content management system`, `Designed, developed and wrote up an extensive troubleshooting guide and supporting documentation for our CMS to aid clients`, `Excelled at writing for support blog and communication with non-technical clients`, `Led weekly trainings in the Rails-based content management system with a focus on search engine optimization and understandable content for clients with varying levels of technical proficiency`, `Provided great customer service over the phone, in-person, and via email for clients that resulted in an Employee of the Quarter distinction`, `Converted PSD mockups into mobile-first, responsive websites utilizing liquid templating, HTML5, and CSS` ],
      technologies: [ "JavaScript", "HTML5", "CSS", "Liquid", "CMS", "Customer Service", "Responsive Web Development" ],
      honors: []
    }
    ]
  }
}

export default data
