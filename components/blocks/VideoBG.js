import React from "react";
import styles from "./VideoBG.module.scss";

export default function VideoBG() {
  return (
    <section className={styles.wrapper}>
      <video muted loop autoPlay poster="/video/videoBG.jpg" className={`${styles.video}`}>
        <source src="/video/videoBG.mp4" type="video/mp4"></source>
      </video>

      <div className={styles.overlay}>
        <div className={styles.inner}>
          <h1>
            Make an
            <br />
            <span className={styles.emphasis}>Impact</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
