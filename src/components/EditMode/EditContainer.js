import React from 'react';
import CVHeader from './CVHeader';

function EditContainer(props) {
  return (
    <div className="EditContainer" id="EditContainer">
      <CVHeader person={props.person} />
    </div>
  );
}

export default EditContainer;
