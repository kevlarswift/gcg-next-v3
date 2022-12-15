export default function TestPage() {
  async function handleSubmit(event) {
    event.preventDefault()

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/webform_rest/submit`,
      {
        method: "POST",
        body: JSON.stringify({
          webform_id: "test",
          name: event.target.name.value,
          email: event.target.email.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )

    if (response.ok) {
      console.log('ok')
    }

    // Handle error.
    console.log(response)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Implement your form here</p>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}