import React from 'react';

function SideNav(props) {
  function handleClick(event) {
    const name = event.target.innerHTML;
    props.functions[name]();
  }

  const funcArr = [];
  for (const funcName in props.functions) funcArr.push(funcName);

  const sideNavComponents = funcArr.map((funcName) => {
    return (
      <span key={funcName} onClick={handleClick}>
        {funcName}
      </span>
    );
  });

  return <div className="SideNav">{sideNavComponents}</div>;
}

export default SideNav;
