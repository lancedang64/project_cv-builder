import React from 'react';
import CompulsoryField from './CompulsoryField';

function FormContainer(props) {
  const { fullName, jobTitle, contacts } = props.personData;

  const compulsoryContactFields = contacts.map((contact, index) => {
    return (
      <CompulsoryField
        key={index}
        id={`contact${index}`}
        label={`Contact #${index + 1}`}
        name={`contacts`}
        value={contact}
        handleOnChange={props.handleOnChange}
      />
    );
  });

  return (
    <form className="FormContainer">
      <CompulsoryField
        label="Full Name: "
        name="fullName"
        value={fullName}
        handleOnChange={props.handleOnChange}
      />
      <CompulsoryField
        label="Job Title: "
        name="jobTitle"
        value={jobTitle}
        handleOnChange={props.handleOnChange}
      />
      {compulsoryContactFields}
    </form>
  );
}

export default FormContainer;
