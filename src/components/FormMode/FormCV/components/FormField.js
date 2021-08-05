import React from 'react';
import { Form as AntForm, Input } from 'antd';

const FormItem = ({ label, inputProps }) => {
	return (
		<AntForm.Item label={label}>
			<Input
				name={inputProps.name}
				value={inputProps.fullName}
				onChange={inputProps.handleChange}
			/>
		</AntForm.Item>
	);
};

export default FormItem;
