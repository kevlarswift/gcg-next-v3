export function formatDate(input) {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function absoluteUrl(input) {
  return `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${input}`
}
