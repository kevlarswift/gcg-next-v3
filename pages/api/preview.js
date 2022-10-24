import { drupal } from "lib/drupal"

export default async function handler(
  request, response
) {
  return await drupal.preview(request, response)
}
