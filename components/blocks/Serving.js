import Link from "next/link";
import Image from "next/image";
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
    <div className={styles.serving} id="this-is-uscg">
      <BackgroundImage src="/images/backgrounds/waves2.webp" alt="" style="width: 100%;" />
      <Container className={styles.inner}>
        <TitleAdornments />
        <ServingTitle title={serving.field_block_title} />
        <ServingSubtitle subtitle={serving.body.processed} />
        <div className={styles.grid}>
          {serving.field_serving_links.map((serving_link, idx) => (
            <Link href={serving_link.field_serving_link.uri.replace("internal:", "")} key={idx}>
              <a className={styles.item}>
                <div className={styles.itemInner}>
                  <div className={styles.btn}>{serving_link.field_serving_link.title}</div>
                  <Image src={serving_link.field_serving_image.image_style_uri.large} layout="fill" objectFit="cover" />
                </div>
              </a>
            </Link>
          ))}
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
      <motion.div animate={animation}><h2>{title}</h2></motion.div>
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
