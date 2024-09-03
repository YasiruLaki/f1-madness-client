import { React, useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faHeart, faShoppingCart, faUser, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../fonts.css"

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-black text-white flex justify-between items-center nav-bar">
            <div className="flex items-center">
                <span className="nav-bar-txt-1">F1MADNESS</span>
                <span className="nav-bar-txt-2 px-1">Store</span>
            </div>


            <div className="950:flex hidden space-x-20">
                <div className="hidden md:flex space-x-6">
                    <a href="/" className="nav-bar-txt-1 hover:text-red-600">
                        HOME
                    </a>
                    <a href="/hoodies" className="nav-bar-txt-1 hover:text-red-600">
                        HOODIES
                    </a>
                    <a href="/tshirts" className="nav-bar-txt-1 hover:text-red-600">
                        TSHIRTS
                    </a>
                </div>

                {/* Icons Section */}
                <div className="hidden md:flex space-x-8 items-center">
                    <button className="hover:text-red-600">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                    <button className="hover:text-red-600">
                        <FontAwesomeIcon icon={faHeart} />
                    </button>
                    <button className="hover:text-red-600 relative">
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <span className="nav-bar-txt-1 px-2">CART</span>
                        <span className="nav-bar-txt-1 text-black bg-white rounded-full px-1">2</span>
                    </button>
                    <button className="hover:text-red-600">
                        <FontAwesomeIcon icon={faUser} />
                    </button>
                </div>

            </div>

            {/* Mobile Menu Button */}
            <div className="950:hidden">
                <button onClick={toggleMobileMenu} className="focus:outline-none">
                    <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="z-50 absolute top-14 left-0 w-full bg-black text-white flex flex-col items-center space-y-4 py-4 950:hidden">
                    <a href="/" className="hover:text-red-600" onClick={toggleMobileMenu}>
                        HOME
                    </a>
                    <a href="/hoodies" className="hover:text-red-600" onClick={toggleMobileMenu}>
                        HOODIES
                    </a>
                    <a href="/tshirts" className="hover:text-red-600" onClick={toggleMobileMenu}>
                        TSHIRTS
                    </a>
                    <div className="flex space-x-6 items-center">
                    <button className="hover:text-red-600">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                    <button className="hover:text-red-600">
                        <FontAwesomeIcon icon={faHeart} />
                    </button>
                    <button className="hover:text-red-600 relative">
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <span className="nav-bar-txt-1 px-2">CART</span>
                        <span className="nav-bar-txt-1 text-black bg-white rounded-full px-1">2</span>
                    </button>
                    <button className="hover:text-red-600">
                        <FontAwesomeIcon icon={faUser} />
                    </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;