import { Font, StyleSheet } from '@react-pdf/renderer';

Font.register({
	family: 'Helvetica-Bold',
	src: './fonts/Helvetica-Bold-Font.ttf',
});

export default StyleSheet.create({
	page: {
		padding: '2.54cm',
		backgroundColor: '#FFFFFF',
		fontFamily: 'Helvetica',
		fontSize: '11pt',
	},

	fullName: {
		fontSize: '30pt',
	},
	jobTitle: {
		fontSize: '15pt',
	},
	contacts: {
		position: 'absolute',
		textAlign: 'right',
	},
	headerSection: {
		marginBottom: '40',
	},
	section: {
		marginBottom: '20',
	},
	heading: {
		fontFamily: 'Helvetica-Bold',
		fontSize: '15pt',
		marginBottom: '5',
		color: '#146699',
	},
	contact: {
		marginBottom: '5',
	},
	skill: {
		marginBottom: '5',
	},
	workExperience: {
		marginBottom: '10',
	},
	row: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: '5',
	},
	position: {
		fontFamily: 'Helvetica-Bold',
	},
	task: {
		marginBottom: '5',
	},
	education: {
		marginBottom: '10',
	},
});
