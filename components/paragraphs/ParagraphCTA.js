import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Container } from "react-bootstrap";
import Link from "next/link";
import Body from "/components/Body";

export default function ParagraphCTA({ content }) {
  const { ref, inView } = useInView({ threshold: 0.25 });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
    } else {
      animation.start({ opacity: 0, y: 20, transition: { duration: 0.5 } });
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <Container className="container-inner">
        <motion.div animate={animation}>
          {content.field_cta_intro && (
            <div className="text-center">
              {content.field_title && <h2>{content.field_title}</h2>}
              <Body value={content.field_cta_intro.processed} />
            </div>
          )}
          {content.field_cta_link && (
            <div className="page-ctas">
              {content.field_cta_link.map((cta_link, idx) => (
                <Link href={cta_link?.uri?.replace("internal:", "")} key={idx}>
                  <a className="btn-cta">{cta_link?.title}</a>
                </Link>
              ))}
            </div>
          )}
        </motion.div>
      </Container>
    </div>
  );
}