import { drupal } from "lib/drupal";
import { Layout } from "components/layout";
import VideoBG from "components/blocks/VideoBG";
import Serving from "components/blocks/Serving";
import Life from "components/blocks/Life";
import Benefits from "components/blocks/Benefits";

export default function IndexPage({ menus, global, benefits }) {
  return (
    <Layout menus={menus} global={global}>
      {/**
      <div>
        <h1 className="">Latest Articles.</h1>
        {nodes?.length ? (
          nodes.map((node) => (
            <div key={node.id}>
              <NodeArticleTeaser node={node} />
              <hr className="" />
            </div>
          ))
        ) : (
          <p className="">No nodes found</p>
        )}
      </div>
       */}
      <VideoBG />
      <Serving />
      <Life />
      <Benefits benefits={benefits} />
    </Layout>
  );
}

export async function getStaticProps(context) {
  /*
  const nodes = await drupal.getResourceCollectionFromContext("node--article", context, {
    params: {
      "filter[status]": 1,
      "fields[node--article]": "title,path,uid,created",
      include: "uid",
      sort: "-created",
    },
  });
*/
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
