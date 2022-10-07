import Link from "next/link";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

import BackgroundImage from "../layout/BackgroundImage";
import styles from "./Social.module.scss";

export default function StayConnected({ menu1, menu2, facebook, instagram, youtube }) {
  const { ref, inView } = useInView({ threshold: 0.05 });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({ opacity: 1, transition: { duration: 0.35 } });
    } else {
      animation.start({ opacity: 0, transition: { duration: 0.35 } });
    }
  }, [inView]);
  return (
    <div ref={ref}>
      <motion.div className={styles.connected} animate={animation}>
        <BackgroundImage src="/images/backgrounds/connected.png" />
        <Container className={styles.connectedInner}>
          <div className={styles.socialWrapper}>
            <div className={styles.social}>
              <h3>Stay Connected</h3>
              <div className={styles.networks}>
                <a href={facebook} className={styles.share} aria-label="Facebook">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href={instagram} className={styles.share} aria-label="Instagram">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href={youtube} className={styles.share} aria-label="YouTube">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.links}>
            <div className={styles.linksInner}>
              <h4>Additional Links</h4>
              <div className={styles.listWrapper}>
                <ul>
                  {menu1 &&
                    menu1.edges.map((edge, index) => (
                      <li key={index} className="mb-2">
                        <a href={edge.node.url}>{edge.node.title}</a>
                      </li>
                    ))}
                </ul>
                <ul>
                  {menu2 &&
                    menu2.edges.map((edge, index) => (
                      <li key={index} className="mb-2">
                        <Link href={edge.node.url}>
                          <a>{edge.node.title}</a>
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </motion.div>
    </div>
  );
}
