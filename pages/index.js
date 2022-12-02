import { DrupalJsonApiParams } from "drupal-jsonapi-params"
import { drupal } from "/lib/drupal";
import Head from "next/head";
import { Layout } from "/components/layout";
import VideoBG from "/components/blocks/VideoBG";
import Serving from "/components/blocks/Serving";
import Life from "/components/blocks/Life";
import Benefits from "/components/blocks/Benefits";

export default function IndexPage({ menus, global, benefits, youtube, serving }) {
  
  return (
    <>
      <Head>
        <title>Home Page | United States Coast Guard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Layout menus={menus} global={global}>
        {/**<pre>{JSON.stringify(serving, null, 2)}</pre>*/}
        <VideoBG />
        <Serving serving={serving} />
        <Life youtube={youtube} />
        <Benefits benefits={benefits} />
      </Layout>
    </>
  );
}

export async function getStaticProps(context) {

  /* BENEFITS BLOCK */
  const benefitsParams = new DrupalJsonApiParams()
  benefitsParams.addFields("node--benefit", ["title", "id", "field_icon", "field_icon_alt"]);
  benefitsParams.addInclude("field_icon");
  
  const benefits = await drupal.getResourceCollection("node--benefit", {
    params: benefitsParams.getQueryObject()
  });

  /* YOUTUBE BLOCK */
  const youtubeParams = new DrupalJsonApiParams()
  youtubeParams.addFields("paragraph--global_youtube", ["field_title", "id", "field_youtube_video"]);
  youtubeParams.addInclude("field_youtube_videos");
  
  const youtube = await drupal.getResource("block_content--youtube", "d39486c6-e22e-4b96-9604-240fa2ef806e", {
    params: youtubeParams.getQueryObject()
  });

  /* SERVING BLOCK */
  const servingParams = new DrupalJsonApiParams()
  servingParams.addFields("paragraph--serving_card", ["id", "field_serving_link", "field_serving_image"]);
  servingParams.addInclude("field_serving_links, field_serving_links.field_serving_image");
  
  const serving = await drupal.getResource("block_content--serving", "9bc8fbd8-fafc-49b7-9ceb-af7d6ad817cf", {
    params: servingParams.getQueryObject()
  })
  

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
      serving: serving,
    },
    revalidate: 60,
  };
}
