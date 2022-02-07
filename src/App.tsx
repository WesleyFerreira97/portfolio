import './style/global.css'
import { Carousel } from './components/carousel/index';
import { Navigation } from './components/navigation/index';
import { AboutMe } from './pages/aboutMe/index';
import { AppProvider } from './providers/AppProvider';

function App() {
  return (
      <AppProvider>
        <Navigation />
        <Carousel>
              <AboutMe bg="#3F097D"/>
              <AboutMe bg="#3F097D"/>
              <AboutMe bg="#3F097D"/>
              <AboutMe bg="#3F097D"/>
        </Carousel>      
      </AppProvider>
  );
}

export default App;
