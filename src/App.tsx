import React from 'react';
import './style/global.css'
import { ThemeProvider } from 'styled-components';
import { SectionScroll } from './pages/sectionScroll/index';
import { AppWrap } from './style/globalComponents';
import { Navigation } from './components/navigation/index';
import { AboutMe } from './pages/aboutMe/index';
import { AdminApp } from './pages/adminApp/index';
import { themeLight, themeDark } from './style/theme/colors';
import { typography } from './style/theme/typography';
console.log(typography);

function App() {
  return (
    <ThemeProvider theme={{scheme: themeLight, typography: typography}}>
      <AppWrap>
        <Navigation />
        <SectionScroll>
              <AboutMe />
              <AdminApp />
        </SectionScroll>      
      </AppWrap>
    </ThemeProvider>
  );
}

export default App;
