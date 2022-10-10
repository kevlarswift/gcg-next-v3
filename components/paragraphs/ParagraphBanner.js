import Banner from "/components/blocks/Banner";

export default function ParagraphBanner({ content }) {
  return (
    <Banner 
      title={content.field_title} 
      subtitle={content.field_subtitle}
      bgImage={content.field_banner_bg.image_style_uri.banner}
      bgImageAlt={content.field_banner_bg.resourceIdObjMeta.alt}
      cta={null}
      ctaLink={null}
      ctaText={null}
      short={false} 
    />
  );
}
