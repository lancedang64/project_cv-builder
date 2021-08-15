import styled from 'styled-components';

export const DoubleRowContainerDiv = styled.div`
	@media (min-width: 769px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 0 50px;
		margin-bottom: 20px;
	}
`;

export const TitleWithActionDiv = styled.div`
	display: flex;
	gap: 20px;
	align-items: baseline;
`;

export const FieldsGroupCardDiv = styled.div`
	border: solid 1px #717684;
	box-shadow: 5px 10px #717684;
	margin-bottom: 40px;
	padding: 20px 20px;
`;
