import React from 'react';
import { Controller, useFieldArray } from 'react-hook-form';
import { Button } from 'antd';
import TextInput from './TextInput';

export default function WorkExperience({ formControl, index, children }) {
	const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
		{
			control: formControl,
			name: `workExperience[${index}].description`,
		}
	);

	return (
		<>
			<h3>Work Experience #{index + 1}</h3>
			{children}

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
				render={({ field }) => <TextInput label='Start date' field={field} />}
			/>
			<Controller
				name={`workExperience[${index}].endDate`}
				control={formControl}
				defaultValue={''}
				render={({ field }) => <TextInput label='End date' field={field} />}
			/>

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
		</>
	);
}
