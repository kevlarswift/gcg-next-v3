import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import { Row } from "react-bootstrap";

export default function TextArea(props) {
  const { label, name, required, instructions, ...rest } = props;
  return (
    <Row className={required ? "form-group mb-3 required" : "form-group mb-3"}>
      <label className="col-form-label" htmlFor={name}>{label}</label>
      <Field className="form-control" as="textarea" id={name} name={name} {...rest} />
      <ErrorMessage component={TextError} name={name} />
      {!!instructions ? <small className="form-text text-muted">{instructions}</small> : null}
    </Row>
  );
}
