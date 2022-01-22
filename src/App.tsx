import React from 'react';
import { SectionScroll } from './components/sectionScroll/index';
import './style/global.css'
import { AboutMe } from './components/aboutMe/index';
import { ProjectReactNative } from './components/projectReactNative/index';

function App() {
  return (
    <SectionScroll>
          <AboutMe />
          <ProjectReactNative />
          <AboutMe />
          <ProjectReactNative />
    </SectionScroll>      
  );
}

export default App;
