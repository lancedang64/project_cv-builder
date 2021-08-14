import React from 'react';
import { useFieldArray } from 'react-hook-form';
import { Button } from 'antd';

import WorkExperience from '../WorkExperience';

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
