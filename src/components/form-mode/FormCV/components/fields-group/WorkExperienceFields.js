import React from 'react';
import { useFieldArray } from 'react-hook-form';
import { Button } from 'antd';
import styled from 'styled-components';

import WorkExperience from '../reusable/WorkExperience';

const ButtonStyled = styled(Button)`
	color: #1890ff;
`;

export const workExperienceTemplate = {
	startDate: '',
	endDate: '',
	position: '',
	company: '',
	description: ['', '', ''],
};

export default function WorkExperienceFields({ formControl }) {
	const { fields, append, remove } = useFieldArray({
		control: formControl,
		name: 'workExperience',
	});
	return (
		<>
			<div>
				{fields.map((item, index) => (
					<div key={item.id}>
						<WorkExperience
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

				<Button type='secondary' onClick={() => append(workExperienceTemplate)}>
					Add a Company
				</Button>
			</div>
		</>
	);
}
