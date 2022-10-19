import Image from "next/image";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./Mission.module.scss";
import Body from "components/Body";
import imgLogo from "/public/images/footer/logo.svg";

export default function Mission({ mission }) {
  return (
    <div className={styles.mission}>
      <Container>
        <div className={styles.inner}>
          <MissionLogo />
          <MissionBody mission={mission} />
        </div>
      </Container>
    </div>
  );
}

export const MissionLogo = () => {
  const { ref, inView } = useInView({ threshold: 0.75 });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({ opacity: 1, scale: 1, transition: { duration: 0.5 } });
    } else {
      animation.start({ opacity: 0, scale: 1.125, transition: { duration: 0.5 } });
    }
  }, [animation, inView]);
  return (
    <div className={styles.logoWrapper} ref={ref}>
      <motion.div animate={animation}>
        <Image
          src={imgLogo}
          className={styles.logo}
          width={400}
          height={60}
          placeholder={'blur'}
          alt="Logo of the United States Coast Guard"
        />
      </motion.div>
    </div>
  );
};

export const MissionBody = ({ mission }) => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
    } else {
      animation.start({ opacity: 0, y: -10, transition: { duration: 0.5 } });
    }
  }, [inView]);
  return (
    <div ref={ref}>
      <motion.div animate={animation}><Body value={mission} /></motion.div>
    </div>
  );
};
