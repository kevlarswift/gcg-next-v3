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
        <Serving title={`<h2>${global.field_serving_title.processed}</h2>`} body={global.field_serving_body.processed} />
        <Life title={global.field_life_title.processed} subtitle={global.field_life_body.processed} />
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
      global: await drupal.getResource("node--global", "8f70fe6f-fab6-4ae3-8b16-1c86822288bd"),
      benefits: benefits,
      /* specials: specials, */
    },
    revalidate: 60,
  };
}
