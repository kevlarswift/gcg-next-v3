import * as React from "react"
import Head from "next/head"
import { drupal } from "lib/drupal"
import { NodeTop } from "components/node--top"
import { NodeBasicPage } from "components/node--basic-page"
import { NodeRate } from "components/node--rate"
import { NodeRecruiter } from "components/node--recruiter"
import { NodeOfficerCareer } from "components/node--officer-career"
import { Layout } from "components/layout"

const RESOURCE_TYPES = [ "node--global", "node--top", "node--page", "node--rate", "node--recruiter", "node--officer_career"]

export default function NodePage({ resource, menus, global }) {
  if (!resource) return null

  return (
    <Layout menus={menus} global={global}>
      <Head>
        <title>{resource.title}</title>
        <meta name="description" content="A Next.js site powered by Drupal." />
      </Head>
      {resource.type === "node--top" && <NodeTop node={resource} />}
      {resource.type === "node--page" && <NodeBasicPage node={resource} />}
      {resource.type === "node--rate" && <NodeRate node={resource} rates={null} />}
      {resource.type === "node--recruiter" && <NodeRecruiter node={resource} />}
      {resource.type === "node--officer_career" && <NodeOfficerCareer node={resource} />}
    </Layout>
  )
}

export async function getStaticPaths(context) {
  return {
    paths: await drupal.getStaticPathsFromContext(RESOURCE_TYPES, context),
    fallback: "blocking",
  }
}

export async function getStaticProps(context) {
  const path = await drupal.translatePathFromContext(context)

  if (!path) {
    return {
      notFound: true,
    }
  }

  const type = path.jsonapi.resourceName

  let params = {}
  
  if (type === "node--page" || type === "node--top" || type === "node--officer_program" || type === "node--officer_career") {
    params = {
      include: "field_banner, field_paragraphs, field_paragraphs.field_banner_bg",
    };
  }

  const resource = await drupal.getResourceFromContext(
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
      menus: {
        main: await drupal.getMenu("main"),
        footer1: await drupal.getMenu("footer"),
        footer2: await drupal.getMenu("footer-menu-2"),
      },
      global: await drupal.getResourceCollection("node--global"),
    },
  }
}
