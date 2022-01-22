import React from 'react';
import { SectionScroll } from './pages/sectionScroll/index';
import './style/global.css'
import { AppWrap } from './style/globalComponents';
import { Navigation } from './components/navigation/index';
import { AboutMe } from './pages/aboutMe/index';
import { AdminApp } from './pages/adminApp/index';

function App() {
  return (
    <AppWrap>
      <Navigation />
      <SectionScroll>
            <AboutMe />
            <AdminApp />
      </SectionScroll>      
    </AppWrap>
  );
}

export default App;
