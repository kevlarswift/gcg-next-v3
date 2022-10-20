import Head from "next/head";
import { drupal } from "lib/drupal";
import { Container } from "react-bootstrap";
import { Layout } from "/components/layout";
import Banner from "/components/blocks/banner";
import Paragraph from "/components/paragraphs/Paragraph";
import EnlistedRatings from "/components/careers/EnlistedRatings";
import EnlistedRatingsMenu from "/components/careers/EnlistedRatingsMenu";

export default function EnlistedCareersPage({ node, rates, menus, global }) {
  let bgImageSrc = null;
  {
    node.field_banner?.image_style_uri?.banner
      ? (bgImageSrc = `${node.field_banner.image_style_uri.banner}`)
      : (bgImageSrc = "/images/backgrounds/waves.webp");
  }

  return (
    <>
      <Head>
        <title>{node.title} | United States Coast Guard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Layout menus={menus} global={global}>
        <Banner title={node.title} subtitle={node.field_subtitle} bgImage={bgImageSrc} />
        <Container className="container-inner">
          {node.field_paragraphs &&
            node.field_paragraphs.map((paragraph) => {
              return <Paragraph content={paragraph} key={paragraph.id} />;
            })
          }
          <EnlistedRatings data={rates} />
          <EnlistedRatingsMenu data={rates} />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps(context) {
  // Fetch page content
  const node = await drupal.getResource("node--special", "4b47ef91-d57b-4806-98c5-0eb9b1541518", {
    params: {
      include: "field_paragraphs, field_banner",
    },
  });

  // Fetch Enlisted Rates
  const rates = await drupal.getResourceCollectionFromContext("node--rate", context, {
    params: {
      filter: { "status": 1 },
      "fields[node--rate]":
        "title,field_subtitle,field_rate_abbr,field_rate_cat,field_rate_category,field_image_card,field_rate_is_active,field_rate_is_reserve,path",
      include: "field_image_card",
      sort: "title",
    },
  });

  // Provide Props to Page
  return {
    props: {
      node,
      rates,
      menus: {
        main: await drupal.getMenu("main"),
        footer1: await drupal.getMenu("footer"),
        footer2: await drupal.getMenu("footer-menu-2")
      },
      global: await drupal.getResource("node--global", "8f70fe6f-fab6-4ae3-8b16-1c86822288bd")
    },
    revalidate: 900,
  };
}
