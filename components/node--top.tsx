import { DrupalNode } from "next-drupal"

interface NodeTopProps {
  node: DrupalNode
}

export function NodeTop({ node, ...props }: NodeTopProps) {
  return (
    <article {...props}>
      <h1 className="">{node.title}</h1>
      <h2>{node.field_subtitle}</h2>
      {node.body?.processed && (
        <div
          dangerouslySetInnerHTML={{ __html: node.body?.processed }}
          className=""
        />
      )}
    </article>
  )
}
