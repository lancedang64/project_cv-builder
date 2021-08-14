import React from 'react';
import { Controller, useFieldArray } from 'react-hook-form';
import { Button } from 'antd';

import TextInput from '../reusable/TextInput';

export default function SkillListFields({ formControl }) {
	const { fields, append, remove } = useFieldArray({
		control: formControl,
		name: 'skills',
	});
	return (
		<>
			<div>
				{fields.map((item, index) => (
					<div key={item.id}>
						<Controller
							name={`skills[${index}]`}
							control={formControl}
							defaultValue={''}
							render={({ field }) => (
								<TextInput
									label={`Skill #${index + 1}`}
									field={field}
									inputType='textArea'
									children={
										<Button type='button' onClick={() => remove(index)}>
											Delete
										</Button>
									}
								/>
							)}
						/>
					</div>
				))}

				<Button type='secondary' onClick={() => append('')}>
					Add skill
				</Button>
			</div>
		</>
	);
}
