import Link from "next/link";
import Image from "next/image";
import ReactPlayer from "react-player/lazy";
import { Accordion, Container } from "react-bootstrap";
import Body from "/components/Body";
import Banner from "/components/blocks/banner";
import BackgroundImage from "/components/BackgroundImage";
import EnlistedRatingsMenu from "/components/careers/EnlistedRatingsMenu";
import styles from "./Rate.module.scss";

export function NodeRate({ node, rates, ...props }) {
  /*
  let bgImageSrc = null;
  let bgImageAlt = null;
  if (node.field_banner?.image_style_uri?.banner) {
    bgImageSrc = `${node.field_banner.image_style_uri.banner}`;
    bgImageAlt = node.field_banner?.resourceIdObjMeta?.alt;
  }
  else { 
    bgImageSrc = null; 
    bgImageAlt = null; 
  }
  */
  const skills = node.field_paragraph_skills;

  return (
    <>
      <div className={styles.rating} {...props}>
        <Banner
          title={node.title}
          subtitle={node.field_subtitle}
          bgImage={node.field_banner?.image_style_uri?.banner}
          bgImageAlt={node.field_banner?.resourceIdObjMeta?.alt}
          ctaLink={null}
          ctaText={null}
          short={false}
        />
        <div className={styles.bannerLower}>
          <BackgroundImage src="/images/backgrounds/waves3.webp" alt={""} />
          <Container className={styles.bannerLowerInner}>
            <div className={styles.bannerContent}>
              <div className={styles.bannerVideo}>
                {node.field_youtube ? (
                  <ReactPlayer
                    url={node.field_youtube.input}
                    width="100%"
                    height="100%"
                    className={styles.bannerVideoInner}
                  />
                ) : null}
              </div>
              <div>{node.body?.processed && <Body value={node.body.processed} />}</div>
            </div>
          </Container>
        </div>

        <Container className="content-wrapper">
          <Accordion defaultActiveKey="0">
            {node.field_rate_are_you?.processed ? (
              <Accordion.Item eventKey="0">
                <Accordion.Header>Are You...</Accordion.Header>
                <Accordion.Body>
                  <div dangerouslySetInnerHTML={{ __html: node.field_rate_are_you?.processed }} />
                </Accordion.Body>
              </Accordion.Item>
            ) : null}

            {node.field_paragraph_skills.length > 0 ? (
              <Accordion.Item eventKey="1">
                <Accordion.Header>Skills You&apos;ll Learn</Accordion.Header>
                <Accordion.Body>
                  {skills.map((skill, index) => {
                    return (
                      <div className={styles.skill} key={index}>
                        {skill.field_rate_skill_icon && (
                          <div className={styles.icon}>
                            <Image
                              src={process.env.NEXT_PUBLIC_DRUPAL_BASE_URL + skill.field_rate_skill_icon.uri.url}
                              width={32}
                              height={32}
                              alt={""}
                            />
                          </div>
                        )}
                        <div className={styles.title}>{skill.field_title}</div>
                      </div>
                    );
                  })}
                </Accordion.Body>
              </Accordion.Item>
            ) : null}

            {node.field_rate_training?.processed ? (
              <Accordion.Item eventKey="2">
                <Accordion.Header>Training You&apos;ll Get</Accordion.Header>
                <Accordion.Body>
                  <div dangerouslySetInnerHTML={{ __html: node.field_rate_training?.processed }} />
                </Accordion.Body>
              </Accordion.Item>
            ) : null}

            {node.field_rate_careers?.processed ? (
              <Accordion.Item eventKey="4">
                <Accordion.Header>Related Civilian Jobs</Accordion.Header>
                <Accordion.Body>
                  <div dangerouslySetInnerHTML={{ __html: node.field_rate_careers?.processed }} />
                </Accordion.Body>
              </Accordion.Item>
            ) : null}
          </Accordion>

          <div className="page-ctas">
            <EnlistedRatingsMenu data={rates} />
            <span className="divider">OR</span>
            <Link href="/connect">
              <a className="btn-cta">Connect</a>
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
}
