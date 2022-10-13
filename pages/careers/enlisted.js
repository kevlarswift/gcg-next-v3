import Head from "next/head";
import { drupal } from "lib/drupal";
import { getResource, getResourceCollectionFromContext, getMenu } from "next-drupal";
import { Container } from "react-bootstrap";
import { Layout } from "/components/layout";
import Banner from "/components/blocks/banner";
import Paragraph from "/components/paragraphs/Paragraph";
import EnlistedRatings from "/components/careers/EnlistedRatings";
import EnlistedRatingsMenu from "/components/careers/EnlistedRatingsMenu";

export default function EnlistedCareersPage({ node, nodes, menus }) {
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
      </Head>
      <Layout menus={menus}>
        <Banner title="Enlisted" subtitle="Find a career that fits you." bgImage={bgImageSrc} />
        <Container className="container-inner">
          {node.field_paragraphs &&
            node.field_paragraphs.map((paragraph) => {
              return <Paragraph content={paragraph} key={paragraph.id} />;
            })}
          <EnlistedRatings data={nodes} />
          <EnlistedRatingsMenu data={nodes} />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps(context) {
  // Fetch page content
  const node = await getResource("node--page", "7908e1d6-b408-4a39-9883-a97566c758ea", {
    params: {
      include: "field_paragraphs, field_paragraph_cta, field_banner",
    },
  });

  // Fetch Enlisted Rates
  const nodes = await getResourceCollectionFromContext("node--rate", context, {
    params: {
      "filter[status]": 1,
      "fields[node--rate]":
        "title,field_subtitle,field_rate_abbr,field_rate_cat,field_rate_category,field_banner,field_image_card,field_rate_is_active,field_rate_is_reserve,path",
      include: "field_banner, field_image_card",
      sort: "title",
    },
  });

  // Provide Props to Page
  return {
    props: {
      node,
      nodes,
      menus: {
        footer: await drupal.getMenu("footer"),
      }
    },
    revalidate: 900,
  };
}
