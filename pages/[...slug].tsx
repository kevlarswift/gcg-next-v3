import * as React from "react"
import { GetStaticPathsResult, GetStaticPropsResult } from "next"
import Head from "next/head"
import { DrupalNode } from "next-drupal"
import { drupal } from "lib/drupal"
import { NodeTop } from "components/node--top"
import { NodeBasicPage } from "components/node--basic-page"
import { NodeRate } from "components/node--rate"
import { NodeRecruiter } from "components/node--recruiter"
import { Layout } from "components/layout"

const RESOURCE_TYPES = ["node--page", "node--top"]

interface NodePageProps {
  resource: DrupalNode
}

export default function NodePage({ resource }: NodePageProps) {
  if (!resource) return null

  return (
    <Layout>
      <Head>
        <title>{resource.title}</title>
        <meta name="description" content="A Next.js site powered by Drupal." />
      </Head>
      {resource.type === "node--top" && <NodeTop node={resource} />}
      {resource.type === "node--page" && <NodeBasicPage node={resource} />}
      {resource.type === "node--rate" && <NodeRate node={resource} rates={null} />}
      {resource.type === "node--recruiter" && <NodeRecruiter node={resource} />}
    </Layout>
  )
}

export async function getStaticPaths(context): Promise<GetStaticPathsResult> {
  return {
    paths: await drupal.getStaticPathsFromContext(RESOURCE_TYPES, context),
    fallback: "blocking",
  }
}

export async function getStaticProps(
  context
): Promise<GetStaticPropsResult<NodePageProps>> {
  const path = await drupal.translatePathFromContext(context)

  if (!path) {
    return {
      notFound: true,
    }
  }

  const type = path.jsonapi.resourceName

  let params = {}
  /*
  if (type === "node--article") {
    params = {
      include: "field_image, uid",
    }
  }
  */
  if (type === "node--page" || type === "node--top" || type === "node--officer_program" || type === "node--officer_career") {
    params = {
      include: "field_banner, field_paragraphs, field_paragraphs.field_banner_bg",
    };
  }

  const resource = await drupal.getResourceFromContext<DrupalNode>(
    path,
    context,
    {
      params,
    }
  )

  // At this point, we know the path exists and it points to a resource.
  // If we receive an error, it means something went wrong on Drupal.
  // We throw an error to tell revalidation to skip this for now.
  // Revalidation can try again on next request.
  if (!resource) {
    throw new Error(`Failed to fetch resource: ${path.jsonapi.individual}`)
  }

  // If we're not in preview mode and the resource is not published,
  // Return page not found.
  if (!context.preview && resource?.status === false) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      resource,
    },
  }
}
