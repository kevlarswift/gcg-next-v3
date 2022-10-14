import { drupal } from "lib/drupal";
import { Layout } from "components/layout";
import VideoBG from "components/blocks/VideoBG";
import Serving from "components/blocks/Serving";
import Life from "components/blocks/Life";
import Benefits from "components/blocks/Benefits";

export default function IndexPage({ menus, global, benefits }) {
  return (
    <Layout menus={menus} global={global}>
      <VideoBG />
      <Serving />
      <Life />
      <Benefits benefits={benefits} />
    </Layout>
  );
}

export async function getStaticProps(context) {

  const benefits = await drupal.getResourceCollectionFromContext("node--benefit", context, { 
    params: { 
      include: "field_icon" 
    } 
  });
  
  return {
    props: {
      menus: {
        main: await drupal.getMenu("main"),
        footer1: await drupal.getMenu("footer"),
        footer2: await drupal.getMenu("footer-menu-2")
      },
      global: await drupal.getResourceCollection("node--global"),
      benefits: benefits
    },
  };
}
