import './style.css';
import "@fontsource/quicksand";
import Header from "./Header"
import homePhoto from "./home.png"

function Home() {
  return (
    <div>
      <Header />
      <div>
        <img src={homePhoto} className="home-photo" alt="jewelry" />
        <div className="shopNewArrivals">SHOP NEW ARRIVALS</div>
      </div>
    </div>
  );
}

export default Home;
