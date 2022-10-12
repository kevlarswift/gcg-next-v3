import React from "react"
import { graphql, useStaticQuery, navigate } from "gatsby"
import { Form } from 'react-bootstrap'

export default function OfficerCareerMenu () {
  const data = useStaticQuery(graphql`
    query  {
      allNodeOfficerCareer (
        sort: { order: ASC, fields: title }
        filter: { status: { eq: true } }
      ) {
        edges {
          node {
            id
            title
            path { alias }
          }
        }
      }
    }
  `)
  const handleSelect = (event) => {
    navigate(event.target.value)
  }
  return (
    <Form>
      <Form.Group controlId="formEnlistedCareer">
        <Form.Select 
          aria-label="Choose another Officer Career"
          onChange={handleSelect}
        >
          <option> - Select another Officer Program - </option>
          { data.allNodeOfficerCareer.edges.map((edge, idx) => (
            <option value={edge.node.path.alias} key={idx}>{edge.node.title}</option>
          ))}
        </Form.Select>
      </Form.Group>
    </Form>
  )
}
