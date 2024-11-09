import waveRed from "../Assets/Images/Waves/wave-red.svg";

function Footer() {
    return (
        <div className="footer">
            <img src={waveRed} alt="wave-red" className="footerWave" />
            <div className="footerContent">
                <p className="footerContentText">
                    Let's build something great together.
                </p>
                <button className="footerContentBtn">
                    Schedule a Call
                </button>
            </div>
        </div>
    )
}

export default Footer