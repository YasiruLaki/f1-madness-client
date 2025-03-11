import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faHeart, faShoppingCart, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../fonts.css";
import { useCart } from '../contexts/CartContext';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { cart } = useCart();
    const [search, setSearch] = useState('');
    const [openSearch, setOpenSearch] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const openSearchBar = () => {
        setOpenSearch(!openSearch);  // Toggle the search bar visibility
    };


    const handleSearch = (e) => {
        e.preventDefault();
        window.location.href = `/search?query=${search}`;
    };

    return (
        <div>
            <nav className="bg-black text-white flex items-center nav-bar justify-between w-full">
                <a href="/">
                    <div className="flex items-center">
                        <span className="font-bai-jamjuree font-700 text-[12px] mm:text-[16px]">PITLANE PERFORMANCE</span>
                    </div>
                </a>

                <div>
                    <div className="hidden 950:flex space-x-5 950:justify-center">
                        <a href="/collections?collection=Hoodies" className="font-bai-jamjuree font-600 hover:text-red">HOODIES</a>
                        <a href="/collections?collection=Tshirts" className="font-bai-jamjuree font-600 hover:text-red">TSHIRTS</a>
                        <a href="/contact" className="font-bai-jamjuree font-600 hover:text-red">CONTACT</a>
                    </div>
                </div>

                <div className="950:flex hidden space-x-20 950:justify-end">

                    {/* Icons Section */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <button className="hover:text-red" onClick={openSearchBar}>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                        <button className="hover:text-red">
                            <FontAwesomeIcon icon={faHeart} />
                        </button>
                        <a href="/cart" className="hover:text-red relative">
                            <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                            <span className="font-bai-jamjuree font-600 text-white bg-red rounded-full px-1">{cart.length}</span>
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="950:hidden">
                    <button onClick={() => { toggleMobileMenu(); setOpenSearch(false) }} className="focus:outline-none">
                        <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
                    </button>

                    <div className="fixed bottom-6 right-6 z-50">
                        <a href="/cart" className="bg-red p-2 px-4 rounded-full text-white shadow-lg hover:bg-red-700 transition flex items-center">
                            <FontAwesomeIcon icon={faShoppingCart} />
                            <span className="font-bai-jamjuree font-600 text-white rounded-full px-1">{cart.length}</span>
                        </a>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div>
                    <div className="z-50 absolute top-[56px] left-0 w-full bg-black text-white flex flex-col items-center space-y-4 py-4 950:hidden">
                        <a href="/collections?collection=Hoodies" className="font-bai-jamjuree font-600 hover:text-red" onClick={toggleMobileMenu}>HOODIES</a>
                        <a href="/collections?collection=Tshirts" className="font-bai-jamjuree font-600 hover:text-red" onClick={toggleMobileMenu}>TSHIRTS</a>
                        <a href="/collections?collection=Caps" className="font-bai-jamjuree font-600 hover:text-red" onClick={toggleMobileMenu}>CAPS</a>
                        <a href="/collections?collection=Posters" className="font-bai-jamjuree font-600 hover:text-red" onClick={toggleMobileMenu}>POSTERS</a>
                        <div className="flex space-x-6 items-center">
                            <button className="hover:text-red-600" onClick={() => { openSearchBar(); setIsMobileMenuOpen(!isMobileMenuOpen) }}>
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                            <button className="hover:text-red-600">
                                <FontAwesomeIcon icon={faHeart} />
                            </button>
                            <a href="/cart" className="hover:text-red-600 relative">
                                <FontAwesomeIcon icon={faShoppingCart} />
                                <span className="nav-bar-txt-1 text-white bg-red rounded-full px-1">{cart.length}</span>
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Search Bar */}
            {openSearch && (
                <form className="max-w-screen px-4 mx-auto nav-bar" onSubmit={handleSearch}> {/* Added onSubmit to handle search */}
                    <label htmlFor="default-search" className="mb-2 text-sm font-bai-jamjuree font-600 text-gray-900 sr-only">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <FontAwesomeIcon icon={faSearch} className="text-gray-500 w-4 h-4" />
                        </div>
                        <input
                            type="search"
                            id="default-search"
                            className="block w-full p-3 ps-10 text-sm text-gray-900 border rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 font-bai-jamjuree font-600"
                            placeholder="Search For Products"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)} // Capture search input
                            required
                        />
                        <button type="submit" className="text-white absolute end-2.5 bottom-[5px] bg-[#111111] hover:bg-red-600 transition-all-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bai-jamjuree font-600 rounded-lg text-sm px-4 py-2">
                            Search
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default Navbar;