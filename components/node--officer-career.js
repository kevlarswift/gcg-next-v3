import { Container } from "react-bootstrap";
import Banner from "/components/blocks/banner";
import Paragraph from "/components/paragraphs/Paragraph";
//import CTA from "/components/page/cta/CTA";

export function NodeOfficerCareer({ node }) {
  // Process CTAs
  /*
  const ctaIntro = node.field_paragraph_cta?.field_cta_intro?.processed
    ? node.field_paragraph_cta?.field_cta_intro?.processed
    : null;
  let ctaTitle = null;
  let ctaLink = null;

  if (node.field_paragraph_cta?.field_cta_link) {
    node.field_paragraph_cta.field_cta_link.map((cta) => {
      ctaTitle = cta.title;
      ctaLink = cta.uri.replace("internal:", "");
    });
  }
  */

  /* Process BG Image */
  let bgImageSrc = null;
  {
    node.field_banner?.image_style_uri?.banner
      ? (bgImageSrc = `${node.field_banner.image_style_uri.banner}`)
      : (bgImageSrc = null);
  }

  const ctaIntro = node.field_paragraph_cta?.field_cta_intro?.processed
    ? node.field_paragraph_cta?.field_cta_intro?.processed
    : null;
  let ctaTitle = null;
  let ctaLink = null;

  if (node.field_paragraph_cta?.field_cta_link) {
    ctaTitle = node.field_paragraph_cta.field_cta_link.title;
    ctaLink = node.field_paragraph_cta.field_cta_link.uri.replace("internal:", "");
  }

  return (
    <>
      <Banner title={node.title} subtitle={node.field_subtitle} bgImage={bgImageSrc} />
      <article>
        <Container className="container-inner">
          {node.field_paragraphs &&
            node.field_paragraphs.map((paragraph, idx) => {
              return <Paragraph content={paragraph} key={idx} />;
            })}
          {/**{ctaTitle && <CTA intro={ctaIntro} title={ctaTitle} url={ctaLink} />}*/}
        </Container>
      </article>
    </>
  );
}
