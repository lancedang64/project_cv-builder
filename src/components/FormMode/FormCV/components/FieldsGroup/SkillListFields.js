import React from 'react';
import { Controller, useFieldArray } from 'react-hook-form';
import { Button } from 'antd';

import TextInput from '../TextInput';

export default function SkillListFields({ formControl }) {
	const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
		{
			control: formControl,
			name: 'skills',
		}
	);
	return (
		<>
			<h2>Skill List (recommended: minimum 3)</h2>
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
