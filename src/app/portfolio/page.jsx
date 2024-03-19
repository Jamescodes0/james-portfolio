import { getPosts } from "@/lib/data";
import PortfolioCard from "@/components/portfolio/portfolioCard";
import styles from "./portfolio.module.css";

//FETCH DATA WITH AN API
export async function loader() {
  const posts = await getPosts();
  return { props: { posts } };
}

const Portfolio = async () => {
  //FETCH DATA WITH AN API
  const posts = await getPosts();

  //FETCH DATA WITHOUT AN API
  //const posts = await getPosts();
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PortfolioCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
