import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Container, Button, Row, Col, Modal } from "react-bootstrap";
import MaskedInput from "react-input-mask";
import TextError from "./components/TextError";
import TextInput from "./components/TextInput";
import Select from "./components/Select";

export default function PQForm1({ initialValues, validationSchema, formOptions, updateData, moveStep }) {
  const onSubmit = (values) => {
    updateData(values);
    moveStep(1);
  };

  const [openPrivacy, setOpenPrivacy] = useState(false);
  const handleShowPrivacy = () => {
    setOpenPrivacy(true);
  };
  const handleHidePrivacy = () => {
    setOpenPrivacy(false);
  };

  const [openPaperwork, setOpenPaperwork] = useState(false);
  const handleShowPaperwork = () => {
    setOpenPaperwork(true);
  };
  const handleHidePaperwork = () => {
    setOpenPaperwork(false);
  };

  return (
    <div>
      <h3>Contact Details and Interest</h3>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ values, touched, errors, handleChange, handleBlur }) => (
          <Form>
            <fieldset className="fieldset">
              <Row className="my-3">
                <Col sm={6}>
                  <div className="form-check form-check-inline">
                    <Field
                      type="checkbox"
                      className="form-check-input"
                      name="terms_privacy"
                      checked={values.terms_privacy}
                      aria-required="true"
                    />
                    <label htmlFor="terms_privacy" className="form-check-label">
                      I agree to the terms of the&nbsp;
                      <a href="#modal-privacy" onClick={handleShowPrivacy}>
                        Privacy Act Statement
                      </a>
                    </label>
                    <ErrorMessage component={TextError} name="terms_privacy" />
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="form-check form-check-inline">
                    <Field
                      type="checkbox"
                      className="form-check-input"
                      name="terms_paperwork"
                      checked={values.terms_paperwork}
                      aria-required="true"
                    />
                    <label htmlFor="terms_paperwork" className="form-check-label">
                      I agree to the terms of the&nbsp;
                      <a href="#modal-paperwork" onClick={handleShowPaperwork}>
                        Paperwork Reduction Act Statement
                      </a>
                    </label>
                    <ErrorMessage component={TextError} name="terms_paperwork" />
                  </div>
                </Col>
              </Row>
            </fieldset>

            <fieldset className="fieldset">
              <legend>Name</legend>
              <TextInput type="text" name="name_first" label="First Name" required={true} />
              <TextInput type="text" name="name_middle" label="Middle Name" />
              <TextInput type="text" name="name_last" label="Last Name" required={true} />
              <Select name="name_suffix" label=" Suffix" options={formOptions.name_suffixes} />
              <TextInput type="text" name="name_maiden" label="Maiden Name" />
            </fieldset>

            <fieldset className="fieldset">
              <legend>Current Address</legend>
              <Select name="country" label="Country" options={formOptions.countries} required={true} />
              {values.country === "US" ? (
                <React.Fragment>
                  <TextInput type="text" name="street" label="Street" instructions="No PO Box" required={true} />
                  <TextInput type="text" name="City" label="City" required={true} />
                  <Select name="state" label="State" options={formOptions.states} required={true} />
                  <TextInput type="text" name="zip" label="Zip" required={true} />
                  <TextInput type="text" name="county" label="County" required={true} />
                </React.Fragment>
              ) : null}
            </fieldset>

            <fieldset className="fieldset">
              <legend>Contact Information</legend>
              <TextInput type="email" name="email" label="Email Address" required={true} />
              <Row className="form-group mb-3 required">
                <label className="col-form-label col-sm-3" htmlFor="phone_home">
                  Phone Number
                </label>
                <Col sm={9}>
                  <Field
                    name="phone_home"
                    render={({ field }) => (
                      <MaskedInput
                        {...field}
                        type="text"
                        mask="(999) 999-9999"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.phone_home && touched.phone_home ? "form-control error" : "form-control"}
                        aria-required="true"
                      />
                    )}
                  />
                  <ErrorMessage component={TextError} name="phone_home" />
                </Col>
              </Row>
            </fieldset>

            <fieldset className="fieldset">
              <legend>Interest</legend>
              <Select name="media_id" label="Media ID" required={true} options={formOptions.media_ids} />
              <Select
                name="program_of_interest"
                label="Program of Interest"
                required={true}
                options={formOptions.programs_of_interest}
              />
              <Select name="component" label="Component" required={true} options={formOptions.components} />
            </fieldset>

            <div className="form-actions">
              <div>&nbsp;</div>
              <Button type="submit">Next</Button>
            </div>
          </Form>
        )}
      </Formik>

      <Modal show={openPrivacy} onHide={handleHidePrivacy} size="lg" id="modal-privacy">
        <Modal.Header closeButton>
          <Modal.Title>Privacy Act Statement</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            AUTHORITY: &lt; 10 U.S.C. &sect;&sect; 504, 1475-1480; 14 U.S.C. &sect;&sect; 211, 350, 632; Homeland
            Security Presidential Directive (HSPD) 12; Executive Order 9397.
          </p>
          <p>
            PURPOSE:To identify and process individuals interested in applying for enlistment or commission in the
            United States Coast Guard (CG) or CG Reserve.
          </p>
          <p>
            ROUTINE USES: Authorized CG personnel will use this information to assess an individual&nbsp;s interest for
            enlistment and/or commissioning, to screen qualified applicants, and to initiate pay and benefits for new
            members. Any external disclosures of data within this record will be made in accordance with DHS/USCG-014,
            Military Pay and Personnel System of Records, 76 Federal Register 66,933, October 28, 2011.
          </p>
          <p>
            DISCLOSURE: Disclosure is voluntary. However, failure to provide requested information may result in not
            being contacted by a recruiter and ultimately, prohibit enlistment or commissioning.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleHidePrivacy}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={openPaperwork} onHide={handleHidePaperwork} size="lg" id="modal-paperwork">
        <Modal.Header closeButton>
          <Modal.Title>Paperwork Reduction Act Statement</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            An agency may not conduct or sponsor, and a person is not required to respond to, a collection of
            information unless it displays a valid OMB control number.
          </p>

          <p>The Coast Guard estimates that the average burden to complete this form is 30 minutes.</p>

          <p>
            You may submit any comments concerning the accuracy of this burden estimate or any suggestions for reducing
            the burden to: Commanding Officer, Coast Guard Recruiting Command, 2703 Martin Luther King Jr. Ave SE,
            Washington, DC 20593-7419 or Office of Management and Budget, Paperwork Reduction Project (1625-new),
            Washington DC 20503.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleHidePaperwork}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
