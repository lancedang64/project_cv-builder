import React from 'react';

function SideNavSpan(props) {
  return <span onClick={props.onClick}>{props.name}</span>;
}

export default SideNavSpan;
