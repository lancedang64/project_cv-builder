import React from 'react';
import styled from 'styled-components';

const StyledFormContainer = styled.div`
	padding: 2.54cm;
	width: 100%;
	background-color: #f7f7f2;
	font-size: 15px;
	overflow-y: scroll;
`;

const FormContainer = props => {
	return <StyledFormContainer>{props.children}</StyledFormContainer>;
};

export default FormContainer;
