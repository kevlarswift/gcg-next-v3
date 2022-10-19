import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Body from "/components/Body";

export default function CTA({ intro, url, title }) {
  const { ref, inView } = useInView({ threshold: 0.25 });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
    } else {
      animation.start({ opacity: 0, y: 20, transition: { duration: 0.5 } });
    }
  }, [animation,inView]);

  return (
    <div ref={ref}>
      <motion.div animate={animation} initial={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}>
        {intro && (
          <div className="text-center">
            <Body value={intro} />
          </div>
        )}
        {title && (
          <div className="page-ctas">
            <Link href={url}>
              <a className="btn-cta">{title}</a>
            </Link>
          </div>
        )}
      </motion.div>
    </div>
  );
}
