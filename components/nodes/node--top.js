import Banner from "/components/blocks/banner";
import Paragraph from "/components/paragraphs/Paragraph";

export function NodeTop({ node, ...props }) {
  
  let styleTop = <div />;
  let styleBottom = <div />;
  if (node.field_paragraphs?.length > 0) {

    const numParagraphs = node.field_paragraphs.length - 1;

    if (node.field_paragraphs[0].type !== 'paragraph--banner') {
      styleTop = <div className="content-wrapper-top" />
    }
    if (node.field_paragraphs[numParagraphs].type !== 'paragraph--banner') {
      styleBottom = <div className="content-wrapper-bottom" />
    }
  }
  
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
      {styleTop}
      {node.field_paragraphs &&
        node.field_paragraphs.map((paragraph) => {
          return <Paragraph content={paragraph} key={paragraph.id} />;
        })}
      {styleBottom}
    </article>
  );
}
