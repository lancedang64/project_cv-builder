import React from 'react';
import { Formik, Field, ErrorMessage, FieldArray } from 'formik';
import { Form as AntForm, Input, Button, Radio } from 'antd';

const FormCV = props => {
	const formikProps = {
		initialValues: {
			fullName: '',
			jobTitle: '',
			contacts: [],
			profile: '',
			workExperience: [],
		},
		validationSchema: {},
		onSubmit: values => {
			setTimeout(() => {
				alert(JSON.stringify(values, null, 2));
			}, 400);
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
			render={({ values }) => (
				<AntForm {...formItemLayout}>
					<AntForm.Item label='Field A'>
						<Input placeholder='input placeholder' />
					</AntForm.Item>
					<AntForm.Item label='Field B'>
						<Input placeholder='input placeholder' />
					</AntForm.Item>
					<AntForm.Item {...buttonItemLayout}>
						<Button type='primary'>Submit</Button>
					</AntForm.Item>
				</AntForm>
			)}
		/>
	);
};

export default FormCV;
