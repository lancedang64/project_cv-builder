import React from 'react';
import { Controller } from 'react-hook-form';
import TextInput from './TextInput';

export default function Education({ formControl, index, children }) {
	return (
		<>
			<h3>Degree #{index + 1}</h3>
			{children}

			<Controller
				name={`education[${index}].degree`}
				control={formControl}
				defaultValue={''}
				render={({ field }) => <TextInput label='Degree' field={field} />}
			/>

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
		</>
	);
}
