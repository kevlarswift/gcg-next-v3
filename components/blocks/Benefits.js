import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import BackgroundImage from "/components/BackgroundImage.js";
import { shuffle } from "lodash";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TitleAdornments from "./TitleAdornments";
import BenefitsData from "/data/Benefits.js";
import { Container } from "react-bootstrap";

import styles from "./Benefits.module.scss";

function SampleNextArrow({ className, style, onClick }) {
  return <div className={className} style={{ ...style }} onClick={onClick} />;
}

function SamplePrevArrow({ className, style, onClick }) {
  return <div className={className} style={{ ...style }} onClick={onClick} />;
}

export default function Benefits() {
  // Animation
  const { ref, inView } = useInView({ threshold: 0.05 });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({ opacity: 1, transition: { duration: 0.35 } });
    } else {
      animation.start({ opacity: 0, transition: { duration: 0.35 } });
    }
  }, [inView]);

  const settings = {
    infinite: true,
    speed: 750,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const items = shuffle(BenefitsData.items);

  return (
    <div ref={ref}>
      <motion.div className={styles.benefits} animate={animation}>
        <BackgroundImage src="/images/backgrounds/benefits.webp" />
        <Container className={styles.inner}>
          <TitleAdornments />
          <h3>Great reasons to join</h3>
          <div className={styles.grid}>
            <Slider {...settings}>
              {items.map((item, index) => {
                return <Benefit title={item.title} subhead={item.subhead} icon={item.icon} key={index} />;
              })}
            </Slider>
          </div>
        </Container>
      </motion.div>
    </div>
  );
}

export const Benefit = ({ title, subhead, icon }) => {
  return (
    <div className={styles.benefit}>
      <div className={styles.iconWrapper}>
        <div className={styles.icon}>
          <Image src={icon} width={75} height={75} />
        </div>
      </div>
      <div className={styles.titleWrapper}>
        <h4 className={styles.title}>{title}</h4>
      </div>
      {/**
      <div className={styles.description}>
        <p>{subhead}</p>
      </div>
       */}
    </div>
  );
};