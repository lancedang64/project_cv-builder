import React from 'react';
import CompulsoryField from './CompulsoryField';

function WorkExperience(props) {
	const { index, workExpData, handleOnChange } = props;
	return (
		<div className='WorkExperience'>
			<h3>
				Job #{index + 1} {index === 0 ? '(Your most recent job)' : null}
			</h3>
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
			{workExpData.description.map((task, index) => {
				return (
					<CompulsoryField
						key={index}
						type='textArea'
						className='descriptionTask'
						label={`Task ${index + 1}`}
						name='description'
						value={task}
						handleOnChange={handleOnChange}
					/>
				);
			})}
		</div>
	);
}

export default WorkExperience;
