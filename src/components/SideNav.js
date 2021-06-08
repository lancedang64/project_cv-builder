import React from 'react';
import SideNavSpan from './SideNavSpan';

function SideNav() {
  return (
    <div className="SideNav">
      <SideNavSpan name="Preview" />
      <SideNavSpan name="Download PDF" />
      <SideNavSpan name="Fill with Template" />
    </div>
  );
}

export default SideNav;
