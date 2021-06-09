import React from 'react';
import TextField from './TextField';

function CVHeader(props) {
  const { fullName, jobTitle, contacts } = props.person;
  const allContacts = contacts.map((contact) => {
    return (
      <TextField
        key={contact.toString()}
        className="Contact"
        template={contact}
        placeholder="Contact Detail"
      />
    );
  });

  return (
    <div className="CVHeader">
      <div>
        <TextField
          className="FullName"
          template={fullName}
          placeholder="Full Name"
        />
        <TextField
          className="JobTitle"
          template={jobTitle}
          placeholder="Job Title"
        />
      </div>
      <div className="Contacts">{allContacts}</div>
    </div>
  );
}

export default CVHeader;
