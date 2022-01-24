import './style.css';
import "@fontsource/quicksand";
import Header from "./Header"
import Slideshow from './Slideshow'
import { SlideshowImages } from './SlideshowImages'


function Home() {
  return (
    <div>
      <Header />
      <Slideshow slides={SlideshowImages} />
      <div>

      </div>
    </div>
  );
}

export default Home;
