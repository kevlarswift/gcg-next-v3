import Head from "next/head";
import { drupal } from "lib/drupal";
import { Container } from "react-bootstrap";
import { Layout } from "/components/layout";
import Banner from "/components/blocks/banner";
import FindRecruiter from "/components/recruiters/FindRecruiter";

export default function FindRecruiterPage({ recruiters, menus, global }) {
  let bgImageSrc = "/images/backgrounds/waves.webp";
  return (
    <>
      <Head>
        <title>Find a Recruiter | GoCoastGuard.com</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Layout menus={menus} global={global}>
        <Banner title="Find a Recruiter" bgImage={bgImageSrc} short={false} />
        <Container className="container-inner">
          <FindRecruiter nodes={recruiters} />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps(context) {
  
  const recruiters = await drupal.getResourceCollectionFromContext("node--recruiter", context, {
    params: {
      filter: { "status]": 1 },
      sort: "title",
    },
  });
  
  return {
    props: {
      menus: {
        main: await drupal.getMenu("main"),
        footer1: await drupal.getMenu("footer"),
        footer2: await drupal.getMenu("footer-menu-2")
      },
      global: await drupal.getResourceCollection("node--global"),
      recruiters: recruiters
    },
    revalidate: 60,
  };
}
