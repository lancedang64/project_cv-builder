import React from 'react';

function FormContainer(props) {
  const { fullName, jobTitle, contacts } = props.personData;

  const contactComponents = contacts.map((contact, index) => {
    return (
      <label key={index}>
        Contact #{index + 1}
        <input
          name={`contacts`}
          id={`contact${index}`}
          value={contact}
          onChange={props.handleOnChange}
        ></input>
      </label>
    );
  });
  return (
    <div className="FormContainer">
      <label>
        Full Name:
        <input
          name="fullName"
          value={fullName}
          onChange={props.handleOnChange}
        ></input>
      </label>
      <label>
        Job Title:
        <input
          name="jobTitle"
          value={jobTitle}
          onChange={props.handleOnChange}
        ></input>
      </label>
      {contactComponents}
    </div>
  );
}

export default FormContainer;
