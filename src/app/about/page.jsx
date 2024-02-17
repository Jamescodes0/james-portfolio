import Image from "next/image";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}> About</h2>
        <h1 className={styles.title}> James Ho </h1>
        <p className={styles.desc}>
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1> 1+ </h1>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h1> 4+ </h1>
            <p>Frameworks learned</p>
          </div>
          <div className={styles.box}>
            <h1> 5+ </h1>
            <p>Languages learned</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/about.png"
          alt="Picture of James"
          fill
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default About;

/*
<div className={styles.imgContainer}>
<Image src="https://images.pexels.com/photos/14481034/pexels-photo-14481034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill/>
*/
