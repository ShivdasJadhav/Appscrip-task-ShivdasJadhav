import React from "react";
import styles from "../styles/Label.module.css";
import Image from "next/image";
function Label() {
  return (
    <div className={styles.container}>
      {[1, 2, 3].map((i) => (
        <div className={styles.label} key={i}>
          <Image
            src="/assets/element-4.png"
            alt="Label"
            width={10}
            height={10}
          />
          <p>Lorem ipsum dolor</p>
        </div>
      ))}
    </div>
  );
}

export default Label;
