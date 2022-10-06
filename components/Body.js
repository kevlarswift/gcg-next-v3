import { domToReact } from "html-react-parser";
import parse from "html-react-parser";
import Link from "next/link";

const options = {
  replace: (domNode) => {
    if (domNode.name === "a") {
      const { href, class: className } = domNode.attribs;

      return (
        <Link href={href} passHref>
          <a className={className}>{domToReact(domNode.children)}</a>
        </Link>
      );
    }
  },
};

export default function Body({ value }) {
  return <>{parse(value, options)}</>;
}
