import React from 'react';
import styled from 'styled-components';

const StyledFormContainer = styled.div`
	padding: 2.54cm;
	width: 80%;
	background-color: white;
	font-size: 15px;
	overflow: scroll;
`;

const FormContainer = props => {
	return <StyledFormContainer>{props.children}</StyledFormContainer>;
};

export default FormContainer;
