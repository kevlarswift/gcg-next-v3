import * as React from "react";
import { graphql, useStaticQuery, navigate } from "gatsby";
import { Form } from "react-bootstrap";

const OfficerMenu = () => {
  const data = useStaticQuery(graphql`
    query {
      allNodeOfficerProgram(sort: { order: ASC, fields: field_abbreviation }, filter: { status: { eq: true } }) {
        edges {
          node {
            id
            title
            field_abbreviation
            path {
              alias
            }
          }
        }
      }
    }
  `);

  const handleSelect = (event) => {
    navigate(event.target.value);
  };

  return (
    <React.Fragment>
      <Form>
        <Form.Group controlId="formOfficerCareer">
          <Form.Select aria-label="Choose another Officer Career" onChange={handleSelect}>
            <option>Choose another Officer Career</option>
            {data.allNodeOfficerProgram.edges.map((edge, idx) => (
              <option value={edge.node.path.alias} key={idx}>{edge.node.title}</option>
            ))}
          </Form.Select>
        </Form.Group>
      </Form>
    </React.Fragment>
  );
};

export default OfficerMenu;
