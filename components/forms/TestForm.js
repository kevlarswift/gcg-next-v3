import React from "react";

export default function TestForm({handleSubmit}) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstname">Name</label>
      <input id="firstname" name="firstname" type="text" autocomplete="name"
        required
      />
      <button type="submit">Submit</button>
    </form>
  )
}