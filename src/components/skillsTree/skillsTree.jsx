import React from "react";
import { SkillTreeGroup, SkillTree, SkillProvider } from "beautiful-skill-tree";
import styles from "./skillsTree.module.css";

const skillsData = [
  {
    id: "root-skillOne",
    title: "Languages",
    tooltip: { content: "This is the list of languages I have learned." },
    children: [
      {
        id: "child-skill-1",
        title: "HTML",
        tooltip: {
          content:
            "HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
        },
        children: [
          {
            id: "grandchild-skill-1",
            title: "Python",
            tooltip: {
              content:
                "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured, object-oriented and functional programming.",
            },
            children: [],
          },
        ],
      },
      {
        id: "child-skill-2",
        title: "CSS",
        tooltip: {
          content:
            "Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML.",
        },
        children: [
          {
            id: "grandchild-skill-2",
            title: "C#",
            tooltip: {
              content:
                "C# is a general-purpose high-level programming language supporting multiple paradigms. C# encompasses static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines and is one of the top 5 programming languages on GitHub..",
            },
            children: [],
          },
        ],
      },
      {
        id: "child-skill-3",
        title: "JavaScript",
        tooltip: {
          content:
            "JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS.",
        },
        children: [
          {
            id: "grandchild-skill-3",
            title: "C++",
            tooltip: {
              content:
                "C++ is an object-oriented programming language which gives a clear structure to programs and allows code to be reused, lowering development costs. C++ is mainly used in game development.",
            },
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: "root-skillTwo",
    title: "Frameworks",
    tooltip: { content: "This is the list of frameworks I have used." },
    children: [
      {
        id: "child-skill-4",
        title: "React",
        tooltip: {
          content:
            "React is a free and open-source front-end JavaScript library for building user interfaces based on components.",
        },
        children: [
          {
            id: "grandchild-skill-4",
            title: "NextJS",
            tooltip: {
              content:
                "Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.",
            },
            children: [],
          },
        ],
      },
      {
        id: "child-skill-5",
        title: "Angular",
        tooltip: {
          content:
            "Angular is a TypeScript-based, free and open-source single-page web application framework.",
        },
        children: [
          {
            id: "grandchild-skill-5",
            title: "Bootstrap",
            tooltip: {
              content:
                "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.",
            },
            children: [],
          },
        ],
      },
      {
        id: "child-skill-6",
        title: ".NET",
        tooltip: {
          content:
            ".NET is an open-source platform for building desktop, web, and mobile applications that can run natively on any operating system. ",
        },
        children: [
          {
            id: "grandchild-skill-6",
            title: "Django",
            tooltip: {
              content:
                "Django is a free and open-source, Python-based web framework that runs on a web server. It follows the model–template–views architectural pattern.",
            },
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: "root-skillThree",
    title: "Platforms",
    tooltip: { content: "This is the list of platforms I have used." },
    children: [
      {
        id: "child-skill-7",
        title: "Git",
        tooltip: {
          content:
            "Git is a distributed version control system that tracks changes in any set of computer files, usually used for coordinating work among programmers who are collaboratively developing source code during software development.",
        },
        children: [
          {
            id: "grandchild-skill-7",
            title: "Atlassian Jira",
            tooltip: {
              content:
                "Jira is a proprietary product developed by Atlassian that allows bug tracking, issue tracking and agile project management. Jira is used by a large number of clients and users globally for project, time, requirements, task, bug, change, code, test, release, sprint management.",
            },
            children: [],
          },
        ],
      },
      {
        id: "child-skill-8",
        title: "MongoDB",
        tooltip: {
          content:
            "MongoDB is a source-available, cross-platform, document-oriented database program. Classified as a NoSQL database product, MongoDB utilizes JSON-like documents with optional schemas.",
        },
        children: [
          {
            id: "grandchild-skill-8",
            title: "Trello",
            tooltip: {
              content:
                "Trello is a collaboration tool that organizes your projects into boards. In one glance, Trello tells you what's being worked on, who's working on what, and where something is in a process. Trello is also a subsidiary of Atlassian.",
            },
            children: [],
          },
        ],
      },
      {
        id: "child-skill-9",
        title: "AWS",
        tooltip: {
          content:
            "AWS provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis. Clients will often use this in combination with autoscaling.",
        },
        children: [
          {
            id: "grandchild-skill-9",
            title: "NodeJS",
            tooltip: {
              content:
                "Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting.",
            },
            children: [],
          },
        ],
      },
    ],
  },
];

const SkillsTree = () => {
  return (
    <div className={styles.skillsTreeContainer}>
      <div className={styles.instructionText}>
        <p>
          Select a skill node by clicking on Languages, Frameworks, or Platforms
        </p>
      </div>
      <SkillProvider>
        <SkillTreeGroup>
          {() => (
            <SkillTree
              treeId="my-skill-tree"
              title="Skill Tree"
              data={skillsData}
              collapsible
              description="Explore my skills!"
            />
          )}
        </SkillTreeGroup>
      </SkillProvider>
    </div>
  );
};

export default SkillsTree;
