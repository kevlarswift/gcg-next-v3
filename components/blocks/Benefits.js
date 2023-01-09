import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPauseCircle, faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
//import BackgroundImage from "/components/BackgroundImage.js";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TitleAdornments from "./TitleAdornments";
import { Container } from "react-bootstrap";
import styles from "./Benefits.module.scss";

function SampleNextArrow({ className, style, onClick }) {
  return <div className={styles['slick-next']} style={{ ...style }} onClick={onClick} />;
}

function SamplePrevArrow({ className, style, onClick }) {
  return <div className={styles['slick-prev']} style={{ ...style }} onClick={onClick} />;
}

export default function Benefits(benefits) {
  // Animation
  const { ref, inView } = useInView({ threshold: 0.05 });
  const animation = useAnimation();
  
  // AutoPlay
  const sliderRef = useRef(null);
  const [autoPlay, setAutoPlay] = useState(true);
  const handleAutoPlay = () => {  
    if(autoPlay) {
      sliderRef.current.slickPause();
    } else {
      sliderRef.current.slickPlay();
    }
    setAutoPlay(!autoPlay)
  };

  useEffect(() => {
    if (inView) {
      animation.start({ opacity: 1, transition: { duration: 0.35 } });
    } else {
      animation.start({ opacity: 0, transition: { duration: 0.35 } });
    }
  }, [animation, inView]);

  const settings = {
    infinite: true,
    speed: 750,
    cssEase: "ease",
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: autoPlay,
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
  
  return (
    <div ref={ref}>
      <motion.div className={styles.benefits} animate={animation}>
        <Container className={styles.inner}>
          <TitleAdornments />
          <h2>Great reasons to join</h2><br />
          <div className={styles.grid}>
            <Slider ref={sliderRef} {...settings}>
              {benefits.benefits.map((benefit, index) => {
                return <Benefit title={benefit.title} icon={process.env.NEXT_PUBLIC_DRUPAL_BASE_URL + benefit?.field_icon?.uri?.url} alt={benefit.field_icon_alt} key={index} />;
              })}
            </Slider>
          </div>
          <div className={styles.pause}>
            <button onClick={handleAutoPlay} className={styles.btn}>
              {autoPlay ? <FontAwesomeIcon icon={faPauseCircle}/> : <FontAwesomeIcon icon={faPlayCircle}/>}
            </button>
          </div>
        </Container>
      </motion.div>
    </div>
  );
}

export const Benefit = ({ title, icon, alt }) => {
  return (
    <div className={styles.benefit}>
      <div className={styles.iconWrapper}>
        <div className={styles.icon}>
          <Image src={icon} width={75} height={75} alt={alt} />
        </div>
      </div>
      <div className={styles.titleWrapper}>
        <h4 className={styles.title}>{title}</h4>
      </div>
    </div>
  );
};
