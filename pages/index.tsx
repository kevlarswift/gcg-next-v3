import Head from "next/head";
import { GetStaticPropsResult } from "next";
import { DrupalNode } from "next-drupal";

import { drupal } from "lib/drupal";
import { Layout } from "components/layout";
import VideoBG from "components/blocks/VideoBG";
import Serving from "components/blocks/Serving";
//import Life from "/components/blocks/Life";
import Benefits from "components/blocks/Benefits";

import { NodeArticleTeaser } from "components/node--article--teaser";

interface IndexPageProps {
  nodes: DrupalNode[];
}

export default function IndexPage({ nodes }: IndexPageProps) {
  return (
    <Layout>
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
      <Benefits />
    </Layout>
  );
}

export async function getStaticProps(context): Promise<GetStaticPropsResult<IndexPageProps>> {
  const nodes = await drupal.getResourceCollectionFromContext<DrupalNode[]>("node--article", context, {
    params: {
      "filter[status]": 1,
      "fields[node--article]": "title,path,uid,created",
      include: "uid",
      sort: "-created",
    },
  });

  return {
    props: {
      nodes,
    },
  };
}
