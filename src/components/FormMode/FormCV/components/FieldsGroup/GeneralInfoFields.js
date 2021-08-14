import React from 'react';
import { Controller } from 'react-hook-form';
import { defaultValues } from '../../index';

import TextInput from '../reusable/TextInput';
import { DoubleRowContainerDiv } from '../../../../../styles/StyledComponents';

export default function GeneralInfoFields({ formControl }) {
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
			</DoubleRowContainerDiv>

			<Controller
				name='profile'
				control={formControl}
				render={({ field }) => (
					<TextInput
						label='Profile (recommended: minimum 50-80 words)'
						field={field}
						inputType='textArea'
					/>
				)}
			/>
		</div>
	);
}
