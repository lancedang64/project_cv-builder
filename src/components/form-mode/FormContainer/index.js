import React from 'react';
import styled from 'styled-components';

const StyledFormContainer = styled.div`
	padding: 50px 0px 100px 0px;
	width: 100%;

	@media (min-width: 1439px) {
		padding: 50px 0;
	}

	@media (min-width: 1024px) {
		padding: 2.54cm;
		font-size: 15px;
	}
`;

const FormContainer = props => {
	return <StyledFormContainer>{props.children}</StyledFormContainer>;
};

export default FormContainer;
