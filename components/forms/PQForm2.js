import React from "react";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import { Button, Row, Col } from "react-bootstrap";
import MaskedInput from "react-input-mask";
import TextError from "./components/TextError";
import TextInput from "./components/TextInput";
import Select from "./components/Select";
import Autocomplete from "./components/Autocomplete"
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import majors from '/data/majors';
const users = [
  { id: 1, user: "ann" },
  { id: 2, user: "rudi" },
  { id: 3, user: "rudolph" },
  { id: 3, user: "3meterstoolong" }
];

export default function PQForm2({ initialValues, validationSchema, formOptions, updateData, moveStep }) {
  const onSubmit = (values) => {
    updateData(values);
    moveStep(2);
  };
  const stepBack = (values) => {
    updateData(values);
    moveStep(0);
  };
  return (
    <div>
      <h3>Biographical Details</h3>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ values, touched, errors, handleChange, handleBlur }) => (
          <Form>
            <fieldset className="fieldset">
              <legend>Citizenship</legend>
              <Select name="citizenship" label="Citizenship" options={formOptions.citizenships} required={true} />
              {values.citizenship === "LWPR" ? (
                <TextInput
                  type="text"
                  name="registration_number"
                  label="Registration Number"
                  instructions="Enter your Registration Number if you are a Lawful Permanent Resident"
                />
              ) : null}
              <Row className="form-group mb-3">
                <label className="col-form-label col-sm-3" htmlFor="ssn">
                  Social Security Number
                </label>
                <Col sm={9}>
                  <Field
                    name="ssn"
                    type="text"
                    render={({ field }) => (
                      <MaskedInput
                        {...field}
                        mask="999-99-9999"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.phone_home && touched.phone_home ? "form-control error" : "form-control"}
                      />
                    )}
                    aria-required="true"
                  />
                  <ErrorMessage component={TextError} name="ssn" />
                </Col>
              </Row>
            </fieldset>

            <fieldset className="fieldset">
              <legend>Ethnicity/Race</legend>
              <Select name="ethnicity" label="Ethnicity" options={formOptions.ethnicities} required={true} />
              <Select name="race" label="Race" options={formOptions.races} required={true} />
              <Select name="race_2" label="Race #2" options={formOptions.races} instructions="Select if applicable" />
            </fieldset>

            <fieldset className="fieldset">
              <legend>Birth Info</legend>
              <TextInput type="date" name="dob" label="Date of Birth" required={true} />
              <Select name="gender" label="Gender" options={formOptions.genders} required={true} />
              <Select name="birth_country" label="Birth Country" options={formOptions.countries} required={true} />
              {values.birth_country === "US" ? (
                <React.Fragment>
                  <TextInput type="text" name="birth_city" label="Birth City" />
                  <Select name="birth_state" label="Birth State" options={formOptions.states} />
                  <TextInput type="text" name="birth_county" label="Birth County" />
                </React.Fragment>
              ) : null}
            </fieldset>

            <fieldset className="fieldset">
              <legend>Additional Details</legend>
              <Select
                name="marital_status"
                label="Marital Status"
                options={formOptions.marital_statuses}
                required={true}
              />
              <Select
                name="dependents"
                label="Dependents"
                options={formOptions.dependents}
                instructions="Number of children legally dependant on you for support."
                required={true}
              />
              <Select
                name="height"
                label="Height"
                options={formOptions.heights}
                instructions="Number of children legally dependant on you for support."
                required={true}
              />
              <Row className="form-group mb-3 required">
                <label className="col-form-label col-sm-3" htmlFor="weight">
                  Weight
                </label>
                <Col sm={9}>
                  <div className="input-group">
                    <Field type="number" className="form-control" name="weight" />
                    <div className="input-group-append">
                      <span className="input-group-text" id="basic-addon1">
                        lbs
                      </span>
                    </div>
                  </div>
                  <small className="form-text text-muted">
                    If you weigh less than 75 lbs, enter 75 lbs.
                    <br />
                    If you weigh more than 500 lbs, enter 500 lbs.
                  </small>
                  <ErrorMessage component={TextError} name="weight" />
                </Col>
              </Row>
              <Select name="hair_color" label="Hair Color" options={formOptions.hair_colors} />
              <Select name="eye_color" label="Eye Color" options={formOptions.eye_colors} />
            </fieldset>

            <fieldset className="fieldset">
              <legend>Education</legend>
              <Select name="education_level" label="Education Level" options={formOptions.education_levels} required={true} />
              <TextInput type="text" name="high_school" label="High School" instructions="Last attended" />
              <TextInput type="text" name="community_activity_1" label="Community Activity #1" instructions="Clubs, sports, or organizations in which you were involved." />
              <TextInput type="text" name="community_activity_2" label="Community Activity #2" />
              <Select name="degree_type" label="Degree Type" options={formOptions.degree_types} instructions="If applicable (earned or in progress), select the highest" />
              {/**<TextInput type="text" name="major" label="Major" />*/}
              <Autocomplete name="major" label="Major" labelKey="major" options={majors} required={false} />
              <TextInput type="number" name="gpa" label="GPA" required={true} instructions="Enter your GPA on a 0-99 scale." />
              <Select name="current_education_status" label="Current Education Status" options={formOptions.current_education_statuses} required={true} />
              <Select name="current_employment_status" label="Current Employment Status" options={formOptions.current_employment_statuses} required={true} />
              <TextInput type="number" name="credits" label="Number of College Credits" />
              <TextInput type="number" name="years_education" label="Total Years Education" instructions="including high school" required={true} />
            </fieldset>

            <fieldset className="fieldset">
              <legend>Driver&apos;s License</legend>
              <TextInput type="text" name="drivers_license_number" label="Driver's License Number" />
              <Select name="drivers_license_state" label="Driver's License State" options={formOptions.states} />
              <TextInput type="date" name="drivers_license_expiration" label="Driver's License Expiration" required={true} />
              <Row className="form-group mb-3">
                <label className="col-form-label col-sm-3" htmlFor="selective_service_number">
                  Selective Service Number
                </label>
                <Col sm={9}>
                  <Field type="text" className="form-control" name="selective_service_number" />
                  <small className="form-text text-muted">
                    (males ages 18-26. To obtain a number, go to&nbsp;
                    <a href="https://www.sss.gov/">www.sss.gov</a>)
                  </small>
                  <ErrorMessage component={TextError} name="selective_service_number" />
                </Col>
              </Row>
            </fieldset>

            <div className="form-actions">
              <Button type="button" variant="secondary" onClick={() => stepBack(values)}>
                Previous
              </Button>
              <Button type="submit">Next</Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

/*
education_fieldset:
'#type': fieldset
'#title': Education
high_school:
  '#type': entity_autocomplete
  '#title': 'High School'
  '#description': '<p>Last attended</p>'
  '#description_display': after
  '#format': label
  '#target_type': taxonomy_term
  '#selection_handler': 'default:taxonomy_term'
  '#selection_settings':
    target_bundles:
      nces: nces
    auto_create: true
    auto_create_bundle: nces
  '#required': true
college:
  '#type': entity_autocomplete
  '#title': College
  '#description': '<p>Current/last attended</p>'
  '#description_display': after
  '#format': label
  '#target_type': taxonomy_term
  '#selection_handler': 'default:taxonomy_term'
  '#selection_settings':
    target_bundles:
      colleges: colleges
    sort:
      field: name
      direction: ASC
    auto_create: true
    auto_create_bundle: colleges
major:
  '#type': entity_autocomplete
  '#title': Major
  '#description': 'If applicable.'
  '#description_display': after
  '#format': label
  '#target_type': taxonomy_term
  '#selection_handler': 'default:taxonomy_term'
  '#selection_settings':
    target_bundles:
      major: major
    sort:
      field: name
      direction: ASC
    auto_create: true
    auto_create_bundle: major
  */
