import './style/fonts.css'
import { useState } from 'react'
import { Carousel } from './components/carousel/index';
import { Navigation } from './components/navigation/index';
import { AboutMe } from './pages/aboutMe/index';
import { Siam } from './pages/siam/index';
import { AluraCord } from './pages/aluracord/index';
import { AppFilmes } from './pages/appfilmes/index';
import { AppProvider } from './providers/AppProvider';
import { GlobalStyle } from './style/global';

function App() {
  const [index, setIndex] = useState(0);

  return (
    <AppProvider>
      <GlobalStyle />
      <Navigation setIndex={setIndex} />
      <Carousel newIndex={index}>
        <AboutMe />
        <Siam />
        <AluraCord />
        <AppFilmes />
      </Carousel>
    </AppProvider>
  );
}

export default App;
