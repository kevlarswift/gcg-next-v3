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
      <Container className="container-inner">
        <motion.div animate={animation}>
          <div>
            {content.field_title && <h2>{content.field_title}</h2>}
            <div className={styles.wrapper} style={{ direction: content.field_alignment ? 'rtl' : 'ltr' }}>
              <div className={styles.image}>
                <Image
                  src={content.field_image?.image_style_uri?.xl_640x480}
                  alt={content.field_image?.resourceIdObjMeta?.alt}
                  width={640}
                  height={480}
                />
              </div>
              <div className={styles.inner} style={{ direction: 'ltr' }}>
                <div>
                  {content.field_body?.processed && <Body value={content.field_body.processed} />}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
