import Link from "next/link";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TitleAdornments from "./TitleAdornments";
import BackgroundImage from "/components/BackgroundImage";
import styles from "./Serving.module.scss";

export default function Serving() {
  const title = "This is Coast Guard";
  const subtitle =
    "When you join the U.S. Coast Guard, you'll work with passionate individuals who share your drive to save lives, serve others and your country, and shield our nation from threats. If you have a sincere desire to make the world a better place while setting yourself up for a bright future, Coast Guard service is for you";

  return (
    <div className={styles.serving}>
      <BackgroundImage src="/images/backgrounds/ waves.webp" />
      <Container className={styles.inner}>
        <TitleAdornments />
        <ServingTitle title={title} />
        <ServingSubtitle subtitle={subtitle} />

        <div className={styles.grid}>
          <Link href="/about/missions">
            <a className={styles.item}>
              <div className={styles.itemInner}>
                <div className={styles.btn}>Missions</div>
                <BackgroundImage src="/images/serving/missions.webp" />
              </div>
            </a>
          </Link>

          <Link href="/careers/enlisted">
            <a className={styles.item}>
              <div className={styles.itemInner}>
                <div className={styles.btn}>Enlisted</div>
                <BackgroundImage src="/images/serving/careers.webp" />
              </div>
            </a>
          </Link>

          <Link href="/careers/officer">
            <a className={styles.item}>
              <div className={styles.itemInner}>
                <div className={styles.btn}>Officer</div>
                <BackgroundImage src="/images/serving/officers.webp" />
              </div>
            </a>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export const ServingTitle = ({ title }) => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
    } else {
      animation.start({ opacity: 0, y: 15, transition: { duration: 0.5 } });
    }
  }, [inView]);
  return (
    <div ref={ref}>
      <motion.h2 animate={animation}>{title}</motion.h2>
    </div>
  );
};

export const ServingSubtitle = ({ subtitle }) => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
    } else {
      animation.start({ opacity: 0, y: 15, transition: { duration: 0.5 } });
    }
  }, [inView]);
  return (
    <div ref={ref}>
      <motion.p animate={animation}>{subtitle}</motion.p>
    </div>
  );
};
