import React from 'react';
import { Form, Input } from 'antd';

export default function TextInput({ label, field }) {
	return (
		<Form.Item label={label}>
			<Input {...field} />
		</Form.Item>
	);
}
