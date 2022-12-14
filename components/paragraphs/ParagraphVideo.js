import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Player from "/components/video/Player";
import { Container } from "react-bootstrap";
import Body from "/components/Body";
import styles from "./ParagraphVideo.module.scss";

export default function ParagraphVideo({ content }) {
  // Animate upon enter viewport
  const { ref, inView } = useInView({ threshold: 0.1 });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
    } else {
      animation.start({ opacity: 0, y: 20, transition: { duration: 0.5 } });
    }
  }, [animation, inView]);

  return (
    <div ref={ref}>
      <Container className="container-inner">
        <motion.div animate={animation}>
          {content.field_alignment ? (
            <div>
              {content.field_title && <h2>{content.field_title}</h2>}
              <div className={styles.wrapper}>
                <div className={styles.inner}>
                  {content.field_body?.processed && <Body value={content.field_body.processed} />}
                </div>
                <div className={styles.video}>
                  <Player input={content.field_video?.input} />
                </div>
              </div>
            </div>
          ) : (
            <div>
              {content.field_title && <h2>{content.field_title}</h2>}
              <div className={styles.wrapper}>
                <div className={styles.video}>
                  <Player input={content.field_video?.input} />
                </div>
                <div className={styles.inner}>
                  {content.field_body?.processed && <Body value={content.field_body.processed} />}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </Container>
    </div>
  );
}
