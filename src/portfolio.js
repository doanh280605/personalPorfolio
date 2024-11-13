/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Doanh Phung",
  title: "Hi all, I'm Doanh",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1b6waAKEKP4ntFBHlc2GOlgecbW71V9_v/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/doanh280605",
  linkedin: "https://www.linkedin.com/in/doanh-phung-21583a1b2/",
  gmail: "dangdoanh.phung@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Integration of third party services such as AWS / Azure")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Worcester Polytechnic Institute",
      logo: require("./assets/images/WPI.png"),
      subHeader: "Bachelor in Computer Science",
      duration: "August 2023 -  Expect May 2026",
      desc: "GPA 3.75"
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Tran Dai Nghia high school for the gifted",
      logo: require("./assets/images/tdn.png"),
      subHeader: "High School ",
      duration: "September 2020 - May 2023",
      desc: "GPA 3.88"
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Mobile Development",
      company: "FPT Information System",
      companylogo: require("./assets/images/fis.jpeg"),
      date: "May 2024 – August 2024",
      descBullets: [
        "Developed the frontend of a cross-platform food delivery mobile application for iOS and Android using the React Native framework within a 3-month timeframe.",
        "Integrated with RESTful APIs with Express.js and MySQL databases to efficiently handle over 5,000 users’ data across web and mobile applications, improving data accuracy and user management."
      ]
    },
    {
      role: "Summer Internship",
      company: "Ho Chi Minh University of Technology",
      companylogo: require("./assets/images/bkhoa.png"),
      date: "June 2022 – July 2022",
      descBullets: [
        "Developed an electrical circuit and connect it to Raspberry Pi 3 to perform a set of unit tests on an LED.",
        "Incorporated scripts using Python and SQL to aggregate test results into an organized format.",
        "Implemented learning materials into a smart home system project, sharing consumer usage data and automating actions based on the homeowners’ preferences."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  projects: [
    {
      image: require("./assets/images/ia.jpeg"),
      projectName: "WPI Investing Association",
      projectDesc:
        "The gateway to professional finance and investing experiences at WPI",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://investing.wpi.edu/"
        }
        //  you can add extra buttons here.
      ]
    }
    // {
    //   image: require("./assets/images/nextuLogo.webp"),
    //   projectName: "Nextu",
    //   projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "http://nextu.se/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, that I have achieved !",

  achievementsCards: [
    {
      title: "Microsoft Azure Fundamental",
      subtitle:
        "Foundational knowledge of cloud concepts in general and Microsoft Azure in particular",
      image: require("./assets/images/azure.png"),
      imageAlt: "Azure Fundamental Badge",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1QUBrZi9mhC3O25Ggk-0ZzCkVKqnPE3LS/view?usp=sharing"
        }
      ]
    },
    {
      title: "CS50 Introduction to Computer Science",
      subtitle:
        "Introduction to the intellectual enterprises of computer science and the art of programming",
      image: require("./assets/images/cs50.png"),
      imageAlt: "CS50 Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1IBlOGo_mjlbpLwVtkKev0OJ3NyM_swHT/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-7745250770",
  email_address: "dangdoanh.phung@gmail.com"
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  isHireable,
  resumeSection
};
