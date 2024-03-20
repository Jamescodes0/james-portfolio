"use server";
import { getPosts } from "@/lib/data";
import PortfolioCard from "@/components/portfolio/portfolioCard";
import styles from "./portfolio.module.css";

// FETCH DATA WITH AN API
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/portfolio", {
    method: "GET",
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const Portfolio = async () => {
  let posts;
  try {
    posts = await getPosts();
  } catch (error) {
    console.error("Failed to fetch posts:", error);
  }

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
