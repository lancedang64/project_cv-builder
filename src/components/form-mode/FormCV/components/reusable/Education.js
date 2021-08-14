import React from 'react';
import { Controller } from 'react-hook-form';
import {
	DoubleRowContainerDiv,
	FieldsGroupCardDiv,
	TitleWithActionDiv,
} from '../../../../../styles/custom-styled-components';
import TextInput from './TextInput';

export default function Education({ formControl, index, action }) {
	return (
		<FieldsGroupCardDiv>
			<TitleWithActionDiv>
				<h3>Degree #{index + 1}:</h3>
				<Controller
					name={`education[${index}].degree`}
					control={formControl}
					defaultValue={''}
					render={({ field }) => <TextInput field={field} />}
				/>
				{action}
			</TitleWithActionDiv>

			<DoubleRowContainerDiv>
				<Controller
					name={`education[${index}].school`}
					control={formControl}
					defaultValue={''}
					render={({ field }) => <TextInput label='School' field={field} />}
				/>

				<Controller
					name={`education[${index}].yearOfGraduation`}
					control={formControl}
					defaultValue={''}
					render={({ field }) => (
						<TextInput label='Year of Graduation' field={field} />
					)}
				/>
			</DoubleRowContainerDiv>
		</FieldsGroupCardDiv>
	);
}
