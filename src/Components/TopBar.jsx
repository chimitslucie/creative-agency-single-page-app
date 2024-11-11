import { useState } from "react"
import logo from "../Assets/Images/logo/logo.svg"
import Navbar from "./Navbar"

function TopBar() {

    const [showNav, setShowNav] = useState(false);

    const handleShowNav = () => {
        setShowNav(!showNav)
    }

    return (
        <div className={`topBar ${showNav ? 'showNav' : ""}`}>
            <img src={logo} alt="logo-creative" className="topBarLogo" />
            <Navbar />
            <button className="topBarBurger" onClick={handleShowNav}>
                <span className="burgerBar"></span>
                <span className="burgerBar"></span>
                <span className="burgerBar"></span>
            </button>
        </div>
    )
}

export default TopBar