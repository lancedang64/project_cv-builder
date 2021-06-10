import '../styles/App.css';
import React, { useState } from 'react';
import EditContainer from './EditMode/EditContainer';
import SideNav from './SideNav';
import PreviewContainer from './PreviewMode/PreviewContainer';
import TEMPLATE from '../TEMPLATE';

function App() {
  const [isEditMode, setEditMode] = useState(true);

  const sideNavFunctions = {
    Preview: function togglePreviewMode() {
      setEditMode((prevState) => !prevState);
    },
    'Download PDF': function downloadPDF() {
      console.log('download PDF');
    },
    'Fill with template': function fillWithTemplate() {
      console.log('fill with template');
    },
  };

  return (
    <div className="App">
      <SideNav functions={sideNavFunctions} />
      {isEditMode ? (
        <EditContainer person={TEMPLATE} />
      ) : (
        <PreviewContainer person={TEMPLATE} />
      )}
    </div>
  );
}

export default App;
