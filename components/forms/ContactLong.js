import React from "react";
import { Formik, Form, Field } from "formik";
import Link from "next/link";
import * as Yup from "yup";
import { Button, Row } from "react-bootstrap";
import TextInputSm from "./components/TextInputSm";
import SelectSm from "./components/SelectSm";
import formOptions from "./ProspectQuestionnaireData.json";
import TextAreaSm from "./components/TextAreaSm";
import Body from "/components/Body";

export default function Contact() {
  const initialValues = {
    name_first: "",
    name_last: "",
    email: "",
    phone: "",
    zip: "",
    dob: "",
    gender: "",
    ethnicity: "",
    race: "",
    race_2: "",
    citizenship: "",
    education_level: "",
    crime: "",
    legal: "",
    issues: "",
    terms_privacy: true,
  };
  const validationSchema = Yup.object({
    name_first: Yup.string().required().max(25).label("First Name"),
    name_last: Yup.string().required().max(25).label("Last Name"),
    email: Yup.string().email().required().label("Email"),
    phone: Yup.string().required().label("Phone"),
    zip: Yup.string().required().min(0).max(5).label("Zip Code"),
    dob: Yup.date().required("Date of Birth"),
    gender: Yup.string().required().label("Gender"),
    ethnicity: Yup.string().required().label("Ethnicity"),
    race: Yup.string().required().label("Race"),
    race_2: Yup.string().label("Race #2"),
    citizenship: Yup.string().required().label("Citizenship"),
    education_level: Yup.string().required().label("Education Level"),
    crime: Yup.string()
      .required()
      .label("Have you ever been arrested, charged, or convicted of a crime (whether as a juvenile or an adult)?"),
    legal: Yup.string()
      .required()
      .label(
        "Do you have any legal action pending, including court cases, lawsuits, child support or custody adjudications, etc?"
      ),
    issues: Yup.string().label("Issues"),
    terms_privacy: Yup.boolean().oneOf([true], "Please acknowledge that you agree to the terms of the Privacy Act"),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm({ values: initialValues });
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {(props) => (
        <Form>
          <h2>Start Your Adventure</h2>
          <Body value="<p>Whether you have specific questions about how to join, are seeking more information, or are ready to apply, we&apos;re here to help. Fill out the form below and a recruiter will contact you soon.</p>" />
          <TextInputSm type="text" name="name_first" label="First Name" placeholder="First Name" required={true} />
          <TextInputSm type="text" name="name_last" label="Last Name" placeholder="Last Name" required={true} />
          <TextInputSm type="email" name="email" label="Email Address" placeholder="Email" required={true} />
          <TextInputSm type="text" name="zip" label="Zip Code" placeholder="12345" required={true} />
          <TextInputSm type="phone" name="phone" label="Phone Number" placeholder="Phone Number" required={true} />
          <TextInputSm type="date" name="dob" label="Date of Birth" placeholder="Date of Birth" required={true} />
          <SelectSm name="gender" label="Gender" options={formOptions.genders} required={true} />
          <SelectSm name="ethnicity" label="Ethnicity" options={formOptions.ethnicities} required={true} />
          <SelectSm name="race" label="Race" options={formOptions.races} required={true} />
          <SelectSm name="race_2" label="Race #2" instructions="Select if applicable" options={formOptions.races} />
          <SelectSm name="citizenship" label="US Citizenship Status" options={formOptions.citizenships} required={true} />
          <SelectSm name="education_level" label="Education" instructions="Highest Attained" options={formOptions.education_levels} required={true} />
          <SelectSm name="crime" label="Crime" instructions="Have you ever been arrested, charged, or convicted of a crime (whether as a juvenile or an adult),including cases which are expunged or pending?" options={formOptions.yes_no_unsure} required={true} />
          <SelectSm name="legal" label="Legal" instructions="Do you have any legal action pending, including court cases, lawsuits, child support or custody adjudications, etc?" options={formOptions.yes_no_unsure} required={true} />
          <TextAreaSm name="issues" label="Do you have any medical or personal issues or concerns that you would like to discuss that might hinder or prevent you from being able to serve in the U.S. Coast Guard?" placeholder="Enter text here" required={false} />

          <Row className="form-group mt-4 mb-4 required">
            <div className="form-check form-check-inline">
              <Field type="checkbox" className="form-check-input" name="boy_scouts" checked={props.values.terms_privacy} />
              <label htmlFor="terms_privacy" className="form-check-label">
                I have read and understood my privacy rights.
              </label>
            </div>
          </Row>

          <Row className="form-group mb-3"><Button type="submit">Request Information</Button></Row>
          <p className="privacy">We respect your privacy. <Link href="/privacy-policy">Read our policy.</Link></p>
        </Form>
      )}
    </Formik>
  );
}
