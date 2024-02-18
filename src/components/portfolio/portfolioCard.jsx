import Image from "next/image";
import styles from "./portfolioCard.module.css";
import Link from "next/link";

const PorfolioCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="/RumbApp.jpg"
            alt="Post image"
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h2 className={styles.title}>RumbApp is a...</h2>
        <p className={styles.desc}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <Link className={styles.link} href="/portfolio/post">
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PorfolioCard;
