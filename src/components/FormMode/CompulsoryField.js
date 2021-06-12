import React from 'react';

function CompulsoryField(props) {
	const { type, label, id, name, value, handleOnChange } = props;

	if (type === 'textArea') {
		return (
			<div>
				{label ? <label>{label}: </label> : null}
				<textarea id={id} name={name} value={value} onChange={handleOnChange} />
			</div>
		);
	}
	return (
		<div className='inputDiv'>
			<label>{label}: </label>
			<input id={id} name={name} value={value} onChange={handleOnChange} />
		</div>
	);
}

export default CompulsoryField;
