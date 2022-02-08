import './style/global.css'
import { useState, useEffect } from 'react'
import { Carousel } from './components/carousel/index';
import { Navigation } from './components/navigation/index';
import { AboutMe } from './pages/aboutMe/index';
import { AppProvider } from './providers/AppProvider';

function App() {
  const [index, setIndex] = useState(0);

  return (
      <AppProvider>
        <Navigation setIndex={setIndex}/>
        <Carousel newIndex={index}>
              <AboutMe />
              <AboutMe />
              <AboutMe />
              <AboutMe />
        </Carousel>      
      </AppProvider>
  );
}

export default App;
