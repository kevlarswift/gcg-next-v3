import { DrupalNode } from "next-drupal"
import { Container } from "react-bootstrap";
import Banner from "components/blocks/banner";
import Paragraph from "components/paragraphs/Paragraph";

interface NodeBasicPageProps {
  node: DrupalNode
}

export function NodeBasicPage({ node, ...props }: NodeBasicPageProps) {
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
        cta={null}
        ctaLink={null}
        ctaText={null}
        short={false}
      />
      <Container className="container-inner">
        <pre>{JSON.stringify(node, null, 2)}</pre>
        {node.field_paragraphs &&
          node.field_paragraphs.map((paragraph) => {
            return <Paragraph content={paragraph} />;
          })
        }
      </Container>
    </article>
  )
}
