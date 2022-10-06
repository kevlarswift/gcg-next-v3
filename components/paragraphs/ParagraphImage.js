import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Container } from "react-bootstrap";
import Body from "/components/page/Body";
import styles from "./ParagraphImage.module.scss";

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

  // Image pointer
  let bgImage = null;
  {
    content?.field_image?.image_style_uri?.card
      ? (bgImage = `${content.field_image.image_style_uri.card}`)
      : (bgImage = null);
  }
  return (
    <div ref={ref}>
      {/*
      <pre>{JSON.stringify(content, null, 2)}</pre>
      */}
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

              <div className={styles.image}>
                {content.field_image?.image_style_uri?.card ? (
                  <img
                    src={content.field_image.image_style_uri?.card}
                    width="100%"
                    alt={content.field_image.resourceIdObjMeta.alt}
                  />
                ) : null}
              </div>
            </div>
          ) : (
            <div className={styles.wrapper}>
              <div className={styles.image}>
                {content.field_image?.image_style_uri?.card ? (
                  <img
                    src={content.field_image.image_style_uri?.card}
                    width="100%"
                    alt={content.field_image.resourceIdObjMeta.alt}
                  />
                ) : null}
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
