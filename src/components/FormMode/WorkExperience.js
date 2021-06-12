import React from 'react';
import CompulsoryField from './CompulsoryField';

function WorkExperience(props) {
	const { workExpData, handleOnChange } = props;
	return (
		<div>
			<CompulsoryField
				label='Start Date'
				name='startDate'
				value={workExpData.startDate}
				handleOnChange={handleOnChange}
			/>
			<CompulsoryField
				label='End Date'
				name='endDate'
				value={workExpData.endDate}
				handleOnChange={handleOnChange}
			/>
			<CompulsoryField
				label='Position'
				name='position'
				value={workExpData.position}
				handleOnChange={handleOnChange}
			/>
			<CompulsoryField
				label='Company'
				name='company'
				value={workExpData.company}
				handleOnChange={handleOnChange}
			/>
			<CompulsoryField
				type='textArea'
				label='Description'
				name='description'
				value={workExpData.description}
				handleOnChange={handleOnChange}
			/>
		</div>
	);
}

export default WorkExperience;
