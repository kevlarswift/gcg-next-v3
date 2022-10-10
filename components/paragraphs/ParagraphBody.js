import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Container } from "react-bootstrap";
import Body from "components/Body";

export default function ParagraphBody({ content }) {
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
  }, [animation, initial, complete, inView]);

  return (
    <div ref={ref}>
      <Container className="container-inner">
        <motion.div animate={animation} initial={initial}>
          {content.field_title && <h2>{content.field_title}</h2>}
          {content.field_body?.processed && <Body value={content.field_body.processed} />}
        </motion.div>
      </Container>
    </div>
  );
}
