import React, { useState } from 'react';

function TextField(props) {
  const emptyInputPrompt = 'Please fill in this field';
  const [isEditing, setEditMode] = useState(false);
  const [inputValue, setInputValue] = useState(props.template);

  function enableEditMode(event) {
    setEditMode(true);
  }

  function disableEditMode(event) {
    setEditMode(false);
  }

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  return isEditing ? (
    <input
      className={props.className}
      value={inputValue}
      onChange={handleChange}
      onBlur={disableEditMode}
    />
  ) : (
    <span className={props.className} onClick={enableEditMode}>
      {inputValue || emptyInputPrompt}
    </span>
  );
}

export default TextField;
