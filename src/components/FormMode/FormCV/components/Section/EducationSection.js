import React from 'react';
import { Controller, useFieldArray } from 'react-hook-form';
import { Button } from 'antd';

import Education from '../Education';

export const educationTemplate = {
	degree: '',
	school: '',
	yearOfGraduation: '',
};

export default function EducationSection({ formControl }) {
	const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
		{
			control: formControl,
			name: 'education',
		}
	);
	return (
		<>
			<h2>Education (recommended: minimum 1)</h2>
			<div>
				{fields.map((item, index) => (
					<div key={item.id}>
						<Education
							index={index}
							formControl={formControl}
							children={
								<Button type='button' onClick={() => remove(index)}>
									Delete
								</Button>
							}
						/>
					</div>
				))}

				<Button type='secondary' onClick={() => append(educationTemplate)}>
					Add a degree
				</Button>
			</div>
		</>
	);
}
