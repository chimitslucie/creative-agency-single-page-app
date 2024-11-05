import logo from "../Assets/Images/logo/logo.svg"
import Navbar from "./Navbar"

function TopBar() {
    return (
        <div className="topBar">
            <img src={logo} alt="logo-creative" className="topBarLogo" />
            <Navbar />
        </div>
    )
}

export default TopBar