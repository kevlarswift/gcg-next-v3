import Head from "next/head";
import { drupal } from "/lib/drupal";
import { Container } from "react-bootstrap";
import { Layout } from "/components/layout";

export default function WebformPage({ menus, global }) {
  async function handleSubmit(event) {
    event.preventDefault()

    const response = await fetch(`/api/webform`,
      {
        method: "POST",
        body: JSON.stringify({
          terms_privacy: true,
          terms_paperwork: true,
          name_first: 'Ian',
          name_middle: 'Russell',
          name_last: 'Smith',
          name_suffix: '',
          country: 'US',
          street: '503 W 33rd',
          city: 'Austin',
          state: 'TX',
          zip: 78705,
          county: 'Travis',
          email: 'keansmith@gmail.com',
          phone_home: '(999) 999-9999',
          media_id: 'ADVR',
          program_of_interest: 'ENL',
          component: 'FT',
          citizenship: 'USNB',
          ethnicity: 'true',
          race: '5a',
          dob: '2000-01-01',
          gender: 0,
          birth_country: 'US',
          birth_city: 'Wyoming',
          birth_state: 'OH',
          birth_county: 'Hamilton',
          marital_status: 1,
          dependents: '0',
          height: '06-00',
          weight: 200,
          education_level: 'ASDG',
          high_school: 'Wyoming HS',
          current_education_status: 'IS',
          current_employment_status: 'FT',
          years_education: 12,
          recruiter: 'N',
          service: 'N',
          asvab: 'N',
          crime: 'N',
          legal: 'N',
          drugs: 'N',
          tattoos: 'N',
          overdue: 'N',
          declared_bankruptcy: 'N',
          child_support: 'N',
          firearms: 'N',   
          beliefs: 'N',    
          afraid: 'N',
          swimming_confidence: 'Weak',
          acknowledgement: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )

    if (response.ok) {
      // Show success.
      console.log('ok');
    } else {
      console.log('not ok');
    }

    // Handle error.
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
        <p>Implement your form here</p>
        <button type="submit">Submit</button>
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