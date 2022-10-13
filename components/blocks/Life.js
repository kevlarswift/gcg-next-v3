import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { Container, Form } from "react-bootstrap";
import Player from "../video/Player";
import styles from "./Life.module.scss";

export default function Life() {
  const title = "There &apos;s no such thing as an average day when in the Coast Guard";
  const subtitle =
    "Every day, you&apos;ll work on exciting missions and gain in-demand career skills all while making lifelong friends and having life-changing experiences. Just ask our servicemembers. They&apos;ll tell you that adventure is part of their job—and making a difference is their priority.";

  const videos = [
    { url: "https://www.youtube.com/watch?v=4r8KrBDPozE", title: "Ariel Medlin" },
    { url: "https://www.youtube.com/watch?v=IzRjlcDjXO8", title: "Duy Pham" },
    { url: "https://www.youtube.com/watch?v=fsmrpiq20jY", title: "Afip Castillo" },
    { url: "https://www.youtube.com/watch?v=Y4Z0C_uiO68", title: "Recruiting Office New York" },
    { url: "https://www.youtube.com/watch?v=M0V4u3NUQpY", title: "MK2 Rachel Fultz" },
    { url: "https://www.youtube.com/watch?v=Y0DUfDggxRw", title: "Jordan Gilbert" },
    { url: "https://www.youtube.com/watch?v=OJCYJOHgjlQ", title: "Ava Frickey" },
    { url: "https://www.youtube.com/watch?v=lB5p0bjl00s", title: "Gabriella Deza" },
    { url: "https://www.youtube.com/watch?v=rj02SmuPOHI", title: "Beth and Scott Slade" },
    { url: "https://www.youtube.com/watch?v=b81OWkuAbJk", title: "Cory Bretsch" },
    { url: "https://www.youtube.com/watch?v=IO_uI7Tu7ng", title: "Lindsey Arcangel" },
    { url: "https://www.youtube.com/watch?v=n_0cT8WvkvQ", title: "Leanne Lusk" },
    { url: "https://www.youtube.com/watch?v=fKLAb1YEks4", title: "Earl Jackson" },
    { url: "https://www.youtube.com/watch?v=uxa_qdonLjk", title: "Megan O`&apos;`Connor" },
    { url: "https://www.youtube.com/watch?v=DvuFsg-ffcE", title: "Tom Brown" },
    { url: "https://www.youtube.com/watch?v=AP48HFhG1e0", title: "Kimberley Miller" },
  ];
  const [video, setVideo] = useState(videos[0].url);

  return (
    <Container className={styles.life}>
      <div className={styles.inner}>
        <div>
          <LifeTitle title={title} />
          <LifeSubtitle subtitle={subtitle} />
        </div>
      </div>
      <LifePlayer video={video} videos={videos} setVideo={setVideo} />
      <LifeAction />
    </Container>
  );
}

export const LifeTitle = ({ title }) => {
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
      <motion.h3 animate={animation}>{title}</motion.h3>
    </div>
  );
};

export const LifeSubtitle = ({ subtitle }) => {
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

export const LifePlayer = ({ video, videos, setVideo }) => {
  const { ref, inView } = useInView({ threshold: 0.15 });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
    } else {
      animation.start({ opacity: 0, y: 15, transition: { duration: 0.5 } });
    }
  }, [inView]);

  const handleSelect = (event) => {
    setVideo(event.target.value);
  };
  return (
    <div ref={ref}>
      <motion.div animate={animation}>
        <Player input={video} />
        <div className={styles.selector}>
          <Form>
            <Form.Group controlId="formVideoSelect">
              <Form.Select aria-label="Choose another Video" onChange={handleSelect}>
                <option value="/careers/enlisted"> - Explore &apos;A Coast Guard Life&apos; video series - </option>
                {videos.map((vid, idx) => (
                  <option value={vid.url} key={idx}>
                    {vid.title}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Form>
        </div>
      </motion.div>
    </div>
  );
};

export const LifeAction = () => {
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
      <motion.div className="ctas" animate={animation}>
        <Link href="/stories">
          <a className="btn-cta">Watch More Stories</a>
        </Link>
      </motion.div>
    </div>
  );
};
