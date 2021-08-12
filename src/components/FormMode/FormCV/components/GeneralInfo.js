import React from 'react';
import { Controller } from 'react-hook-form';
import { defaultValues } from '../index';

import TextInput from './TextInput';

export default function GeneralInfo({ formControl }) {
	return (
		<>
			<h2>General Information</h2>
			<div>
				<Controller
					name='fullName'
					control={formControl}
					render={({ field }) => <TextInput label='Full Name' field={field} />}
				/>
				<Controller
					name='jobTitle'
					control={formControl}
					render={({ field }) => <TextInput label='Job Title' field={field} />}
				/>
				<h3>Contacts (recommended: minimum 3)</h3>
				{defaultValues.contacts.map((field, index) => (
					<Controller
						key={index}
						name={`contacts[${index}]`}
						control={formControl}
						render={({ field }) => (
							<TextInput label={`Contact #${index + 1}`} field={field} />
						)}
					/>
				))}
				<p>Profile (recommended: minimum 50-80 words)</p>
				<Controller
					name='profile'
					control={formControl}
					render={({ field }) => (
						<TextInput field={field} inputType='textArea' />
					)}
				/>
			</div>
		</>
	);
}
