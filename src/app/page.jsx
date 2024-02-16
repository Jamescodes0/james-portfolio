import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
  <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Full Stack Software Engineer</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className={styles.buttons}>
        <button className={styles.button}>LinkedIn</button>
        <button className={styles.button}>GitHub</button>
    </div>
    <div className={styles.brands}>
<Image src="/brands.png" alt="" fill className={styles.brandImg}/>
    </div>
    </div>
    <div className={styles.imgContainer}>
<Image src="/hero.gif" alt="" fill className={styles.heroImg}/>
    </div>
  </div>
  );
};

export default Home;
