import waveRed from "../Assets/Images/Waves/wave-red.svg";

function ImageText() {
    return (
        <div className="imageText">
            <div className="imageTextImg"></div>
            <img src={waveRed} alt="wave-red" className="imageTextWave" />
            <div className="imageTextContent">
                <h2 className="imageTextContentTitle">
                    <span className="imageTextContentSpan">Design</span> is strategic.
                </h2>
                <p className="imageTextContentText">
                    "A well-crafted design strategy consistently produces desired outcomes and brand awareness.
                    We are firm believers that success lies in creative collaboration with our clients."
                </p>
                <button className="imageTextContentBtn">
                    Schedule a Call
                </button>
            </div>
        </div>
    )
}

export default ImageText