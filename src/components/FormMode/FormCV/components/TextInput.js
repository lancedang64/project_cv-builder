import React from 'react';
import { Input } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

export default function TextInput({ label, field, inputType, children }) {
	return inputType === 'textArea' ? (
		<div>
			<TextArea {...field} />
			{children}
		</div>
	) : (
		<div>
			<label>
				{label}:
				<Input {...field} />
			</label>
			{children}
		</div>
	);
}
