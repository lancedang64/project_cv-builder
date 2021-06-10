import React from 'react';

function InputField(props) {
  return (
    <div>
      <label>
        {props.label}:
        <input value={props.value} onChange={props.setState} />
      </label>
    </div>
  );
}

export default InputField;
