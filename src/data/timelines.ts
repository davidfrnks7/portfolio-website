export interface TimelineItem {
  school?: string;
  course?: string;
  workplace?: string;
  jobTitle?: string;
  certName?: string;
  certIssuer?: string;
  description?: string;
  location?: string;
  start?: number | Date;
  end?: number | Date;
}

export type TimelineArr = TimelineItem[];

export const educationTimeline: TimelineArr = [
  {
    school: "CGI Java Training",
    course: "On-Job Java Training",
    start: 2022,
    end: 2022,
    location: "Knoxville, TN",
    description:
      "An eight-week training program where a Full Stack Application was built, tested, and deployed. Included instruction on core Java with a focus on applying and implementing programming concepts and OO programming, data structures, and search and sort algorithms. It Focused on hands-on labs to build and test Java programs in Java 8 and building responsive web pages including UI/UX and front-end design."
  },
  {
    school: "Operation Spark",
    course: "Software Engineering Bootcamp",
    start: 2020,
    end: 2021,
    location: "New Orleans, LA",
    description:
      "Immersive coding bootcamp derived from Hack Reactor, using a lot of the same methodologies. Putting students through 1000+ hours of hands-on coding with JavaScript starting with basics and fundamentals, then deep diving into relational and non-relational databases, node.js, app deployment, app bundling, and frameworks JS like React.js. The program focused heavily on teamwork and pair programming to be ready to work within a team."
  },
  {
    school: "John Ehret High School",
    course: "Core 4 High School Diploma",
    location: "Marrero, LA",
    description:
      "Typical high school courses with a focus on IT classes as electives, extra curricular courses, and clubs such as AOIT."
  }
];

export const workTimeline: TimelineArr = [
  {
    workplace: "CGI",
    jobTitle: "Fullstack Java Developer",
    location: "Knoxville, TN (Hybrid)",
    start: new Date(2022, 3),
    end: new Date(2024, 7),
    description:
      "Junior Java developer in a team of 8. My responsibilities included creating static and dynamic external correspondence tax documents with AEM, developing Java code in JBOSS for dynamic forms, maintaining design artifacts and mock-ups from the client in SharePoint, regular reviews with the client to confirm forms adhered to design documents and mock-ups provided. Utilized Azure DevOps (TFS) to track development, testing, design/code review, and bug/defect tasks through the development life cycle. Maintained records of forms and documents in SQL and DB2 databases, including creating custom SQL queries as needed. Tested in PEGA with production-ready environments to simulate creating cases, advancing case stages, closing cases, and verifying forms were being created and updated as necessary based on the stage of the case and data available in PEGA through to its completion."
  }
];
