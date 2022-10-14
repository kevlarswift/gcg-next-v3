import Head from "next/head";
import { drupal } from "lib/drupal";
import { Container } from "react-bootstrap";
import { Layout } from "/components/layout";
import Banner from "/components/blocks/banner";
import Paragraph from "/components/paragraphs/Paragraph";
import EligibilityRequirements from "/components/forms/EligibilityRequirements";
import HeightWeight from "/components/forms/HeightWeight";

export default function EligibilityRequirementsPage({ node, menus, global, programs }) {
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
      <Layout menus={menus} global={global}>
        <Banner title={node.title} subtitle={node.field_subtitle} bgImage={bgImageSrc} />
        <Container className="container-inner">
          <EligibilityRequirements programs={programs} />
          <HeightWeight />
          {node.field_paragraphs &&
            node.field_paragraphs.map((paragraph) => {
              return <Paragraph content={paragraph} key={paragraph.id} />;
            })}

        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps(context) {
  // Fetch page content
  const node = await drupal.getResource("node--special", "40a1619a-753c-4e2d-ae29-ad01ecbf2cc9", {
    params: {
      include: "field_paragraphs, field_banner",
    },
  });

  // Fetch Programs
  const programs = await drupal.getResourceCollectionFromContext("node--officer_program", context, {
    params: {
      "filter[status]": 1,
      "fields[node--officer_program]":
        "title,field_req_age,field_er_age,field_er_citizenship,field_er_dependents,field_er_education,field_er_military,field_er_gpa,field_er_medical,field_er_program,field_er_score",
      sort: "title",
    },
  });

  // Provide Props to Page
  return {
    props: {
      node,
      menus: {
        main: await drupal.getMenu("main"),
        footer1: await drupal.getMenu("footer"),
        footer2: await drupal.getMenu("footer-menu-2")
      },
      global: await drupal.getResourceCollection("node--global"),
      programs
    },
    revalidate: 900,
  };
}