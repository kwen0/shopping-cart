import photo from "./images/content.png"

function Content() {
    return (
        <div className="content">
            <div className="content-text">
                <h2>HANDCRAFTED AND ETHICALLY SOURCED</h2>
                <p>All of our jewelry and packaging are ethically sourced and eco-friendly. We use recycled and responsibly mined gold as raw material. All our our designs are handmade in-house with the purpose of adding sparkle to your everyday moments.</p>
                <p>Whether you’re looking for a gift for your loved one or treating yourself, Dainty has the perfect item for you.</p>
                <br></br>
                <h2>FREE SHIPPING ON ALL ORDERS</h2>
                <p>Carbon neutral shipping, on us. We've partnered with DHL Go Green to ship our packages sustainably.</p>
            </div>
            <img src={photo} alt="jewelry" className="content-image" />
        </div>
    );
}

export default Content;
