import React from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import { Button, Row, Col } from "react-bootstrap";
import TextInput from "./components/TextInput";
import TextArea from "./components/TextArea";
import TextError from "./components/TextArea";
import Select from "./components/Select";

export default function PQForm4({ initialValues, validationSchema, formOptions, updateData, moveStep }) {
  const onSubmit = (values) => {
    updateData(values);
    moveStep(4);
  };
  const stepBack = (values) => {
    updateData(values);
    moveStep(2);
  };
  return (
    <div>
      <h3>Additional Background Information</h3>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ values, errors }) => (
          <Form>
            <fieldset className="fieldset">
              <legend>Crime</legend>
              <Select
                name="crime"
                required={true}
                label="Have you ever been arrested, charged, or convicted of a crime (whether as a juvenile or an adult),
              including cases which are expunged or pending?"
                options={formOptions.yes_no_unsure}
              />
              {values.crime === "Y" ? (
                <TextArea name="crime_description" label="If yes, please briefly explain. Include approximate dates:" />
              ) : null}
            </fieldset>

            <fieldset className="fieldset">
              <legend>Moving Violations</legend>
              <p>
                Have you had any tickets in the last 5 years, including parking, traffic violations, sticker/
                registration violations, DUI/DWI, etc?
              </p>
              <FieldArray
                name="violations"
                render={(arrayHelpers) => (
                  <div>
                    {values.violations && values.violations.length > 0 ? (
                      values.violations.map((violation, index) => (
                        <Row className="form-group mb-3" key={index}>
                          <Col sm={3}>
                            <label htmlFor={`violations[${index}].date`}>Date (Approximate)</label>
                            <Field name={`violations[${index}].date`} className="form-control" />
                          </Col>
                          <Col sm={7}>
                            <label htmlFor={`violations[${index}].type`}>Type</label>
                            <Field name={`violations[${index}].type`} className="form-control" />
                          </Col>
                          <Col sm={2}>
                            <div className="input-group">
                              <span className="input-group-btn">
                                <Button
                                  type="button"
                                  className="btn btn-default btn-number mr-1"
                                  onClick={() => arrayHelpers.remove(index)}>
                                  -
                                </Button>
                                <Button
                                  type="button"
                                  className="btn btn-default btn-number"
                                  onClick={() => arrayHelpers.insert(index, "")}>
                                  +
                                </Button>
                              </span>
                            </div>
                          </Col>
                        </Row>
                      ))
                    ) : (
                      <button type="button" onClick={() => arrayHelpers.push("")}>
                        Add a Violation
                      </button>
                    )}
                  </div>
                )}
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend>Legal</legend>
              <Select
                name="legal"
                required={true}
                label="Do you have any legal action pending, including court cases, lawsuits, child support or custody
                adjudications, etc?"
                options={formOptions.yes_no_unsure}
              />
              {values.legal === "Y" ? <TextArea name="legal_description" label="If yes, please explain." /> : null}
            </fieldset>

            <fieldset className="fieldset">
              <Select
                name="drugs"
                required={true}
                label="Have you ever used, possessed, or experimented with illegal drugs?"
                options={formOptions.yes_no_unsure}
              />
              {values.drugs === "Y" ? (
                <React.Fragment>
                  <TextArea name="drugs_description" label="If yes, please list which substances." />
                  <TextInput type="number" name="drugs_times" label="How many times?" />
                  <TextInput type="date" name="drugs_last_date" label="Approximate Date Last Used?" />
                </React.Fragment>
              ) : null}
            </fieldset>

            <fieldset className="fieldset">
              <Select
                name="tattoos"
                required={true}
                label="Do you have any Tattoos, Piercings, Gages, Brandings or Mutilations?"
                options={formOptions.yes_no_unsure}
              />
              {values.tattoos === "Y" ? (
                <TextArea
                  name="tattoos_description"
                  label="If yes, please describe (include size, content, and location)"
                />
              ) : null}
            </fieldset>

            <fieldset className="fieldset">
              <legend>Finances</legend>
              <p>Have you had any of the following?</p>
              <Select
                name="overdue"
                required={true}
                label="Overdue/late payments or payments in collection (ex: phone, medical, etc)?"
                options={formOptions.yes_no_unsure}
              />
              <Select
                name="declared_bankruptcy"
                required={true}
                label="Declared Bankruptcy?"
                options={formOptions.yes_no_unsure}
              />
              <Select
                name="child_support"
                required={true}
                label="Do you pay child support or alimony?"
                options={formOptions.yes_no_unsure}
              />
              {values.child_support === "Y" ? (
                <TextInput type="number" name="child_support_amount" label="How much per month?" />
              ) : null}
            </fieldset>

            <fieldset className="fieldset">
              <legend>List all Debts</legend>
              <p>
                Include credit cards, car payment, mortgage, student loans, cell phone, etc. List by company. Include
                what the debt is for, total owed, &amp; monthly payment.
              </p>
              <FieldArray
                name="debts"
                render={(arrayHelpers) => (
                  <div>
                    {values.debts && values.debts.length > 0 ? (
                      values.debts.map((violation, index) => (
                        <Row className="form-group mb-3" key={index}>
                          <Col sm={2}>
                            <label htmlFor={`debts[${index}].type`}>Company Owed</label>
                            <Field name={`debts[${index}].company`} className="form-control" />
                          </Col>
                          <Col sm={4}>
                            <label htmlFor={`debts[${index}].description`}>Description of Debt</label>
                            <Field name={`debts[${index}].description`} className="form-control" />
                          </Col>
                          <Col sm={2}>
                            <label htmlFor={`debts[${index}].debt_total`}>Total Owed</label>
                            <Field name={`debts[${index}].debt_total`} className="form-control" />
                          </Col>
                          <Col sm={2}>
                            <label htmlFor={`debts[${index}].debt_monthly`}>Monthly Payment</label>
                            <Field name={`debts[${index}].debt_monthly`} className="form-control" />
                          </Col>
                          <Col sm={2}>
                            <div className="input-group">
                              <span className="input-group-btn">
                                <Button
                                  type="button"
                                  className="btn btn-default btn-number mr-1"
                                  onClick={() => arrayHelpers.remove(index)}>
                                  -
                                </Button>
                                <Button
                                  type="button"
                                  className="btn btn-default btn-number"
                                  onClick={() => arrayHelpers.insert(index, "")}>
                                  +
                                </Button>
                              </span>
                            </div>
                          </Col>
                        </Row>
                      ))
                    ) : (
                      <button type="button" onClick={() => arrayHelpers.push("")}>
                        Add a Debt
                      </button>
                    )}
                  </div>
                )}
              />
            </fieldset>
            <fieldset className="fieldset">
              <Select
                name="firearms"
                required={true}
                label="Do you object to carrying firearms/weapons to perform Coast Guard duties?"
                options={formOptions.yes_no_unsure}
              />
              <Select
                name="beliefs"
                required={true}
                label="Do you have any religious or other beliefs prevent you from being available for duty 24/7?"
                options={formOptions.yes_no_unsure}
              />
              <Select
                name="afraid"
                required={true}
                label="Are you afraid of the water?"
                options={formOptions.yes_no_unsure}
              />
              <Select
                name="swimming_confidence"
                required={true}
                label="Rate your swimming confidence"
                options={formOptions.swimming_confidences}
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="mb-3">Have you participated in any of the following activities?</legend>
              <Row className="mb-3">
                <Col sm={4}>
                  <div className="form-check form-check-inline">
                    <Field type="checkbox" className="form-check-input" name="boy_scouts" checked={values.boy_scouts} />
                    <label htmlFor="boy_scouts" className="form-check-label">
                      Boy Scouts
                    </label>
                  </div>
                </Col>
                <Col sm={4}>
                  <div className="form-check form-check-inline">
                    <Field
                      type="checkbox"
                      className="form-check-input"
                      name="girl_scouts"
                      checked={values.girl_scouts}
                    />
                    <label htmlFor="girl_scouts" className="form-check-label">
                      Girl Scouts
                    </label>
                  </div>
                </Col>
                <Col sm={4}>
                  <div className="form-check form-check-inline">
                    <Field type="checkbox" className="form-check-input" name="sea_scouts" checked={values.sea_scouts} />
                    <label htmlFor="sea_scouts" className="form-check-label">
                      Sea Scouts
                    </label>
                  </div>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col sm={4}>
                  <div className="form-check form-check-inline">
                    <Field
                      type="checkbox"
                      className="form-check-input"
                      name="police_explorers"
                      checked={values.police_explorers}
                    />
                    <label htmlFor="police_explorers" className="form-check-label">
                      Police Explorers
                    </label>
                  </div>
                </Col>
                <Col sm={4}>
                  <div className="form-check form-check-inline">
                    <Field
                      type="checkbox"
                      className="form-check-input"
                      name="sea_explorers"
                      checked={values.sea_explorers}
                    />
                    <label htmlFor="sea_explorers" className="form-check-label">
                      Sea Explorers
                    </label>
                  </div>
                </Col>
                <Col sm={4}>
                  <div className="form-check form-check-inline">
                    <Field
                      type="checkbox"
                      className="form-check-input"
                      name="civil_air_patrol"
                      checked={values.civil_air_patrol}
                    />
                    <label htmlFor="civil_air_patrol" className="form-check-label">
                      Civil Air Patrol
                    </label>
                  </div>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col sm={4}>
                  <div className="form-check form-check-inline">
                    <Field
                      type="checkbox"
                      className="form-check-input"
                      name="naval_sea_cadet_corps"
                      checked={values.naval_sea_cadet_corps}
                    />
                    <label htmlFor="naval_sea_cadet_corps" className="form-check-label">
                      Naval Sea Cadet Corps
                    </label>
                  </div>
                </Col>

                <Col sm={4}>
                  <div className="form-check form-check-inline">
                    <Field
                      type="checkbox"
                      className="form-check-input"
                      name="coast_guard_auxiliary"
                      checked={values.coast_guard_auxiliary}
                    />
                    <label htmlFor="coast_guard_auxiliary" className="form-check-label">
                      Coast Guard Auxiliary
                    </label>
                  </div>
                </Col>

                <Col sm={4}>
                  <div className="form-check form-check-inline">
                    <Field type="checkbox" className="form-check-input" name="rotc_jrotc" checked={values.rotc_jrotc} />
                    <label htmlFor="rotc_jrotc" className="form-check-label">
                      ROTC/JROTC
                    </label>
                  </div>
                </Col>
              </Row>
            </fieldset>

            <fieldset className="fieldset">
              <p>
              Please list any current or past* chronic medical conditions (such as orthopedic, mental health,
                surgeries, allergies, or asthma) and any prescription medications you have taken. *For past
                conditions, please provide estimated dates.
                <br />
                You may use this space to explain any of the above answers more fully, if necessary.
              </p>
              <FieldArray
                name="explanations"
                render={(arrayHelpers) => (
                  <div>
                    {values.explanations && values.explanations.length > 0 ? (
                      values.explanations.map((explanation, index) => (
                        <Row className="form-group mb-3" key={index}>
                          <Col sm={10}>
                            <label htmlFor={`explanation[${index}].exp`}>Explanation</label>
                            <Field name={`explanation[${index}].exp`} className="form-control" as="textarea" />
                          </Col>
                          <Col sm={2}>
                            <div className="input-group">
                              <span className="input-group-btn">
                                <Button
                                  type="button"
                                  className="btn btn-default btn-number mr-1"
                                  onClick={() => arrayHelpers.remove(index)}>
                                  -
                                </Button>
                                <Button
                                  type="button"
                                  className="btn btn-default btn-number"
                                  onClick={() => arrayHelpers.insert(index, "")}>
                                  +
                                </Button>
                              </span>
                            </div>
                          </Col>
                        </Row>
                      ))
                    ) : (
                      <button type="button" onClick={() => arrayHelpers.push("")}>
                        Add an Explanation
                      </button>
                    )}
                  </div>
                )}
              />
            </fieldset>
            <fieldset className="fieldset">
              <Row className="my-3">
                <Col>
                  <div className="form-check form-check-inline">
                    <Field type="checkbox" className="form-check-input" name="acknowledgement" aria-required="true" />
                    <label htmlFor="acknowledgement" className="form-check-label">
                      I hereby certify that the information I have provided is truthful and accurate to the best of my
                      knowledge and I understand that any false information that I provide may be the grounds for
                      termination of any future enlistment/commissioning contracts with the United States Coast Guard.
                    </label>
                    <small className="form-text text-danger">
                      <ErrorMessage name="acknowledgement" />
                    </small>
                  </div>
                </Col>
              </Row>
            </fieldset>

            <div className="form-actions">
              <Button type="button" variant="secondary" onClick={() => stepBack(values)}>
                Previous
              </Button>
              <Button type="submit">Submit Form</Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
