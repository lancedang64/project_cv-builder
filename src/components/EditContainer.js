import React from 'react';
import CVHeader from './CVHeader';
import CVSection from './CVSection';
import TEMPLATE from './TEMPLATE';
import TextField from './TextField';

function EditContainer() {
  return (
    <div className="EditContainer">
      <CVHeader person={TEMPLATE} />
      <TextField className="fullName" template="John Smith" />
      <CVSection />
    </div>
  );
}

export default EditContainer;
