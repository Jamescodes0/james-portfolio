"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./home.module.css";
import dynamic from "next/dynamic";
const SkillsTreeWithNoSSR = dynamic(
  () => import("../components/skillsTree/skillsTree"),
  { ssr: false }
);

const Home = () => {
  return (
    <>
      <div className={styles.videoContainer}>
        <video className={styles.video} autoPlay muted loop playsInline>
          <source src="/intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
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
      <div className={styles.interactiveContainer}></div>
      <div className={styles.skillsTree}>
        <SkillsTreeWithNoSSR />
      </div>
    </>
  );
};
export default Home;
