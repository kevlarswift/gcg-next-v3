import Head from "next/head";
import { drupal } from "/lib/drupal";
import { Container } from "react-bootstrap";
import { Layout } from "/components/layout";
import Banner from "/components/blocks/banner";
import TestForm from "/components/forms/TestForm"

export default function FormPage({ menus, global }) {
  let bgImageSrc = "/images/backgrounds/Eligibility.webp";
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch(`https://api.agify.io/?name=${event.target.firstname.value}`);
    const result = await res.json();
    alert(`Hi ${result.name} your age is most likely: ${result.age}`);
  };

  return (
    <>
      <Head>
        <title>Form | United States Coast Guard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Layout menus={menus} global={global}>
        <Banner title="Form" bgImage={bgImageSrc} />
        <Container className="content-wrapper">
          <TestForm handleSubmit={handleSubmit} />
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