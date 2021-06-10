import React, { useState } from 'react';

function TextField(props) {
  const [isEditing, setEditMode] = useState(false);
  const [value, setValue] = useState(props.template);

  function enableEditMode(event) {
    setEditMode(true);
  }

  function disableEditMode(event) {
    setEditMode(false);
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') setEditMode(false);
  }

  function handleChange(event) {
    setValue(event.target.value);
  }

  return isEditing ? (
    <input
      autoFocus
      className={props.className}
      value={value}
      onChange={handleChange}
      onBlur={disableEditMode}
      onKeyPress={handleKeyPress}
      placeholder={props.placeholder}
    />
  ) : (
    <span id={props.id} className={props.className} onClick={enableEditMode}>
      {value || props.placeholder}
    </span>
  );
}

export default TextField;
