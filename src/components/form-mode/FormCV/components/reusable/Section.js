import { Button } from 'antd';
import React from 'react';
import styled from 'styled-components';

export const SectionStyled = styled.div`
	box-shadow: 10px 10px #42454d;
	background-color: white;
	border: solid 2px #42454d;
	padding: 30px;
	margin: 0 auto 40px auto;
	width: 90%;

	@media (min-width: 1024px) {
		max-width: 100%;
	}

	@media (min-width: 1441px) {
		max-width: 70%;
	}
`;

const H1Styled = styled.h1`
	display: inline-block;
	margin-right: 20px;
`;

const SaveChangesButton = styled(Button)`
	margin-top: 20px;
`;

export default function Section({ title, subtitle, handleSubmit, children }) {
	return (
		<SectionStyled>
			<H1Styled>{title}</H1Styled>
			<span>{subtitle}</span>
			{children}
			<SaveChangesButton type='primary' onClick={handleSubmit}>
				Save Changes
			</SaveChangesButton>
		</SectionStyled>
	);
}
