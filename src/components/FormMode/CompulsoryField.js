import React from 'react';

function CompulsoryField(props) {
  return (
    <div>
      <label>{props.label} </label>
      <input
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.handleOnChange}
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default CompulsoryField;
