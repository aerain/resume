import React, { Fragment } from 'react';
import '../styles/App.css';
import { Profile, Career, Skill, Project, Presentation } from '.';
import config from '../config.js';

function App() {
  return (
    <Fragment>
      <Profile 
        {...config.profile}
      />
      <Skill 
        skills={config.skills}
      />
      <Career 
        careers={config.careers}
      />
      <Presentation 
        presentations={config.presentations}
      />
      <Project 
        projects={config.projects}
      />
    </Fragment>
  );
}

export default App;
