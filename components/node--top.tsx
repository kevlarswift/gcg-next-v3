import { DrupalNode } from "next-drupal";
import { Container } from "react-bootstrap";
import Banner from "components/blocks/banner";
import Paragraph from "components/paragraphs/Paragraph";

interface NodeTopProps {
  node: DrupalNode;
}

export function NodeTop({ node, ...props }: NodeTopProps) {
  let bgImageSrc = null;
  {
    node.field_banner?.image_style_uri?.banner
      ? (bgImageSrc = `${node.field_banner.image_style_uri.banner}`)
      : (bgImageSrc = null);
  }
  return (
    <article {...props}>
      <Banner
        title={node.title}
        subtitle={node.field_subtitle}
        bgImage={bgImageSrc}
        bgImageAlt={node.field_banner.resourceIdObjMeta.alt}
        cta={null}
        ctaLink={null}
        ctaText={null}
        short={false} 
      />
      <Container>
        {node.field_paragraphs &&
          node.field_paragraphs.map((paragraph: any, idx: any) => {
            return <Paragraph content={paragraph} key={idx} />;
          })}
      </Container>
    </article>
  );
}
