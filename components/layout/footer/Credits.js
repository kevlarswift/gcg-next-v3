import Image from "next/image";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Container from "react-bootstrap/Container";
import styles from "./Credits.module.scss";

export default function Credits({ author }) {
  return (
    <div className={styles.credits}>
      <Container>
        <div className={styles.inner}>
          <CreditsCopyright author={author} />
          <CreditsDHS />
        </div>
      </Container>
    </div>
  );
}

export const CreditsCopyright = ({ author }) => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({ opacity: 1, y: 0, transition: { ease: "easeInOut", duration: 0.5 } });
    } else {
      animation.start({ opacity: 0, y: 20, transition: { ease: "easeInOut", duration: 0.5 } });
    }
  }, [animation, inView]);
  return (
    <div className={styles.copyright} ref={ref}>
      <motion.p role="heading" animate={animation}>
        {new Date().getFullYear()} {author}
      </motion.p>
    </div>
  );
};

export const CreditsDHS = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({ opacity: 1, y: 0, transition: { ease: "easeInOut", duration: 0.5 } });
    } else {
      animation.start({ opacity: 0, y: 20, transition: { ease: "easeInOut", duration: 0.5 } });
    }
  }, [animation, inView]);
  return (
    <div ref={ref}>
      <motion.div className={styles.dhs} animate={animation}>
        <Image src="/public/images/footer/dhs.png" alt="Department of Homeland Security logo" width={200} height={60} />
      </motion.div>
    </div>
  );
};
