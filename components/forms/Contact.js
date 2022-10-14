import React from "react";
import { Formik, Form } from "formik";
import Link from "next/link";
import * as Yup from "yup";
import { Button, Row } from "react-bootstrap";
import TextInputSm from "./components/TextInputSm";
import Body from "/components/Body";

export default function Contact() {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    zip: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required().max(25).label("Name"),
    email: Yup.string().email().required().label("Email"),
    phone: Yup.string().required().label("Phone"),
    zip: Yup.string().min(0).max(5).label("Zip"),
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
          <Body value="<p>Whether you have specific questions about how to join, are seeking more information, or are ready to apply, we &apos;re here to help. Fill out the form below and a recruiter will contact you soon.</p>" />
          <TextInputSm type="text" name="name" label="Name" placeholder="Name" required={true} />
          <TextInputSm type="email" name="email" label="Email" placeholder="Email" required={true} />
          <TextInputSm type="phone" name="phone" label="Phone" placeholder="Phone" required={true} />
          <TextInputSm type="text" name="zip" label="Zip" placeholder="Zip" required={true} />
          <Row className="form-group mb-3">
            <Button type="submit">Request Information</Button>
          </Row>
          <p className="privacy">
            We respect your privacy. <Link to="/privacy-policy">Read our policy.</Link>
          </p>
        </Form>
      )}
    </Formik>
  );
}
