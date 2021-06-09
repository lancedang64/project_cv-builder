import React from 'react';
import generatePDF from '../functions/generatePDF';
import SideNavSpan from './SideNavSpan';

function SideNav() {
  function handleClick(event) {
    generatePDF();
  }

  return (
    <div className="SideNav">
      <SideNavSpan name="Preview" />
      <SideNavSpan name="Download PDF" onClick={handleClick} />
      <SideNavSpan name="Fill with Template" />
    </div>
  );
}

export default SideNav;
