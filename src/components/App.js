import React, { Fragment } from 'react';
import '../styles/App.css';
import { Profile, Career, Skill, Project, Presentation, Education } from '.';
import config from '../config.js';

function App() {
  return (
    <Fragment>
      <Profile 
        {...config.profile}
      />
      { config.skills && Array.isArray(config.skills) && <Skill skills={config.skills} />}
      { config.educations && Array.isArray(config.educations) && <Education educations={config.educations} /> } 
      { config.careers && Array.isArray(config.careers) && <Career careers={config.careers} /> } 
      { config.presentations && Array.isArray(config.presentations) && <Presentation presentations={config.presentations} /> }
      { config.projects && Array.isArray(config.projects) && <Project projects={config.projects} /> }
    </Fragment>
  );
}

export default App;
