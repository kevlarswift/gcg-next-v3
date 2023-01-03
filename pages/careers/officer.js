import Head from "next/head";
import { drupal } from "/lib/drupal";
import { Container } from "react-bootstrap";
import { Layout } from "/components/layout";
import Banner from "/components/blocks/banner";
import Paragraph from "/components/paragraphs/Paragraph";
import OfficerCareers from "/components/careers/OfficerCareers";
import OfficerCareersMenu from "/components/careers/OfficerCareersMenu";

export default function OfficerCareersPage({ node, officer_careers, menus, global }) {
  let bgImageSrc = null;
  {
    node.field_banner?.image_style_uri?.banner
      ? (bgImageSrc = `${node.field_banner.image_style_uri.banner}`)
      : (bgImageSrc = "/images/backgrounds/waves3.webp");
  }

  return (
    <>
      <Head>
        <title>{node.title} | United States Coast Guard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Layout menus={menus} global={global}>
        <Banner title={node.title} subtitle={node.field_subtitle} bgImage={bgImageSrc} />
        <Container className="content-wrapper">
          {node.field_paragraphs &&
            node.field_paragraphs.map((paragraph) => {
              return <Paragraph content={paragraph} key={paragraph.id} />;
            })
          }
          <OfficerCareers data={officer_careers} />
          <OfficerCareersMenu data={officer_careers} />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps(context) {
  // Fetch page content
  const node = await drupal.getResource("node--special", "9d3967b3-5684-4ae6-bc5c-35ff0784f981", {
    params: {
      include: "field_paragraphs, field_banner",
    },
  });

  // Fetch Officer Careers
  const officer_careers = await drupal.getResourceCollectionFromContext("node--officer_career", context, {
    params: {
      filter: { "status": 1 },
      "fields[node--officer_career]":
        "title,field_subtitle,path",
      sort: "title",
    },
  });

  // Provide Props to Page
  return {
    props: {
      node,
      officer_careers,
      menus: {
        main: await drupal.getMenu("main"),
        footer1: await drupal.getMenu("footer"),
        footer2: await drupal.getMenu("footer-menu-2")
      },
      global: await drupal.getResource("node--global", "132de760-f931-4656-a5a9-9a13455d232f")
    },
    revalidate: 900,
  };
}
