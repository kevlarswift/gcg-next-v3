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
        terms_privacy: true,
        terms_paperwork: true,
        name_first: event.target.name_first.value,
        name_middle: 'X',
        name_last: 'Y',
        name_suffix: 'Jr',
        name_maiden: 'Boogie',
        country: 'US',
        street: '503 W 33rd',
        city: 'Austin',
        state: 'TX',
        zip: '78705',
        county: 'Travis',
        email: event.target.email.value,
        phone_home: '(123) 456-7890',
        media_id: 'ADVR',
        program_of_interest: 'ENL',
        component: 'FT',
        citizenship: 'USNB',
        ssn: '123456789',
        ethnicity: 'true',
        race: 2,
        race_2: 3,
        dob: '2000-01-01',
        gender: '1',
        birth_country: 'US',
        birth_city: 'Austin',
        birth_state: 'TX',
        birth_county: 'Travis',
        marital_status: '4',
        dependents: '3',
        height: '06-00',
        weight: 211,
        hair_color: 'black',
        eye_color: 'brown',
        education_level: 'BADG',
        community_activity_1: 'Tennis',
        community_activity_2: 'Table Tennis',
        gpa: 56,
        degree_type: 'AIS',
        current_education_status: 'IS',
        current_employment_status: 'FT',
        credits: 103,
        years_education: 24,
        drivers_license_number: 'TX2333',
        drivers_license_state: 'TX',
        drivers_license_expiration: '2030-01-01',
        selective_service_number: 'd83494j9',
        recruiter: 'Y',
        recruiter_details: 'Lorem ipsum',
        service: 'Y',
        branch: 'ARMY',
        service_component: 'PT',
        pay_grade: 'e1',
        rate_mos_job: 'AET',
        service_type: 0,
        discharged_separation_date: '2020-01-01',
        time_years: 20,
        time_months: 10,
        time_days: 22,
        discharge_type: 'HD',
        re_code: 'RE-1A',
        anticipated_separation_date: '2023-10-31',
        serving_years: 12,
        serving_months: 9,
        serving_days: 20,
        rejected_military: 'Y',
        rejected_details: 'Lorem Ipsum',
        asvab: 'Y',
        asvab_when: 'Y',
        asvab_score: 80,
        asvab_where: 'Cincinnati',
        asvab_branch: 'AR',
        crime: 'Y',
        crime_description: 'Lorem Ipsum',
        legal: 'Y',
        legal_description: 'Lorem Ipsum',
        drugs: 'Y',
        drugs_description: 'Lorem Ipsum',
        drugs_times: 30,
        drugs_last_date: '1999-01-01',
        tattoos: 'Y',
        tattoos_description: 'Lorem Ipsum',
        overdue: 'Y',
        declared_bankruptcy: 'Y',
        child_support: 'Y',
        child_support_amount: 2250,
        firearms: 'Y',
        beliefs: 'Y',
        afraid: 'Y',
        swimming_confidence: '2',
        boy_scouts: 1,
        girl_scouts: 0,
        sea_scouts: 0,
        police_explorers: 1,
        sea_explorers: 0,
        civil_air_patrol: 1,
        naval_sea_cadet_corps: 0,
        coast_guard_auxiliary: 1,
        rotc_jrotc: 0,
        acknowledgement: 1,
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
                <label htmlFor="name_first">First</label>
                <input type="text" id="name_first" name="name_first" />
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
