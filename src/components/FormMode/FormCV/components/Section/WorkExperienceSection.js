import React from 'react';
import { Controller, useFieldArray } from 'react-hook-form';
import { Button } from 'antd';

import WorkExperience from '../WorkExperience';

export const workExperienceTemplate = {
	startDate: '',
	endDate: '',
	position: '',
	company: '',
	description: ['', '', ''],
};

export default function WorkExperienceSection({ formControl }) {
	const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
		{
			control: formControl,
			name: 'workExperience',
		}
	);
	return (
		<>
			<h2>Work Experience (recommended: minimum 2)</h2>
			<div>
				{fields.map((item, index) => (
					<div key={item.id}>
						<WorkExperience
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

				<Button type='secondary' onClick={() => append(workExperienceTemplate)}>
					Add a Company
				</Button>
			</div>
		</>
	);
}
