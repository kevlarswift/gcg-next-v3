import Head from "next/head";
import { drupal } from "/lib/drupal";
import { Container } from "react-bootstrap";
import { Layout } from "/components/layout";

export default function TestPage({ menus, global }) {
  async function handleSubmit(event) {
    event.preventDefault()
    
    const response = await fetch(`/api/test`, {
      method: "POST",
      body: JSON.stringify({
        name: event.target.name.value,
        email: event.target.email.value,
      }),
    })

    if (response.ok) {
      console.log("ok")
    }

    // Handle error.
    console.log(response)
  }

  return (
    <>
      <Head>
        <title>Test Form | GoCoastGuard.com</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Layout menus={menus} global={global}>
        <Container>
          <div>
          <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
            </div>
            <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
            </div>
            <div>
            <button type="submit">Submit</button>
            </div>
          </form>
          </div>
        </Container>
      </Layout>
    </>
  );
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
    revalidate: 60,
  };
}
