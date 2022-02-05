import React from 'react';
import './style/global.css'
import { ThemeProvider } from 'styled-components';
import { SectionScroll } from './components/carousel/index';
import { AppWrap } from './style/componentsDefault';
import { Navigation } from './components/navigation/index';
import { AboutMe } from './pages/aboutMe/index';
import { themeLight, themeDark } from './style/theme/colors';
import { typography } from './style/theme/typography';

function App() {
  return (
    <ThemeProvider theme={{scheme: themeLight, typography: typography}}>
      <AppWrap>
        <Navigation />
        <SectionScroll>
              <AboutMe bg="#280F34"/>
              <AboutMe bg="#B30753"/>
              <AboutMe bg="#13293D"/>
              <AboutMe bg="#FFAF87"/>
        </SectionScroll>      
      </AppWrap>
    </ThemeProvider>
  );
}

export default App;
