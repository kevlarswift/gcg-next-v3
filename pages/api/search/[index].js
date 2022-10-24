import { getSearchIndex } from "next-drupal"

export default async function handler(
  request, response
) {
  try {
    const body = JSON.parse(request.body)

    const { index } = request.query

    const results = await getSearchIndex(index, body)

    response.json(results)
  } catch (error) {
    return response.status(400).json(error.message)
  }
}