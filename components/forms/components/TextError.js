import React from "react";

export default function TextError(props) {
  return (
    <small className="form-text text-danger">
      {props.children}
    </small>
  );
}
