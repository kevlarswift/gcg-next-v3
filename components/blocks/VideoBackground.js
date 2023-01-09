import { useState } from "react";
import ReactPlayer from "react-player/lazy"
import Link from "next/link";
import styles from "./VideoBackground.module.scss";

export default function VideoBackground({ url }) {
  const [play, setPlay] = useState(true);
  function handlePause() {
    setPlay(!play)
  }

  return (   
    <section className={styles.wrapper}>
      <ReactPlayer
        url={url}
        playing={play}
        loop
        muted
        width="100%"
        height="100%"
        className={styles.video}
      />
      <div className={styles.overlay}>
        <div className={styles.inner}>
          <div>
            <h1>Make an
              <br />
              <span className={styles.emphasis}>Impact</span>
            </h1>
            <div className="video-button" style={{textAlign: 'center'}}>
              <Link href="/#this-is-uscg"><a className="btn-cta">Get Started Now</a></Link>
            </div>
            <div className={styles.pause}><button onClick={handlePause}>{play? "Pause" : "Play"}</button></div>   
          </div>
        </div>
      </div>
    </section>
  );
}