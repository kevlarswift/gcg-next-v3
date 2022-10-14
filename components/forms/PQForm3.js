import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, Row, Col } from "react-bootstrap";
import TextError from "./components/TextError";
import TextInput from "./components/TextInput";
import TextArea from "./components/TextArea";
import Select from "./components/Select";

export default function PQForm3({ initialValues, validationSchema, formOptions, updateData, moveStep }) {
  const onSubmit = (values) => {
    updateData(values);
    moveStep(3);
  };
  const stepBack = (values) => {
    updateData(values);
    moveStep(1);
  };
  return (
    <div>
      <h3>Military and ASVAB Information</h3>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ values }) => (
          <Form>
            <fieldset className="fieldset">
              <legend>Recruiter</legend>
              <Select
                name="recruiter"
                label="Have you ever talked to a Coast Guard Recruiter?"
                required={true}
                options={formOptions.yes_no_unsure}
              />
              {values.recruiter === "Y" ? (
                <TextInput type="text" name="recruiter_details" label="If yes, when and where?" />
              ) : null}
            </fieldset>

            <fieldset className="fieldset">
              <legend>Military Service</legend>
              <Select
                name="service"
                label="Have you served or are you currently serving in another military branch?"
                required={true}
                options={formOptions.yes_no_unsure}
              />
              {values.service === "Y" ? (
                <React.Fragment>
                  <Select name="branch" label="Branch" options={formOptions.branches} />
                  <Select name="service_component" label="Component" options={formOptions.service_components} />
                  <Select name="pay_grade" label="Pay Grade" options={formOptions.pay_grades} />
                  <Select name="rate_mos_job" label="Rate/MOS/Job" options={formOptions.rate_mos_jobs} />
                  <Select name="service_type" label="Service Type" options={formOptions.service_types} />
                </React.Fragment>
              ) : null}
            </fieldset>

            {values.service_type === "0" ? (
              <fieldset className="fieldset">
                <legend>Discharged</legend>

                <Row className="form-group mb-3">
                  <label className="col-form-label col-sm-3" htmlFor="discharged_separation_date">
                    Date of Separation
                  </label>
                  <Col sm={9}>
                    <Field type="date" name="discharged_separation_date" className="form-control" />
                    <ErrorMessage component={TextError} name="discharged_separation_date" />
                  </Col>
                </Row>

                <Row className="form-group mb-3">
                  <label className="col-form-label col-sm-3" htmlFor="time_years">
                    Service Years
                  </label>
                  <Col sm={9}>
                    <div className="input-group">
                      <Field type="number" name="time_years" className="form-control" />
                      <div className="input-group-append">
                        <span className="input-group-text" id="basic-addon1">
                          years
                        </span>
                      </div>
                    </div>
                    <ErrorMessage component={TextError} name="time_years" />
                  </Col>
                </Row>

                <Row className="form-group mb-3">
                  <label className="col-form-label col-sm-3" htmlFor="time_months">
                    Service Months
                  </label>
                  <Col sm={9}>
                    <div className="input-group">
                      <Field type="number" id="time_months" name="time_months" className="form-control" />
                      <div className="input-group-append">
                        <span classNam="input-group-text" id="basic-addon1">
                          months
                        </span>
                      </div>
                    </div>
                    <ErrorMessage component={TextError} name="time_months" />
                  </Col>
                </Row>

                <Row className="form-group mb-3">
                  <label className="col-form-label col-sm-3" htmlFor="time_days">
                    Service Days
                  </label>
                  <Col sm={9}>
                    <div className="input-group">
                      <Field type="number" id="time_days" name="time_days" className="form-control" />
                      <div className="input-group-append">
                        <span className="input-group-text" id="basic-addon1">
                          days
                        </span>
                      </div>
                    </div>
                    <ErrorMessage component={TextError} name="time_days" />
                  </Col>
                </Row>
                <Select name="discharge_type" label="Discharge Type" options={formOptions.discharge_types} />
                <Select name="re_code" label="RE Code" options={formOptions.re_codes} />
              </fieldset>
            ) : null}

            {values.service_type === "1" ? (
              <fieldset className="fieldset">
                <legend>Currently Serving</legend>
                <TextInput type="date" name="anticipated_separation_date" label="Anticipated Separation Date" />
                <Row className="form-group mb-3">
                  <label className="col-form-label col-sm-3" htmlFor="serving_years">
                    Remaining Service Years
                  </label>
                  <Col sm={9}>
                    <div className="input-group">
                      <Field type="number" id="serving_years" name="serving_years" className="form-control" />
                      <div className="input-group-append">
                        <span className="input-group-text" id="basic-addon1">
                          years
                        </span>
                      </div>
                    </div>
                    <ErrorMessage component={TextError} name="serving_years" />
                  </Col>
                </Row>

                <Row className="form-group mb-3">
                  <label className="col-form-label col-sm-3" htmlFor="serving_months">
                    Remaining Service Months
                  </label>
                  <Col sm={9}>
                    <div className="input-group">
                      <Field type="number" name="serving_months" className="form-control" />
                      <div className="input-group-append">
                        <span className="input-group-text" id="basic-addon1">
                          months
                        </span>
                      </div>
                    </div>
                    <ErrorMessage component={TextError} name="serving_months" />
                  </Col>
                </Row>

                <Row className="form-group mb-3">
                  <label className="col-form-label col-sm-3" htmlFor="serving_days">
                    Remaining Service Days
                  </label>
                  <Col sm={9}>
                    <div className="input-group">
                      <Field type="number" name="serving_days" className="form-control" />
                      <div className="input-group-append">
                        <span className="input-group-text" id="basic-addon1">
                          days
                        </span>
                      </div>
                    </div>
                    <ErrorMessage component={TextError} name="serving_days" />
                  </Col>
                </Row>
              </fieldset>
            ) : null}

            <fieldset className="fieldset">
              <Select
                name="rejected_military"
                label="Have you ever been rejected from joining another military service?"
                required={false}
                options={formOptions.yes_no_unsure}
              />
              {values.rejected_military === "Y" ? (
                <TextArea
                  name="rejected_details"
                  label="If Yes, which branch (including Coast Guard), what was the reason, and where did it happen?"
                />
              ) : null}
            </fieldset>

            <fieldset className="fieldset">
              <legend>ASVAB</legend>
              <Select
                name="asvab"
                label="Have you ever taken the ASVAB?"
                required={true}
                options={formOptions.yes_no_unsure}
              />
              {values.asvab === "Y" ? (
                <React.Fragment>
                  <Select name="asvab_branch" label="Branch for?" options={formOptions.branches} />
                  <TextInput type="date" name="asvab_when" label="Expiration Date" />
                  <TextInput type="number" name="asvab_score" label="Score" />
                  <TextArea name="asvab_where" label="Name of School/MET Site/MEPS" />
                </React.Fragment>
              ) : null}
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
