import React from 'react';
import { Controller } from 'react-hook-form';

import TextInput from '../reusable/TextInput';
import { DoubleRowContainerDiv } from '../../../../../styles/custom-styled-components';

export default function GeneralInfoFields({ formControl, values }) {
	return (
		<div>
			<DoubleRowContainerDiv>
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
			</DoubleRowContainerDiv>

			<h3>Contacts (recommended: minimum 3)</h3>
			<DoubleRowContainerDiv>
				{values.contacts.map((field, index) => (
					<Controller
						key={index}
						name={`contacts[${index}]`}
						control={formControl}
						render={({ field }) => (
							<TextInput label={`Contact #${index + 1}`} field={field} />
						)}
					/>
				))}
			</DoubleRowContainerDiv>

			<Controller
				name='profile'
				control={formControl}
				render={({ field }) => (
					<TextInput
						label='Profile (recommended: minimum 300-400 words)'
						field={field}
						inputType='textArea'
					/>
				)}
			/>
		</div>
	);
}
