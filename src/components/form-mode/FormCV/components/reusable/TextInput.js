import React from 'react';
import { Input } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import styled from 'styled-components';

const InputContainerStyled = styled.div`
	margin-bottom: 20px;
`;

export default function TextInput({ label, field, inputType, children }) {
	return inputType === 'textArea' ? (
		<InputContainerStyled>
			{label ? `${label}:` : null}
			<TextArea showCount autoSize={{ minRows: 2 }} {...field} />
			{children}
		</InputContainerStyled>
	) : (
		<InputContainerStyled>
			<label>
				{label ? `${label}:` : null}
				<Input {...field} />
			</label>
			{children}
		</InputContainerStyled>
	);
}
