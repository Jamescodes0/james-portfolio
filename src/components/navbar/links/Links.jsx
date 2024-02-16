"use client"

import { useState } from "react"
import styles from "./links.module.css"
import NavLink from "./navLink/navLink";

  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Portfolio",
      path: "/portfolio",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  const Links = () => {
  const [open, setOpen] = useState(false)

//TEMPORARY
const session = true;
const isAdmin = true;

  return (
    <div className={styles.container}>
    <div className={styles.links}> 
      {links.map((link) => (
      <NavLink item={link} key={link.title}/>
      ))} {
        session ? (
          <>
          {
            isAdmin && (
              <NavLink item={{title: "Admin", path: "/admin"}}/>
              )
            }
            <button className={styles.logout}>Logout</button>
            </>
        ) : (
          <NavLink item={{title: "Login", path: "/login"}}/>
        )
      }
    </div>
    <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button>
    {
      open && (<div className={styles.mobileLinks}>
        {links.map((link) => (
          <NavLink item={link} key={link.title}/>
        ))}
        </div>
    )}
    </div>
  );
};

export default Links;