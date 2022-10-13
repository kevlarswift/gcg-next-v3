import Link from "next/link";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BackgroundImage from "../layout/BackgroundImage";
import Body from "components/Body";
import styles from "./Benefits.module.scss";

export default function Benefits({ title, body, link, linkText }) {
  return (
    <div>
      <div className={styles.outer}>
        <BackgroundImage src="/images/backgrounds/deployments.webp" />
        <Container className={styles.inner}>
          <BenefitsTitle title={title} />
          <BenefitsBody body={body} />
          <BenefitsAction link={link} text={linkText} />
        </Container>
      </div>
    </div>
  );
}

export const BenefitsTitle = ({ title }) => {
  const { ref, inView } = useInView({ threshold: 0.75 });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({ opacity: 1, y: 0, transition: { ease: "easeInOut", duration: 0.5 } });
    } else {
      animation.start({ opacity: 0, y: 20, transition: { ease: "easeInOut", duration: 0.5 } });
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <motion.h4 animate={animation}>{title}</motion.h4>
    </div>
  );
};

export const BenefitsBody = ({ body }) => {
  const { ref, inView } = useInView({ threshold: 0.75 });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({ opacity: 1, y: 0, transition: { ease: "easeInOut", duration: 0.5 } });
    } else {
      animation.start({ opacity: 0, y: 20, transition: { ease: "easeInOut", duration: 0.5 } });
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <motion.p animate={animation}><Body value={body} /></motion.p>
    </div>
  );
};

export const BenefitsAction = ({ link, text }) => {
  const { ref, inView } = useInView({ threshold: 1 });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({ opacity: 1, scale: 1, transition: { ease: "easeInOut", duration: 0.5 } });
    } else {
      animation.start({ opacity: 0, scale: 1.125, transition: { ease: "easeInOut", duration: 0.5 } });
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <motion.div className={styles.ctas} animate={animation}>
        <Link href={link.replace("internal:", "")}>
          <a className="btn-cta">{text}</a>
        </Link>
      </motion.div>
    </div>
  );
};
