import React, { useState } from "react";
import { Form, Row, Col, InputGroup } from "react-bootstrap";
import formOptions from "./HeightWeightData.json";

const HeightWeight = () => {
  const [height, setHeight] = useState(0);
  const [weightMinimum, setWeightMinimum] = useState(0);
  const [weightMaximum, setWeightMaximum] = useState(0);

  const handleSelect = (event) => {
    let selectedItem = formOptions.bodyFat.find((item) => item.height === parseInt(event.target.value, 10));
    setHeight(event.target.value);
    setWeightMinimum(selectedItem.min);
    setWeightMaximum(selectedItem.max);
  };

  return (
    <React.Fragment>
      <h2>Height/Weight</h2>
      <fieldset className="fieldset">
        <Form>
          <Form.Group as={Row} className="mb-3">
            <Col md={3}>
              <Form.Label>Height</Form.Label>
            </Col>
            <Col md={9}>
              <Form.Select aria-label="Height" name="height" id="height" value={height} onChange={handleSelect}>
                <option value={0}> - Select Height - </option>
                {formOptions.bodyFat.map((height, index) => {
                  return (
                    <option value={height.height} key={index}>
                      {height.label}
                    </option>
                  );
                })}
              </Form.Select>
            </Col>
          </Form.Group>
{/**
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md={3}>
              Minimum Weight
            </Form.Label>
            <Col md={9}>
              <InputGroup>
                <Form.Control
                  disabled
                  type="text"
                  id="weight_minimum"
                  name="weight_minimum"
                  label="Minimum Weight"
                  value={weightMinimum}
                />
                <InputGroup.Text>lbs.</InputGroup.Text>
              </InputGroup>
            </Col>
          </Form.Group>
*/}
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md={3}>
              Maximum Weight
            </Form.Label>
            <Col md={9}>
              <InputGroup>
                <Form.Control
                  disabled
                  type="text"
                  id="weight_maximum"
                  name="weight_maximum"
                  label="Maximum Weight"
                  value={weightMaximum}
                />
                <InputGroup.Text>lbs.</InputGroup.Text>
              </InputGroup>
            </Col>
            <small className="form-text text-muted">Brief description of options for Applicants whose weight is outside of accepted bounds.</small>
          </Form.Group>
        </Form>
      </fieldset>
    </React.Fragment>
  );
};

export default HeightWeight;
