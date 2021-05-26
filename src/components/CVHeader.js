import React from 'react';
import { enableEditMode } from '../functions/toggleEditMode';

class CVHeader extends React.Component {
  render() {
    const { name, jobTitle, contacts } = this.props.person;

    return (
      <div className="CVHeader">
        <div className="NameAndTitle">
          <span onClick={enableEditMode} className="FullName">{name}</span>
          <br/>
          <span className="JobTitle">{jobTitle}</span>
        </div>
        <div className="Contacts">
          {contacts.map((contact) => {
            return <span key={contact.toString()} className="Contact">{contact}</span>;
          })}
        </div>
      </div>
    );
  }
}

export default CVHeader;
