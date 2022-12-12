import { useState } from "react";
import Head from "next/head";
import { drupal } from "/lib/drupal";
import Link from "next/link"
import { Container } from "react-bootstrap";
import { Layout } from "/components/layout";

export default function SearchPage({ menus, global }) {
  const [status, setStatus] = useState()
  const [results, setResults] = useState([])

  async function handleSubmit(event) {
    event.preventDefault()

    setStatus("loading")

    const response = await fetch("/api/search/next", {
      method: "POST",
      body: JSON.stringify({
        params: {
          fields: {
            "node--page": "id,title,subtitle,created,path,field_paragraphs",
          },
          filter: {
            fulltext: event.target.keywords.value,
          },
        },
      }),
    })

    if (!response.ok) {
      return setStatus("error")
    }
    setStatus("success")
    const results = await response.json()
    setResults(results)
  }

  return (
    <>
      <Head>
        <title>Search | United States Coast Guard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Layout menus={menus} global={global}>
        <Container className="content-wrapper">
          <article>
            <form onSubmit={handleSubmit} className="mb-4">
              <div>
                <input
                  type="search"
                  placeholder="Search website..."
                  name="keywords"
                  required
                  className="relative block w-full col-span-5 px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
                />
                <button
                  type="submit"
                  data-cy="btn-submit"
                  className="flex justify-center w-full px-4 py-2 mt-4 text-sm font-medium text-white bg-black border border-transparent rounded-md shadow-sm sm:col-span-2 sm:mt-0 hover:bg-black"
                >
                  {status === "loading" ? "Please wait..." : "Search"}
                </button>
              </div>
            </form>
            {status === "error" ? (
              <div>
                An error occured. Please try again.
              </div>

            ) : null}
            {!results.length ? (
              <p data-cy="search-no-results">
                No results found.
              </p>
            ) : (
              <div>
                <h3 data-cy="search-results">
                  Found {results.length} result(s).
                </h3>
                {results.map((node) => (
                  <div key={node.id} className="pb-4 mb-4 border-b">
                    <article
                      className="grid-cols-3 gap-4 sm:grid"
                      data-cy="search-result"
                    >
                      <div>
                        <h4><Link href={node.path.alias}>{node.title}</Link></h4>
                        {/**<pre>{JSON.stringify(node, null, 2)}</pre>*/}
                        <p>{node.field_subtitle}</p>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            )}
          </article>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      menus: {
        main: await drupal.getMenu("main"),
        footer1: await drupal.getMenu("footer"),
        footer2: await drupal.getMenu("footer-menu-2")
      },
      global: await drupal.getResource("node--global", "132de760-f931-4656-a5a9-9a13455d232f"),
    },
  };
}
