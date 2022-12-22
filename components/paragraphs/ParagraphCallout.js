import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Container, Row, Col } from "react-bootstrap";
import Body from "/components/Body";
import styles from "./ParagraphCallout.module.scss";

export default function ParagraphCallout({ content }) {
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
          <Row>
            <Col md={6} lg={8}>
              {content.field_title ? <h2>{content.field_title}</h2> : null}
              {content.field_body?.processed ? <Body value={content.field_body.processed} /> : null}
            </Col>
            <Col md={6} lg={4}>{content.field_callout?.processed ? <div className={styles.callout}><Body value={content.field_callout.processed} /></div> : null}</Col>
          </Row>

        </motion.div>
      </Container>
    </div>
  );
}
