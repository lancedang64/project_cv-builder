import React from 'react';
import { Page, Text, View, Document } from '@react-pdf/renderer';
import styles from '../../styles/PDFStyles';

// Create Document Component
function DocumentCV(props) {
	const {
		fullName,
		jobTitle,
		contacts,
		profile,
		skills,
		workExperience,
		education,
	} = props.personData;

	const contactNodes = contacts.map((contact, index) => {
		if (contact === '') return null;
		return (
			<Text key={index} style={styles.contact}>
				{contact}
			</Text>
		);
	});

	const skillNodes = skills.map((skill, index) => {
		if (skill === '') return null;
		return (
			<Text key={index} style={styles.skill}>
				- {skill}
			</Text>
		);
	});

	const workExperienceNodes = workExperience.map((exp, index) => {
		const descriptionNodes = exp.description.map((task, index) => {
			if (task === '') return null;
			return (
				<Text key={index} style={styles.task}>
					- {task}
				</Text>
			);
		});

		return (
			<View key={index} style={styles.workExperience}>
				<View style={styles.row}>
					<Text style={styles.position}>{exp.position}</Text>
					<Text style={styles.company}>{exp.company}</Text>
					<Text>
						{exp.startDate} - {exp.endDate}
					</Text>
				</View>
				<View style={styles.description}>{descriptionNodes}</View>
			</View>
		);
	});

	const educationNodes = education.map((edu, index) => (
		<View key={index} style={styles.education}>
			<View style={styles.row}>
				<Text style={styles.degre}>{edu.degree}</Text>
				<Text style={styles.yearOfGraduation}>{edu.yearOfGraduation}</Text>
			</View>
			<Text style={styles.school}>{edu.school}</Text>
		</View>
	));

	return (
		<Document>
			<Page size='A4' style={styles.page}>
				<View style={styles.headerSection}>
					<View>
						<Text style={styles.fullName}>{fullName}</Text>
						<Text style={styles.jobTitle}>{jobTitle}</Text>
					</View>
					<View style={styles.contacts}>{contactNodes}</View>
				</View>
				<View style={styles.section}>
					<Text style={styles.heading}>Profile</Text>
					<Text>{profile}</Text>
				</View>
				<View style={styles.section}>
					<Text style={styles.heading}>Skills</Text>
					{skillNodes}
				</View>
				<View style={[styles.section, { marginBottom: 10 }]}>
					<Text style={styles.heading}>Work Experience</Text>
					{workExperienceNodes}
				</View>
				<View style={styles.section}>
					<Text style={styles.heading}>Education</Text>
					{educationNodes}
				</View>
			</Page>
		</Document>
	);
}

export default DocumentCV;
