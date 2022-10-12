import Banner from "/components/blocks/banner";

export default function ParagraphBanner({ content }) {
  return (
    <>
      <Banner 
        title={content.field_title} 
        subtitle={content.field_subtitle}
        bgImage={content.field_banner_bg.image_style_uri.banner}
        bgImageAlt={content.field_banner_bg.resourceIdObjMeta.alt}
        ctaLink={content.field_cta_link?.uri}
        ctaText={content.field_cta_link?.title}
        short={false} 
      />
    </>
  );
}
