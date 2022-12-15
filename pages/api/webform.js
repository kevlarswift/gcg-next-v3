export default async function handler( request, response ) {
  try {
    if (request.method === "POST") {
      const url = "https://www.stage-cms.gocoastguard.com/webform_rest/submit"
      // Submit to Drupal.
      const result = await fetch(url.toString(), {
        method: "POST",
        body: JSON.stringify({
          webform_id: "prospect-questionnaire",
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
      })

      if (!result.ok) {
        throw new Error()
      }

      response.status(200).end()
    }
  } catch (error) {
    return response.status(400).json(error.message)
  }
}