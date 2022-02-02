import './style/global.css'
import { ThemeProvider } from 'styled-components';
import { SectionScroll } from './components/sectionScroll/index';
import { AppWrap } from './style/globalComponents';
import { Navigation } from './components/navigation/index';
import { AboutMe } from './pages/aboutMe/index';
import { themeLight } from './style/theme/colors';
import { typography } from './style/theme/typography';

function App() {
  return (
    <ThemeProvider theme={{scheme: themeLight, typography: typography}}>
      <AppWrap>
        <Navigation />
        <SectionScroll>
              <AboutMe />
              <AboutMe />
        </SectionScroll>      
      </AppWrap>
    </ThemeProvider>
  );
}

export default App;
