import Link from "next/link"

export function NodeArticleTeaser({ node, ...props }) {
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
      </div>
      <Link href={node.path.alias} passHref>
        <a className="">
          Read article
        </a>
      </Link>
    </article>
  )
}
