import { drupal } from "/lib/drupal"

export default async function handler( request, response ) { 
  try {   
    if (request.method === "POST") {
      const body = JSON.parse(request.body)
      const url = drupal.buildUrl("/webform_rest/submit")
      // Submit to Drupal.
      const result = await drupal.fetch(url.toString(), {
        method: "POST",
        body: JSON.stringify({
          webform_id: "test",
          ...body
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
