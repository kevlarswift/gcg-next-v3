import Image from "next/image"
import Link from "next/link"
import { DrupalNode } from "next-drupal"

import { absoluteUrl, formatDate } from "lib/utils"

interface NodeArticleTeaserProps {
  node: DrupalNode
}

export function NodeArticleTeaser({ node, ...props }: NodeArticleTeaserProps) {
  return (
    <article {...props}>
      <Link href={node.path.alias} passHref>
        <a className="">
          <h2 className="">{node.title}</h2>
        </a>
      </Link>
      <div className="">
        {node.uid?.display_name ? (
          <span>
            Posted by{" "}
            <span className="">{node.uid?.display_name}</span>
          </span>
        ) : null}
        <span> - {formatDate(node.created)}</span>
      </div>
      {node.field_image && (
        <figure className="my-4">
          <Image
            src={absoluteUrl(node.field_image.uri.url)}
            width={768}
            height={480}
            layout="responsive"
            objectFit="cover"
            alt={node.field_image.resourceIdObjMeta.alt}
          />
        </figure>
      )}
      <Link href={node.path.alias} passHref>
        <a className="">
          Read article
        
        </a>
      </Link>
    </article>
  )
}
