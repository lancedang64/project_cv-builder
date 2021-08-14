import React from 'react';
import { DatePicker, Input } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import styled from 'styled-components';

const InputContainerStyled = styled.div`
	margin-bottom: 20px;
	display: flex;
	flex-direction: column;
`;

const monthFormat = 'MM/YYYY';

export default function DatePickerField({ label, field, children }) {
	return (
		<InputContainerStyled>
			{label ? `${label}:` : null}
			<DatePicker picker='month' format={monthFormat} {...field} />
			{children}
		</InputContainerStyled>
	);
}
