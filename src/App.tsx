import './style/global.css'
import { SectionScroll } from './components/carousel/index';
import { Navigation } from './components/navigation/index';
import { AboutMe } from './pages/aboutMe/index';
import { AppProvider } from './providers/AppProvider';

function App() {
  return (
      <AppProvider>
        <Navigation />
        <SectionScroll>
              <AboutMe bg="#3F097D"/>
              <AboutMe bg="#3F097D"/>
              <AboutMe bg="#3F097D"/>
              <AboutMe bg="#3F097D"/>
        </SectionScroll>      
      </AppProvider>
  );
}

export default App;
