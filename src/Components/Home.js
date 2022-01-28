import './style.css';
import '@fontsource/quicksand';
import Header from './Header';
import Slideshow from './Slideshow';
import { SlideshowImages } from './SlideshowImages';
import Content from './Content'
import Footer from './Footer'

function Home(props) {
  const { bag, bagCount } = props
  return (
    <div>
      <Header bag={bag} bagCount={bagCount} />
      <Slideshow slides={SlideshowImages} />
      <Content />
      <Footer />
    </div>
  );
}

export default Home;
