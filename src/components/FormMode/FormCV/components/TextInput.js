import React from 'react';
import { Form, Input } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

export default function TextInput({ label, field, inputType, children }) {
	return inputType === 'textArea' ? (
		<>
			<TextArea {...field} />
			{children}
		</>
	) : (
		<Form.Item label={label}>
			<Input {...field} />
			{children}
		</Form.Item>
	);
}
