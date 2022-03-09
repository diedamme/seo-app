import React from "react";
import "./Form.css";

const Form = (props) => {
  return (
    <div className="form-group text-area-from-del" key={props.key}>
      <label htmlFor="exampleFormControlTextarea1">{props.label}</label>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
        value={props.value}
        onChange={props.onChange}
      ></textarea>
    </div>
  );
};

export default Form;
