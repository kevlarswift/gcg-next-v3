import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import { Row } from "react-bootstrap";

export default function SelectSm(props) {
  const { label, name, options, required, instructions, ...rest } = props;
  return (
    <Row className={required ? "form-group mb-3 required" : "form-group mb-3"}>
      <label className="col-form-label" htmlFor={name}>
        {label}
      </label>
      <Field as="select" className="form-select" id={name} name={name} {...rest}>
        <option value=""> - Select - </option>
        {options.map((option, idx) => {
          return <option value={option.value} key={idx}>{option.label}</option>;
        })}
      </Field>
      <ErrorMessage component={TextError} name={name} />
      {!!instructions ? <small className="form-text text-muted">{instructions}</small> : null}

    </Row>
  );
}
