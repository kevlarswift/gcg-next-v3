import { Container } from "react-bootstrap";
import Banner from "/components/blocks/banner";

export function NodeOfficerProgram({ node }) {
  return (
    <>
      <Banner 
        title={node.title} 
        subtitle={node.field_subtitle} 
        bgImage={node.field_banner?.image_style_uri?.banner} 
        bgImageAlt={node.field_banner?.resourceIdObjMeta?.alt}
      />
      <article>
        <Container className="container-inner">
          
        </Container>
      </article>
    </>
  );
}
