import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { Controller, useForm, useFieldArray } from 'react-hook-form';
import TextInput from './components/TextInput';
import GeneralInfo from './components/GeneralInfo';

export const defaultValues = {
	fullName: '',
	jobTitle: '',
	contacts: ['', '', '', '', ''],
	profile: '',
	workExperience: [],
};

const formItemLayout = {
	layout: 'horizontal',
	labelCol: {
		span: 2,
	},
	wrapperCol: {
		span: 14,
	},
};

const buttonItemLayout = {
	wrapperCol: {
		span: 14,
		offset: 2,
	},
};

const FormCV = props => {
	const { handleSubmit, control, register, reset, watch, getValues } = useForm({
		defaultValues: defaultValues,
	});

	const onSubmit = data => console.log(data);

	return (
		<Form onSubmit={handleSubmit(onSubmit)} {...formItemLayout}>
			<GeneralInfo formControl={control} />

			<Form.Item {...buttonItemLayout}>
				<Button
					type='primary'
					onClick={() => console.log(JSON.stringify(getValues(), null, 2))}
				>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default FormCV;
