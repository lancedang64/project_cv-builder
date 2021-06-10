import './App.css';
import React, { useState } from 'react';
import EditContainer from './components/EditContainer';
import SideNav from './components/SideNav';
import PreviewContainer from './components/PreviewMode/PreviewContainer';

function App() {
  const [isPreviewMode, setPreviewMode] = useState(false);

  const sideNavFunctions = {
    Preview: function togglePreviewMode() {
      setPreviewMode((prevState) => !prevState);
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
      {isPreviewMode ? <PreviewContainer /> : <EditContainer />}
    </div>
  );
}

export default App;
