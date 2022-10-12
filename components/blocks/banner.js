import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Container } from "react-bootstrap";
import TitleAdornments from "/components/blocks/TitleAdornments";
import styles from "./Banner.module.scss";

function Banner({ title, subtitle, bgImage,  bgImageAlt, ctaLink, ctaText, short = false }) {

  return (
    <div className={styles.banner}>
      {bgImage && (
        <div className={styles.background}>
          <Image src={`${bgImage}`} layout="fill" objectFit="cover" alt={bgImageAlt} />
        </div>
      )}
      <Container
        className={`${styles.inner} ${short ? styles.short : ""}`}
        style={{ position: "relative", zIndex: "1" }}>
        <TitleAdornments />
        <div className={styles.text}>
          <BannerTitle title={title} />
          <BannerSubtitle subtitle={subtitle} />
        </div>

        {ctaLink && (
          <div className="page-ctas">
            <Link href={ctaLink.replace("internal:", "")}>
              <a className="btn-cta">{ctaText}</a>
            </Link>
          </div>
        )}
      </Container>
    </div>
  );
}
export default Banner;

export const BannerTitle = ({ title }) => {
  const { ref, inView } = useInView({ threshold: 0.75 });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({ opacity: 1, scale: 1, transition: { duration: 0.5 } });
    } else {
      animation.start({ opacity: .66, scale: 1.125, transition: { duration: 0.5 } });
    }
  }, [animation, inView]);
  return (
    <div ref={ref}>
      <motion.h1 animate={animation} initial={{ opacity: .66, scale: 1.125, transition: { duration: 0.5 } }}>
        {title}
      </motion.h1>
    </div>
  );
};

export const BannerSubtitle = ({ subtitle }) => {
  const { ref, inView } = useInView({ threshold: 0.75 });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({ opacity: 1, scale: 1, transition: { duration: 0.5 } });
    } else {
      animation.start({ opacity: .66, scale: 0.875, transition: { duration: 0.5 } });
    }
  }, [animation, inView]);
  return (
    <div ref={ref}>
      <motion.p animate={animation} initial={{ opacity: .66, scale: 0.875, transition: { duration: 0.5 } }} role="heading">
        {subtitle}
      </motion.p>
    </div>
  );
};
