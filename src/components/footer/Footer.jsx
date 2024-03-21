import styles from "./footer.module.css"

const Footer = () => {
  return (
  <div className={styles.container}> 
  <div className={styles.logo}>JamesCodes
    </div> 
    <div className={styles.text}>
  Copyright © 2023 James Ho | All Rights Reserved.
  </div>
  </div>
  )
};

export default Footer;
