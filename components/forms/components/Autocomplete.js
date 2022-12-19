import React from "react";
import { useField } from "formik";
import { Typeahead } from "react-bootstrap-typeahead";
import { Form, Row, Col } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-typeahead/css/Typeahead.css";

export default function Autocomplete(props) {
  const [field, meta, helper] = useField(props);
  return (
    <Row className={props.required ? "form-group mb-3 required" : "form-group mb-3"}>
      <Form.Group controlId={`form-${props.name}`}>
        <Col sm={3}>
          <Form.Label>{props.label}</Form.Label>
        </Col>
        <Col sm={9}>
          <Typeahead
            id={props.name}
            name={props.name}
            multiple={false}
            onChange={(selected) => {
              const value = selected.length > 0 ? selected[0].id : "";
              helper.setValue(value);
            }}
            onInputChange={(text) => helper.setValue(text)}
            onBlur={() => helper.setTouched(true)}
            allowNew={false}
            labelKey={props.name}
            options={props.options}
            {...(meta.touched && meta.error
              ? { isInvalid: true, className: "is-invalid" }
              : { isValid: true })}
            {...props}
          />
          {meta.touched && meta.error ? (
            <div className="invalid-feedback">{meta.error}</div>
          ) : null}
        </Col>
      </Form.Group>
    </Row>
  );
}
