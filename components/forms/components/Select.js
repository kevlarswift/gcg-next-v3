import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import { Row, Col } from "react-bootstrap";

export default function Select(props) {
  const { label, name, options, required, instructions, ...rest } = props;
  return (
    <Row className={required ? "form-group mb-3 required" : "form-group mb-3"}>
      <label className="col-form-label col-sm-3" htmlFor={name}>
        {label}
      </label>
      <Col sm={9}>
        <Field as="select" className="form-select" id={name} name={name}  aria-required={required ? "true" : "false" } {...rest}>
          <option value=""> - Select - </option>
          {options.map((option, idx) => {
            return <option value={option.value} key={idx}>{option.label}</option>;
          })}
        </Field>
        <ErrorMessage component={TextError} name={name} />
        {!!instructions ? <small className="form-text text-muted">{instructions}</small> : null}
      </Col>
    </Row>
  );
}
