import React from 'react';
import { useFieldArray } from 'react-hook-form';
import { Button } from 'antd';
import styled from 'styled-components';

import Education from '../reusable/Education';

const ButtonStyled = styled(Button)`
	color: #1890ff;
`;

export const educationTemplate = {
	degree: '',
	school: '',
	yearOfGraduation: '',
};

export default function EducationFields({ formControl }) {
	const { fields, append, remove } = useFieldArray({
		control: formControl,
		name: 'education',
	});
	return (
		<>
			<div>
				{fields.map((item, index) => (
					<div key={item.id}>
						<Education
							index={index}
							formControl={formControl}
							action={
								<ButtonStyled type='text' onClick={() => remove(index)}>
									Delete
								</ButtonStyled>
							}
						/>
					</div>
				))}

				<ButtonStyled
					type='secondary'
					onClick={() => append(educationTemplate)}
				>
					Add a degree
				</ButtonStyled>
			</div>
		</>
	);
}
