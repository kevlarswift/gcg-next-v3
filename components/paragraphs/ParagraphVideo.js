import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Player from "/components/video/Player";
import { Container } from "react-bootstrap";
import Body from "/components/page/Body";
import styles from "./ParagraphVideo.module.scss";

export default function ParagraphVideo({ content }) {
  // Animation & intersection parameters
  const initial = { opacity: 0, y: 20, transition: { duration: 0.5 } };
  const complete = { opacity: 1, y: 0, transition: { duration: 0.5 } };
  const intersection = { threshold: 0.1 };

  // Animate upon enter viewport
  const { ref, inView } = useInView(intersection);
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start(complete);
    } else {
      animation.start(initial);
    }
  }, [inView]);

  return (
    <div ref={ref}>
      {/**<pre>{JSON.stringify(content.field_alignment, null, 2)}</pre>*/}
      <Container className="container-inner">
        <motion.div animate={animation} initial={initial}>
          {content.field_alignment ? (
            <div className={styles.wrapper}>
              <div className={styles.inner}>
                <div>
                  {content.field_title && <h2>{content.field_title}</h2>}
                  {content.field_body?.processed && <Body value={content.field_body.processed} />}
                </div>
              </div>
              <div className={styles.video}>
                <Player input={content.field_video?.input} />
              </div>
            </div>
          ) : (
            <div className={styles.wrapper}>
              <div className={styles.video}>
                <Player input={content.field_video?.input} />
              </div>
              <div className={styles.inner}>
                <div>
                  {content.field_title && <h2>{content.field_title}</h2>}
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
