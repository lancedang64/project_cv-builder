import React from 'react';
import enableEditMode from '../functions/toggleEditMode';

function CVHeader(props) {
  const { name, jobTitle, contacts } = props.person;
  const allContacts = contacts.map((contact) => {
    return (
      <span key={contact.toString()} className="Contact">
        {contact}
      </span>
    );
  });

  return (
    <div className="CVHeader">
      <div className="NameAndTitle">
        <span onClick={enableEditMode} className="FullName">
          {name}
        </span>
        <br />
        <span className="JobTitle">{jobTitle}</span>
      </div>
      <div className="Contacts">{allContacts}</div>
    </div>
  );
}

export default CVHeader;
