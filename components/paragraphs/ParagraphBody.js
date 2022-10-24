import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Container } from "react-bootstrap";
import Body from "/components/Body";

export default function ParagraphBody({ content }) {
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
          {content.field_title && <h2>{content.field_title}</h2>}
          {content.field_body?.processed && <Body value={content.field_body.processed} />}
        </motion.div>
      </Container>
    </div>
  );
}
