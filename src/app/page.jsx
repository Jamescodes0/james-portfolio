"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./home.module.css";

const skillCategories = [
  {
    category: "Languages",
    skills: [
      {
        id: 1,
        title: "HTML/CSS",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        id: 2,
        title: "JavaScript",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        id: 3,
        title: "Python",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      { id: 4, title: "C#", desc: "A sample text" },
      { id: 5, title: "C++", desc: "A sample text" },
      {
        id: 6,
        title: "SQL",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
    ],
  },
  {
    category: "Frameworks",
    skills: [
      {
        id: 7,
        title: "React",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        id: 8,
        title: "Angular",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        id: 9,
        title: ".NET",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        id: 10,
        title: "NextJS",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        id: 11,
        title: "NodeJS",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        id: 12,
        title: "NodeJS",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
    ],
  },
  {
    category: "Platforms",
    skills: [
      { id: 13, title: "Git", desc: "A sample text" },
      { id: 14, title: "MongoDB", desc: "A sample text" },
      {
        id: 15,
        title: "AWS",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        id: 16,
        title: "Jira",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        id: 17,
        title: "Trello",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        id: 18,
        title: "Google",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
    ],
  },
];

const Home = () => {
  const [activeSkill, setActiveSkill] = useState();

  const handleSkillClick = (skill) => {
    if (activeSkill && skill.id === activeSkill.id) {
      setActiveSkill(null);
    } else {
      setActiveSkill(skill);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>James Ho</h1>
          <p className={styles.desc}>
            SOFTWARE ENGINEER | SPECIALIZING IN FRONT & BACK END DEVELOPMENT
          </p>
          <div className={styles.buttons}>
            <Link href="/portfolio">
              <button className={styles.button}>Portfolio</button>
            </Link>
            <Link href="/contact">
              <button className={styles.button}>Contact</button>
            </Link>
          </div>
          <div className={styles.brands}>
            <a
              href="https://www.linkedin.com/in/jamesdho/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/linkedin.png"
                alt="LinkedIn"
                width={30}
                height={30}
                className={styles.brandImg}
              />
            </a>
            <a
              href="https://github.com/Jamescodes0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/github.png"
                alt="GitHub"
                width={30}
                height={30}
                className={styles.brandImg}
              />
            </a>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/moonRays.png"
            alt="Description"
            layout="responsive"
            width={300}
            height={300}
            className={styles.heroImg}
          />
        </div>
      </div>
      {activeSkill && (
        <div className={styles.backdrop} onClick={() => setActiveSkill(null)}>
          <div
            className={styles.skillCard}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{activeSkill.title}</h2>
            <p>{activeSkill.desc}</p>
            <button onClick={() => setActiveSkill(null)}>Close</button>
          </div>
        </div>
      )}
      <div className={styles.interactiveContainer}>
        <h1 className={styles.title}>Skill Tree</h1>
        <div className={styles.skillCategories}>
          {skillCategories.map((category) => (
            <div key={category.category} className={styles.skillColumn}>
              <h2>{category.category}</h2>

              <div className={styles.skillTree}>
                {category.skills.map((skill, index) => (
                  <button
                    key={skill.id}
                    className={`${styles.skillNode} ${
                      activeSkill?.id === skill.id ? styles.active : ""
                    }`}
                    onClick={() => handleSkillClick(skill)}
                    style={{
                      "--line-display":
                        index === category.skills.length - 1 ? "none" : "block",
                    }}
                  >
                    {skill.title}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Home;
