import axios from 'axios';
import { useState } from "react";
import Head from "next/head";
import { drupal } from "/lib/drupal";
import { Container } from "react-bootstrap";
import { Layout } from "/components/layout";
import Banner from "/components/blocks/banner";
import TestForm from "/components/forms/TestForm"


export default function FormPage({ menus, global }) {
  let bgImageSrc = "/images/backgrounds/Eligibility.webp";

  const handleSubmitName = async (event) => {
    event.preventDefault();
    const res = await fetch(`https://api.agify.io/?name=${event.target.firstname.value}`);
    const result = await res.json();
    alert(`Hi ${result.name} your age is most likely: ${result.age}`);
  };

  
  const [name, setName] = useState("");
  
  const handleChange = (event) => {
    setName({ name: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('https://hcm.direct-access.uscg.mil/PSIGW/HttpListeningConnector?From=OSC&Operation=OSC_LEAD_DATA', '<?xml version="1.0"?><LeadData><InitialContact>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</InitialContact></LeadData>', {
      'Content-Type': 'application/xml',
      'Accept': 'application/xml'
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  return (
    <>
      <Head>
        <title>Form | United States Coast Guard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Layout menus={menus} global={global}>
        <Banner title="Form" bgImage={bgImageSrc} />
        <Container className="content-wrapper">
          <TestForm handleSubmit={handleSubmitName} />
          <form onSubmit={handleSubmit}>
            <label>
              Person Name:
              <input type="text" name="name" onChange={handleChange} />
            </label>
            <button type="submit">Add</button>
          </form>
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