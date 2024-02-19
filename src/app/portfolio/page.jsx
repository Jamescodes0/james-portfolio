import { getPost } from "@/lib/data";
import PortfolioCard from "../../components/portfolio/portfolioCard";
import styles from "./portfolio.module.css";

//FETCH DATA WITH AN API
//const getData = async () => {
  //const res = await fetch("https://jsonplaceholder.typicode.com/posts", {next:{revalidate:3600}})
//if (!res.ok) {
  //throw new Error("Something went wrong")
//}
//return res.json()
//}

const Portfolio = async () => {

  //FETCH DATA WITH AN API
  //const posts = await getData()

//FETCH DATA WITHOUT AN API
  const posts = await getPost()
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
        <PortfolioCard post={post}/>
    </div>
      ))}
</div>
  );
};

export default Portfolio;
