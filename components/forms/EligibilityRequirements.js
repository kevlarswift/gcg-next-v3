import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Link from "next/link";
import * as Yup from "yup";

export default function EligibilityRequirements({ programs }) {
  
  const [allItems] = useState(programs);
  const [filteredItems, setFilteredItems] = useState([]);

  const initialValues = {
    officer_programs: [],
  };
  const validationSchema = Yup.object({
    officer_programs: Yup.array().max(3, "Please limit your selection to 3 Officer Programs."),
  });
  const onSubmit = (values) => {
    setFilteredItems(allItems.filter((program) => values.officer_programs.includes(program.id)));
  };

  return (
    <div className="my-4" id="form-officer-program-eligibility-requirements">
      <h5>Select Officer Programs to see the Eligibility Requirements</h5>
      <small>Refer to the <a href="https://media.defense.gov/2021/Aug/18/2002833714/-1/-1/0/CIM_1100_2G.PDF">Coast Guard Recruiting Manual, COMDTINST M1100.2 (series)</a> for more information about eligibility requirements.</small>
      <fieldset className="fieldset" id="formEligibility">
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          {({ errors }) => (
            <Form>
              <div className="eligibility-grid mb-3">
                {allItems.map((program, index) => (
                  <div className="form-check form-check-inline" key={index}>
                    <label htmlFor="officer_programs">{program.title}</label>
                    <Field
                      type="checkbox"
                      className="form-check-input"
                      name="officer_programs"
                      value={program.id}
                      id={program.id}
                      disabled={false}
                      key={index}
                    />
                  </div>
                ))}
              </div>
              <small className="form-text text-danger">
                <ErrorMessage name="officer_programs" />
              </small>
              <div>
                <Button type="submit" disabled={errors.officer_programs}>
                  View Eligibility Requirements
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </fieldset>
      {/** <pre>{JSON.stringify(programs, null, 2)}</pre> */}
      
      {filteredItems.length > 0 ? (
        <div className="my-4" id="eligibility-table">
          <h5>Eligibility Requirements</h5>
          <div className="table-responsive">
            <Table striped bordered hover responsive className="table">
              <thead>
                <tr>
                  <th scope="col" width="15%">
                    
                  </th>
                  {filteredItems.map((program, index) => {
                    return (
                      <th scope="col" width={`85/{filteredItems.length}`} key={index}>
                        {program.title}{" "}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Age</td>
                  {filteredItems.map((program, index) => {
                    return <td key={index}><div dangerouslySetInnerHTML={{ __html: program.field_er_age?.processed }} /></td>;
                  })}
                </tr>
                <tr>
                  <td>Citizenship</td>
                  {filteredItems.map((program, index) => {
                    return <td key={index}><div dangerouslySetInnerHTML={{ __html: program.field_er_citizenship?.processed }} /></td>;
                  })}
                </tr>
                <tr>
                  <td>Dependents</td>
                  {filteredItems.map((program, index) => {
                    return <td key={index}><div dangerouslySetInnerHTML={{ __html: program.field_er_dependents?.processed }} /></td>;
                  })}
                </tr>
                <tr>
                  <td>GPA</td>
                  {filteredItems.map((program, index) => {
                    return <td key={index}><div dangerouslySetInnerHTML={{ __html: program.field_er_gpa?.processed }} /></td>;
                  })}
                </tr>
                <tr>
                  <td>Education</td>
                  {filteredItems.map((program, index) => {
                    return <td key={index}><div dangerouslySetInnerHTML={{ __html: program.field_er_education?.processed }} /></td>;
                  })}
                </tr>
                <tr>
                  <td>Military Service</td>
                  {filteredItems.map((program, index) => {
                    return <td key={index}><div dangerouslySetInnerHTML={{ __html: program.field_er_military?.processed }} /></td>;
                  })}
                </tr>
                <tr>
                  <td>Medical Requirements</td>
                  {filteredItems.map((program, index) => {
                    return <td key={index}><div dangerouslySetInnerHTML={{ __html: program.field_er_medical?.processed }} /></td>;
                  })}
                </tr>
                <tr>
                  <td>Qualifying Test Score</td>
                  {filteredItems.map((program, index) => {
                    return <td key={index}><div dangerouslySetInnerHTML={{ __html: program.field_er_score?.processed }} /></td>;
                  })}
                </tr>
                <tr>
                  <td>Program Specific Requirements</td>
                  {filteredItems.map((program, index) => {
                    return <td key={index}><div dangerouslySetInnerHTML={{ __html: program.field_er_program?.processed }} /></td>;
                  })}
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      ) : null}
    
    </div>
  );
}
