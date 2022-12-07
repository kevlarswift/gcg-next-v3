import { DrupalJsonApiParams } from "drupal-jsonapi-params"
import Head from "next/head";
import { drupal } from "/lib/drupal";
import { Container } from "react-bootstrap";
import { Layout } from "/components/layout";
import Banner from "/components/blocks/banner";
import Paragraph from "/components/paragraphs/Paragraph";
import FindRecruiter from "/components/recruiters/FindRecruiter";

export default function FindRecruiterPage({ node, recruiters, menus, global }) {
  let bgImageSrc = null;
  {
    node.field_banner?.image_style_uri?.banner
      ? (bgImageSrc = `${node.field_banner.image_style_uri.banner}`)
      : (bgImageSrc = "/images/backgrounds/waves3.webp");
  }

  return (
    <>
      <Head>
        <title>{node.title} | GoCoastGuard.com</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Layout menus={menus} global={global}> 
        <Banner title={node.title} subtitle={node.field_subtitle} bgImage={bgImageSrc} short={true} />
        <Container className="container-inner">
          {node.field_paragraphs &&
            node.field_paragraphs.map((paragraph) => {
              return <Paragraph content={paragraph} key={paragraph.id} />;
            })
          }
          <FindRecruiter nodes={recruiters} />
          {/**<pre>{JSON.stringify(recruiters, null, 2)}</pre>*/}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps(context) {

  const node = await drupal.getResource("node--special", "ad391cac-d6f5-4271-a249-2ef827aa8ad6", {
    params: {
      include: "field_paragraphs, field_banner",
    },
  });

  /* BENEFITS BLOCK */
  const recruitersParams = new DrupalJsonApiParams()
  recruitersParams.addFilter("status", "1"),
  recruitersParams.addSort("title", "ASC")
  recruitersParams.addFields("node--recruiter", ["id", "title", "status", "path", "field_address", "field_email", "field_geolocation", "field_phone"]);
  
  const recruiters = await drupal.getResourceCollection("node--recruiter", {
    params: recruitersParams.getQueryObject(),
  });

  // Chore: programmatically retrieve the >50 recruiters
  const recruiters2 = await drupal.getResourceCollection("node--recruiter", {
    params: {
      "filter[status]": "1",
      sort: "title",
      page: {
        offset: 50,
      }
    }
  })

  return {
    props: {
      node,
      recruiters: recruiters.concat(recruiters2),
      menus: {
        main: await drupal.getMenu("main"),
        footer1: await drupal.getMenu("footer"),
        footer2: await drupal.getMenu("footer-menu-2")
      },
      global: await drupal.getResource("node--global", "132de760-f931-4656-a5a9-9a13455d232f"),
    },
    revalidate: 60,
  };
}
