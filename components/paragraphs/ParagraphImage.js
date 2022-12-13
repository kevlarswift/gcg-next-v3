import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Container } from "react-bootstrap";
import Image from "next/image";
import Body from "/components/Body";
import styles from "./ParagraphImage.module.scss";

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
      {/**<pre>{JSON.stringify(content, null, 2)}</pre>*/}
      <Container className="container-inner">
        <motion.div animate={animation}>
          {content.field_alignment ? (
            <div className={styles.wrapper}>
              <div className={styles.inner}>
                <div>
                  {content.field_title && <h2>{content.field_title}</h2>}
                  {content.field_body?.processed && <Body value={content.field_body.processed} />}
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  src={content.field_image?.image_style_uri?.large}
                  alt={content.field_image?.resourceIdObjMeta?.alt}
                  width={1080}
                  height={810}
                />
              </div>
            </div>
          ) : (
            <div className={styles.wrapper}>
              <div className={styles.image}>
                <Image
                  src={content.field_image?.image_style_uri?.large}
                  alt={content.field_image?.resourceIdObjMeta?.alt}
                  width={1080}
                  height={810}
                />
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
