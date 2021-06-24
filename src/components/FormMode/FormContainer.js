import React from 'react';
import CompulsoryField from './CompulsoryField';
import Section from './Section';
import WorkExperience from './WorkExperience';

function FormContainer(props) {
	const { fullName, jobTitle, contacts, profile, workExperience } =
		props.personData;

	const contactFields = contacts.map((contact, index) => {
		return (
			<CompulsoryField
				key={index}
				id={`contact${index}`}
				label={`Contact #${index + 1}`}
				name={`contacts`}
				value={contact}
				handleOnChange={props.handleOnChange}
			/>
		);
	});

	const workExperienceFields = workExperience.map((experience, index) => {
		return (
			<WorkExperience
				key={index}
				index={index}
				workExpData={experience}
				handleOnChange={props.handleOnChange}
			/>
		);
	});

	return (
		<form className='FormContainer'>
			<Section name='Info'>
				<CompulsoryField
					label='Full Name'
					name='fullName'
					value={fullName}
					handleOnChange={props.handleOnChange}
				/>
				<CompulsoryField
					label='Job Title'
					name='jobTitle'
					value={jobTitle}
					handleOnChange={props.handleOnChange}
				/>
				{contactFields}
			</Section>
			<Section name='Profile'>
				<CompulsoryField
					type='textArea'
					className='profile'
					name='profile'
					value={profile}
					handleOnChange={props.handleOnChange}
				/>
			</Section>
			<Section name='Work Experiences' children={workExperienceFields} />
		</form>
	);
}

export default FormContainer;
