import * as yup from 'yup';

const validationSchema = yup.object().shape({
	fullName: yup.string().min(2, 'Too Short!').required('Required'),
	jobTitle: yup.string(),
});

export default validationSchema;
