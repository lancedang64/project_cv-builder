import { Button } from 'antd';
import React from 'react';
import styled from 'styled-components';

export const SectionStyled = styled.div`
	box-shadow: 10px 10px #42454d;
	background-color: white;
	border: solid 2px #42454d;
	width: 70%;
	margin: 0 auto 40px auto;
	padding: 30px;
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
