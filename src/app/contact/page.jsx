"use client";

import styles from "./contact.module.css";
import Image from "next/image";
import dynamic from "next/dynamic";
//import HydrationTest from "@/components/hydrationTest";

/* const HydrationTestNoSSR = dynamic(() => import("@/components/hydrationTest"), {
  ssr: false,
}); */

const Contact = () => {
  const a = Math.random();
  console.log(a);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/contact.png"
          alt="Contact me"
          layout="responsive"
          width={500}
          height={500}
          objectFit="cover"
        />
      </div>
      <div className={styles.formContainer}>
        {/* <HydrationTestNoSSR /> */}
        {/* <div suppressHydrationWarning>{a}</div> */}
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name" required />
          <input type="text" placeholder="Email Address" required />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Type a message."
          ></textarea>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
