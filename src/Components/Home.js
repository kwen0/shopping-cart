import './style.css';
import '@fontsource/quicksand';
import Header from './Header';
import Slideshow from './Slideshow';
import { SlideshowImages } from './SlideshowImages';
import Content from './Content'
import Footer from './Footer'

function Home() {
  return (
    <div>
      <Header />
      <Slideshow slides={SlideshowImages} />
      <Content />
      <Footer />
    </div>
  );
}

export default Home;
