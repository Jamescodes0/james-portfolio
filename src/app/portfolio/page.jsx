import styles from "./portfolio.module.css";
import PortfolioCard from "../../components/portfolio/portfolioCard";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <PortfolioCard />
      </div>
      <div className={styles.post}>
        <PortfolioCard />
      </div>
      <div className={styles.post}>
        <PortfolioCard />
      </div>
      <div className={styles.post}>
        <PortfolioCard />
      </div>
    </div>
  );
};

export default Portfolio;
