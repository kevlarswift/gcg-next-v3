import Head from "next/head";
import { drupal } from "/lib/drupal";
import { Container } from "react-bootstrap";
import { Layout } from "/components/layout";
import Banner from "/components/blocks/banner";
import Paragraph from "/components/paragraphs/Paragraph";

export default function ChatNowPage({ node, menus, global }) {

  return (
    <>
      <Head>
        <title>{node.title} | United States Coast Guard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Layout menus={menus} global={global}>
        <Banner title={node.title} subtitle={node.field_subtitle} bgImage={node.field_banner?.image_style_uri?.banner} />
        <Container className="content-wrapper">
          {node.field_paragraphs &&
            node.field_paragraphs.map((paragraph) => {
              return <Paragraph content={paragraph} key={paragraph.id} />;
            })
          }
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps(context) {
  // Fetch page content
  const node = await drupal.getResource("node--special", "81dbd7a7-10b4-436b-8142-425751349872", {
    params: {
      include: "field_paragraphs, field_banner",
    },
  });

  return {
    props: {
      node,
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