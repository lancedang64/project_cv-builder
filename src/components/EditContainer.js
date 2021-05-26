import React from 'react';
import CVHeader from './CVHeader';
import CVSection from './CVSection';

class EditContainer extends React.Component {
  render() {
    //   const {  } = this.props;

    return (
      <div className="EditContainer">
        <CVHeader person={TEMPLATE}/>
        <CVSection />
      </div>
    );
  }
}

const TEMPLATE = {
    name: 'John Smith',
    jobTitle: 'Software Developer',
    contacts: [
      'Sydney, Australia',
      '+64 10 101 101',
      'johnsmith@gmail.com',
      'linkedin.com/in/john-smith-420/',
      'github.com/john-smith'
    ],
  };  

export default EditContainer;
