import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Container, Form } from "react-bootstrap";
import Body from "/components/Body"
import Player from "../video/Player";
import styles from "./Life.module.scss";

export default function Life({ youtube }) {

  const videos = youtube.field_youtube_videos;
  const [video, setVideo] = useState(videos[0].field_youtube_video.input);

  return (
    <>
      <Container className={styles.life}>
        <div className={styles.inner}>
          <div>
            <LifeTitle title={youtube.field_title.processed} />
            <LifeSubtitle subtitle={youtube.body.processed} />

          </div>
        </div>
        <LifePlayer video={video} videos={videos} setVideo={setVideo} />
        <LifeAction />
      </Container>
    </>
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
  }, [animation, inView]);

  return (
    <div ref={ref}>
      <motion.h3 animate={animation}><Body value={title} /></motion.h3>
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
  }, [animation, inView]);

  return (
    <div ref={ref}>
      <motion.div animate={animation}><Body value={subtitle} /></motion.div>
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
  }, [animation, inView]);

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
                {videos.map((video) => (
                  <option value={video.field_youtube_video.input} key={video.id}>
                    {video.field_title}
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
  }, [animation, inView]);

  return (
    <div ref={ref}>
      <motion.div className="ctas" animate={animation}>
        <a className="btn-cta" href="https://www.youtube.com/channel/UCZ82FeGyWu0tM0_kBAttAhA">Watch More Stories</a>
      </motion.div>
    </div>
  );
};
