import Banner from "components/blocks/banner";
import Paragraph from "components/paragraphs/Paragraph";

export function NodeTop({ node, ...props }) {
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
        ctaLink={null}
        ctaText={null}
        short={false}
      />
      {node.field_paragraphs &&
        node.field_paragraphs.map((paragraph, idx) => {
          return <Paragraph content={paragraph} key={idx} />;
        })}
    </article>
  );
}
