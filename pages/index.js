import { drupal } from "lib/drupal";
import Head from "next/head";
import { Layout } from "components/layout";
import VideoBG from "components/blocks/VideoBG";
import Serving from "components/blocks/Serving";
import Life from "components/blocks/Life";
import Benefits from "components/blocks/Benefits";

export default function IndexPage({ menus, global, benefits, youtube/*, specials */ }) {
  
  return (
    <>
      <Head>
        <title>Home Page | United States Coast Guard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Layout menus={menus} global={global}>
        {/**<pre>{JSON.stringify(youtube, null, 2)}</pre>*/}
        <VideoBG />
        <Serving title={`<h2>${global.field_serving_title.processed}</h2>`} body={global.field_serving_body.processed} />
        <Life youtube={youtube} />
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

  const youtube = await drupal.getResource("block_content--youtube","d39486c6-e22e-4b96-9604-240fa2ef806e", {
    params: {
      include: "field_youtube_videos"
    }
  })
  
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
      global: await drupal.getResource("node--global", "132de760-f931-4656-a5a9-9a13455d232f"),
      benefits: benefits,
      youtube: youtube,
      /* specials: specials, */
    },
    revalidate: 60,
  };
}
