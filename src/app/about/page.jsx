import Image from "next/image";
import styles from "./about.module.css";


const About = () => {
  return (
    <div>
  <div className={styles.imgContainer}>
<Image src="https://images.pexels.com/photos/14481034/pexels-photo-14481034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill/>
  </div>
  </div>
  );
};

export default About;
