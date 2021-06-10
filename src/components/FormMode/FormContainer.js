import React from 'react';

function FormContainer(props) {
  return (
    <div className="FormContainer">
      <label>
        Full Name:
        <input
          name="fullName"
          value={props.personData.fullName}
          onChange={props.handleOnChange}
        ></input>
      </label>
      <br />
      <label>
        Job Title:
        <input
          name="jobTitle"
          value={props.personData.jobTitle}
          onChange={props.handleOnChange}
        ></input>
      </label>
    </div>
  );
}

export default FormContainer;
