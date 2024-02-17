import Link from "next/link";
import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>James Ho</h1>
          <p className={styles.desc}>
            SOFTWARE ENGINEER, SPECIALIZING IN FRONT & BACK END DEVELOPMENT
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
                alt=""
                fill
                className={styles.brandImg}
              />
            </a>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/moonRays.png" alt="" fill className={styles.heroImg} />
        </div>
      </div>

      <div className={styles.interactiveContainer}>
        <div className={styles.secondTextContainer}>
          <h1 className={styles.title}>James Ho.</h1>
          <h2>Interactive</h2>
          <p>This is going to be my interactive page.</p>
          <p className={styles.desc}>
            Interactive is a placeholder for something.
          </p>
          <div className={styles.brands}>
            <Image
              src="/linkedin.png"
              alt=""
              fill
              className={styles.brandImg}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
