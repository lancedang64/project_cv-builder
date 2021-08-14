import React from 'react';
import { Controller, useFieldArray } from 'react-hook-form';
import { Button } from 'antd';
import styled from 'styled-components';

import TextInput from './TextInput';
import DatePickerField from './DatePickerField';
import {
	DoubleRowContainerDiv,
	TitleWithActionDiv,
} from '../../../../../styles/custom-styled-components';

const WorkExperienceDiv = styled.div`
	border: solid 1px #717684;
	box-shadow: 5px 10px #717684;
	margin-bottom: 40px;
	padding: 20px 20px;
`;

export default function WorkExperience({ formControl, index, action }) {
	const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
		{
			control: formControl,
			name: `workExperience[${index}].description`,
		}
	);

	return (
		<WorkExperienceDiv>
			<TitleWithActionDiv>
				<h3>Work Experience #{index + 1}</h3>
				{action}
			</TitleWithActionDiv>

			<DoubleRowContainerDiv>
				<Controller
					name={`workExperience[${index}].company`}
					control={formControl}
					defaultValue={''}
					render={({ field }) => <TextInput label='Company' field={field} />}
				/>

				<Controller
					name={`workExperience[${index}].position`}
					control={formControl}
					defaultValue={''}
					render={({ field }) => <TextInput label='Position' field={field} />}
				/>

				<Controller
					name={`workExperience[${index}].startDate`}
					control={formControl}
					defaultValue={''}
					render={({ field }) => (
						<DatePickerField label='Start date' field={field} />
					)}
				/>
				<Controller
					name={`workExperience[${index}].endDate`}
					control={formControl}
					defaultValue={''}
					render={({ field }) => (
						<DatePickerField label='End date' field={field} />
					)}
				/>
			</DoubleRowContainerDiv>

			<p>Tasks description (recommend: minimum 3)</p>
			{fields.map((item, descIndex) => (
				<Controller
					key={descIndex}
					name={`workExperience[${index}].description[${descIndex}]`}
					control={formControl}
					defaultValue={''}
					render={({ field }) => (
						<TextInput
							label={`Task #${descIndex + 1}`}
							field={field}
							inputType='textArea'
							children={
								<Button type='secondary' onClick={() => remove(index)}>
									Delete
								</Button>
							}
						/>
					)}
				/>
			))}

			<Button type='secondary' onClick={() => append('')}>
				Add description
			</Button>
		</WorkExperienceDiv>
	);
}
