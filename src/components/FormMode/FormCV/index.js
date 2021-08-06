import React from 'react';
import { Form as AntForm, Input, Button, Radio } from 'antd';

const FormCV = props => {
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
		<AntForm {...formItemLayout}>
			<AntForm.Item {...buttonItemLayout}>
				<Button type='primary' onClick={() => console.log('submitted form')}>
					Submit
				</Button>
			</AntForm.Item>
		</AntForm>
	);
};

export default FormCV;
