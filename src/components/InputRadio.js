import React from "react";

const InputRadio = (props) => {
  const idInput = `exampleRadios${+props.index}`;
  const valueInput = `option${+props.index}`;
  const forLabel = `exampleRadios${+props.index}`;
  console.log(props.key);
  return (
    <div class="form-check disabled" key={props.key}>
      <input
        className="form-check-input"
        type="radio"
        name="exampleRadios"
        id={idInput}
        value={valueInput}
        checked={props.checked}
        onClick={props.onClick}
      />
      <label className="form-check-label" for={forLabel}>
        {props.label}
      </label>
    </div>
  );
};

export default InputRadio;
