import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import { Row } from "react-bootstrap";

export default function TextInputSm(props) {
  const { label, name, required, instructions, placeholder, ...rest } = props;
  return (
    <Row className={required ? "form-group mb-3 required" : "form-group mb-3"}>
      <label className="col-form-label" htmlFor={name}>{label}</label>
      <Field className="form-control" id={name} name={name} aria-label={label} placeholder={placeholder} {...rest} />
      <ErrorMessage component={TextError} name={name} />
      {!!instructions ? <small className="form-text text-muted">{instructions}</small> : null}
    </Row>
  );
}
