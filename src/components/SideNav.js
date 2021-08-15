import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import styled from 'styled-components';
import { PDFDownloadLink } from '@react-pdf/renderer';

import templateData from '../templateData';
import { defaultData } from './App';
import DocumentCV from './DocumentCV/DocumentCV';

const MySwal = withReactContent(Swal);

const SideNavStyled = styled.div`
	width: 250px;
	background-color: #111;
	overflow-x: hidden;
	padding-top: 150px;
`;

const SideNavSpan = styled.span`
	padding: 6px 8px 6px 16px;
	text-decoration: none;
	font-size: 25px;
	color: #818181;
	display: block;
	margin-bottom: 50px;

	&:hover {
		color: #f1f1f1;
		cursor: pointer;
	}
`;

function SideNav(props) {
	const handleReset = action => {
		MySwal.fire({
			icon: 'warning',
			title: 'Are you sure?',
			html: 'This will replace/clear all fields in the form',
			showCancelButton: true,
			confirmButtonText: `Ok, I am sure`,
		}).then(result => {
			if (result.isConfirmed) {
				props.setPersonData(action === 'reset' ? defaultData : templateData);
			}
		});
	};

	const handleMode = () => {
		props.setEditMode(prev => !prev);
	};

	return (
		<SideNavStyled>
			<SideNavSpan onClick={handleMode}>
				{props.isEditMode ? 'Preview' : 'Edit'}
			</SideNavSpan>

			<SideNavSpan>
				<PDFDownloadLink
					document={<DocumentCV personData={props.personData} />}
					fileName={`${props.personData.fullName}-CV.pdf`}
				>
					{({ loading }) => (loading ? 'Loading document...' : 'Download PDF')}
				</PDFDownloadLink>
			</SideNavSpan>

			{props.isEditMode ? (
				<SideNavSpan onClick={() => handleReset('fillWithTemplate')}>
					Fill with template
				</SideNavSpan>
			) : null}

			{props.isEditMode ? (
				<SideNavSpan onClick={() => handleReset('reset')}>
					Reset form
				</SideNavSpan>
			) : null}
		</SideNavStyled>
	);
}

export default SideNav;
