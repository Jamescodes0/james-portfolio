import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "About description",
};

const About = () => {
  console.log("lets check where it works");
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}> About Me</h2>
        <h1 className={styles.title}> James Ho </h1>
        <h2 className={styles.subTitle}>
          | DEVELOPER | DESIGNER | GAMER | VISIONARY |
        </h2>
        <div className={styles.imgContainer}>
          <Image
            src="/headshot.jpg"
            alt="Picture of James"
            layout="fixed"
            width={300}
            height={300}
            className={styles.img}
          />
        </div>
        <p className={styles.desc}>
          As a software engineer, I bring a diverse skill set and a passion for
          innovation to every project I undertake. With proficiency in languages
          such as Python, JavaScript, and SQL, along with experience in
          frameworks like React.js and Next.js and .NET, and managing relational
          database storage with MongoDB, I thrive on creating efficient
          solutions for each project I manage. Besides software development, my
          10+ years as and executive assistant allowed me to gain essential
          skills that transferred to software engineering such as meticulous
          attention to detail and ability to manage and track all my tasks to be
          submitted well before deadlines. In my personal life, I find joy in
          hobbies such as hitting the gym or exploring scenic trails while
          hiking with my Husky and wife.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1> 1+ </h1>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h1> 5+ </h1>
            <p>Frameworks learned</p>
          </div>
          <div className={styles.box}>
            <h1> 5+ </h1>
            <p>Languages learned</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

/*
<div className={styles.imgContainer}>
<Image src="https://images.pexels.com/photos/14481034/pexels-photo-14481034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill/>
*/
