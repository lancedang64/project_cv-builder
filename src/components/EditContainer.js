import React from 'react';
import CVHeader from './CVHeader';
import CVSection from './CVSection';
import TEMPLATE from './TEMPLATE';
import TextField from './TextField';

function EditContainer() {
  return (
    <div className="EditContainer">
      <CVHeader person={TEMPLATE} />
      <CVSection />
    </div>
  );
}

export default EditContainer;
