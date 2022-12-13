import { Container } from "react-bootstrap";
import Banner from "/components/blocks/banner";
import Paragraph from "/components/paragraphs/Paragraph";

export function NodeTop({ node, ...props }) {
  return (
    <article {...props}>
      <Banner
        title={node.title}
        subtitle={node.field_subtitle}
        bgImage={node.field_banner?.image_style_uri?.banner}
        bgImageAlt={node.field_banner?.resourceIdObjMeta?.alt}
        ctaLink={null}
        ctaText={null}
        short={false}
      />
        {node.field_paragraphs &&
          node.field_paragraphs.map((paragraph) => {
            return <Paragraph content={paragraph} key={paragraph.id} />;
          })}
    </article>
  );
}
