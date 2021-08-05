import React from 'react';
import { Formik, Field, ErrorMessage, FieldArray } from 'formik';
import { Form as AntForm, Input, Button, Radio } from 'antd';

import validationSchema from './utils/validationSchema';
import FormField from './components/FormField';

const FormCV = props => {
	const formikProps = {
		initialValues: {
			fullName: '',
			jobTitle: '',
			contacts: [],
			profile: '',
			workExperience: [],
		},
		validationSchema: validationSchema,
		onSubmit: values => {
			console.log(JSON.stringify(values, null, 2));
		},
	};

	const formItemLayout = {
		layout: 'horizontal',
		labelCol: {
			span: 4,
		},
		wrapperCol: {
			span: 14,
		},
	};

	const buttonItemLayout = {
		wrapperCol: {
			span: 14,
			offset: 4,
		},
	};

	return (
		<Formik
			{...formikProps}
			render={({ values, errors, touched, handleChange, handleSubmit }) => (
				<AntForm {...formItemLayout}>
					<FormField
						label='Full Name'
						inputProps={{
							name: 'fullName',
							value: values.fullName,
							handleChange: handleChange,
						}}
					/>

					<FormField
						label='Job Title'
						inputProps={{
							name: 'jobTitle',
							value: values.jobTitle,
							handleChange: handleChange,
						}}
					/>

					<AntForm.Item {...buttonItemLayout}>
						<Button type='primary' onClick={handleSubmit}>
							Submit
						</Button>
					</AntForm.Item>
				</AntForm>
			)}
		/>
	);
};

export default FormCV;
