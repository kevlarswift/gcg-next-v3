import { Container } from "react-bootstrap";
import Banner from "/components/blocks/banner";
import Paragraph from "/components/paragraphs/Paragraph";

export function NodeBasicPage({ node, ...props }) {
  return (
    <article {...props}>
      <Banner
        title={node.title}
        subtitle={node.field_subtitle}
        bgImage={node.field_banner?.image_style_uri?.banner}
        ctaLink={null}
        ctaText={null}
        short={false}
        bgImageAlt={node.field_banner?.resourceIdObjMeta?.alt}
      />
      <Container className="container-inner">
        {node.field_paragraphs &&
          node.field_paragraphs.map((paragraph, idx) => {
            return <Paragraph content={paragraph} key={idx} />;
          })
        }
      </Container>
    </article>
  )
}
