import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPauseCircle, faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import ReactPlayer from "react-player/lazy"
import Link from "next/link";
import styles from "./VideoBackground.module.scss";

export default function VideoBackground({ url }) {
  const [play, setPlay] = useState(true);
  function handlePlay() {
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
            <div className="video-button" style={{ textAlign: 'center' }}>
              <Link href="/#this-is-uscg"><a className="btn-cta">Get Started Now</a></Link>
            </div>
            <div className={styles.btnWrapper}>
              <button onClick={handlePlay} className={styles.btn}>
                {play ? <FontAwesomeIcon icon={faPauseCircle} /> : <FontAwesomeIcon icon={faPlayCircle} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}