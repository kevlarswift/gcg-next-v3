import Link from "next/link";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMapMarkerAlt, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";
import styles from "./Actions.module.scss";
import Body from "/components/Body";

export default function Actions({ body }) {
  return (
    <Container className={styles.startAdventure}>
      <StartAdventureTitle />
      <StartAdventureSubtitle subtitle={body} />
      <div className={styles.ctas}>
        <StartAdventureLink title="Chat Now" link="/chat-now" icon={faMapMarkerAlt} />
        <StartAdventureLink title="Find a Recruiter" link="/find-recruiter" icon={faLocationArrow} />
        <StartAdventureLink title="Apply Now" link="/joining/prospect-questionnaire" icon={faEnvelope} />
      </div>
    </Container>
  );
}

export const StartAdventureTitle = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });
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
      <motion.div animate={animation}>
        <h2>
          Start your
          <span className={styles.emphasis}>Adventure</span>
        </h2>
      </motion.div>
    </div>
  );
};

export const StartAdventureSubtitle = ({ subtitle }) => {
  const { ref, inView } = useInView({ threshold: 0.5 });
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
      <motion.div animate={animation}>
        <Body value={subtitle} />
      </motion.div>
    </div>
  );
};

export const StartAdventureLink = ({ title, link, icon }) => {
  const { ref, inView } = useInView({ threshold: 0.5 });
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
      <motion.div className={styles.connect} animate={animation}>
        <Link href={link}>
          <a>
            <div className={styles.inner}>
              <div className={styles.iconWrapper}>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={icon} />
                </div>
              </div>
              <div className={styles.textWrapper}>
                <span className={styles.text}>{title}</span>
              </div>
            </div>
          </a>
        </Link>
      </motion.div>
    </div>
  );
};
