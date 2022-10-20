import { drupal } from "lib/drupal";
import Head from "next/head";
import { Layout } from "components/layout";
import VideoBG from "components/blocks/VideoBG";
import Serving from "components/blocks/Serving";
import Life from "components/blocks/Life";
import Benefits from "components/blocks/Benefits";

export default function IndexPage({ menus, global, benefits/*, specials */ }) {
  
  return (
    <>
      <Head>
        <title>Home Page | United States Coast Guard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Layout menus={menus} global={global}>
        {/**<pre>{JSON.stringify(specials, null, 2)}</pre>*/}
        <VideoBG />
        <Serving />
        <Life />
        <Benefits benefits={benefits} />
      </Layout>
    </>
  );
}

export async function getStaticProps(context) {

  const benefits = await drupal.getResourceCollection("node--benefit", {
    params: {
      include: "field_icon"
    }
  });
  
  /* 
  const specials = await drupal.getResourceCollection("node--special", {
    params: {
      filter: { "status": 1 },
      "fields[node--special]":
        "title,id",
      sort: "title",
    }
  });
  */

  return {
    props: {
      menus: {
        main: await drupal.getMenu("main"),
        footer1: await drupal.getMenu("footer"),
        footer2: await drupal.getMenu("footer-menu-2")
      },
      global: await drupal.getResourceCollection("node--global"),
      benefits: benefits,
      /* specials: specials, */
    },
    revalidate: 60,
  };
}
