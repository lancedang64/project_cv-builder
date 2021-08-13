import React from 'react';
import styled from 'styled-components';

export const SectionStyled = styled.div`
	box-shadow: 5px 5px #42454d;
	border: solid 1px #42454d;
	width: 50%;
	margin: 0 auto 40px auto;
	padding: 30px;
`;

export default function Section({ name, children }) {
	return (
		<SectionStyled>
			<h1>{name}</h1>
			{children}
		</SectionStyled>
	);
}
