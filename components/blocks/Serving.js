import Link from "next/link";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TitleAdornments from "./TitleAdornments";
import Body from "/components/Body"
import BackgroundImage from "/components/BackgroundImage";
import styles from "./Serving.module.scss";

export default function Serving({ serving }) {

  return (
    <div className={styles.serving}>
      <BackgroundImage src="/images/backgrounds/waves.webp" alt="" />
      <Container className={styles.inner}>

        <TitleAdornments />
        <ServingTitle title={`<h2>${serving.field_title.processed}</h2>`} />
        <ServingSubtitle subtitle={serving.body.processed} />
        {serving.field_serving_links.map((serving_link) => (
          <option value={serving_link.field_serving_link.title} key={serving_link.field_serving_link.title}>
            {serving_link.field_serving_link.title}
          </option>
        ))}
        <div className={styles.grid}>
          {serving.field_serving_links.map((serving_link, idx) => (
            <Link href={serving_link.field_serving_link.uri.replace("internal:", "")} key={idx}>
              <a className={styles.item}>
                <div className={styles.itemInner}>
                  <div className={styles.btn}>{serving_link.field_serving_link.title}</div>
                  <BackgroundImage src="/images/serving/missions.webp" alt="Mission" />
                </div>
              </a>
            </Link>
          ))}
          <Link href="/about/missions">
            <a className={styles.item}>
              <div className={styles.itemInner}>
                <div className={styles.btn}>Missions</div>
                <BackgroundImage src="/images/serving/missions.webp" alt="Mission" />
              </div>
            </a>
          </Link>

          <Link href="/careers/enlisted">
            <a className={styles.item}>
              <div className={styles.itemInner}>
                <div className={styles.btn}>Enlisted</div>
                <BackgroundImage src="/images/serving/careers.webp" alt="Enlisted Careers" />
              </div>
            </a>
          </Link>

          <Link href="/careers/officer">
            <a className={styles.item}>
              <div className={styles.itemInner}>
                <div className={styles.btn}>Officer</div>
                <BackgroundImage src="/images/serving/officers.webp" alt="Officer Careers" />
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
  }, [animation, inView]);
  return (
    <div ref={ref}>
      <motion.div animate={animation}><Body value={title} /></motion.div>
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
  }, [animation, inView]);
  return (
    <div ref={ref}>
      <motion.div animate={animation}><Body value={subtitle} /></motion.div>
    </div>
  );
};
