import Header from './Header';
import Footer from './Footer';

function Comingsoon(props) {
    const { bag } = props
    return (
        <div>
            <Header bag={bag} />
            <div className="comingsoon">Coming soon</div>
            <Footer />
        </div>
    );
}

export default Comingsoon;