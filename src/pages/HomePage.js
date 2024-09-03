import React, { useState, useEffect } from "react";
import "./HomePage.css";
import Navbar from "../components/Navbar";
import Faq from "../components/Faq";

import "../fonts.css";

function HomePage() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        '../images/image-1.png',
        '../images/image-2.png',
        '../images/image-3.png',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    const categoriesWithImages = [
        { name: 'Hoodies', image: '../images/collection-tee.webp', span: 2 },
        { name: 'Tshirts', image: '../images/collection-tee.webp' },
        { name: 'Jackets', image: '../images/collection-tee.webp' },
        { name: 'Posters', image: '../images/collection-tee.webp' },
        { name: 'Boxers', image: '../images/collection-tee.webp' }
    ];

    const categoriesWithoutImages = [
        { name: 'Socks' },
        { name: 'Phone cases' },
        { name: 'Lanyard & Keyrings' }
    ];

    return (
        <div className="HomePage">
            <Navbar />

            {/* Landing Announcement */}
            <div className="px-5 bg-red min-h-[34px] text-white flex items-center justify-center text-center">
                <span className="lg:text-[15px] md:text-[14px] sm:text-[13px] ml:text-[12px] mm:text-[11px] ms:text-[10px] font-['RfDewi-Expanded'] font-[700]">New Items have Arrived!  |  🚚 Free Shipping on Orders Over $50!</span>
            </div>

            {/* Hero Section */}
            <div className="relative md:h-[800px] sm:h-[600px] h-[450px]  max-h-[800px] overflow-hidden">
                <div
                    className="carousel-wrapper"
                >
                    <div
                        className="carousel-images"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="carousel-image"
                                style={{ backgroundImage: `url(${image})` }}
                            />
                        ))}
                    </div>
                </div>
                {/* Overlay Image */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <img
                        src="../images/txt-gradient.png"
                        alt="Overlay"
                        className="overlay-image"
                    />
                </div>

                <div className="absolute inset-0 items-end justify-start p-6 hidden ml:flex">
                    <div className="text-left text-white">
                        <h1 className="font-['RfDewi-Expanded'] text-[50px] md:text-[64px] font-[800]">
                            Gear Up For <span className="font-['F1']  text-[50px] md:text-[64px]">F1</span>.
                        </h1>
                        <p className="font-['RfDewi-Expanded'] text-[22px] md:text-[32px] font-[800] mt-[-10px]">
                            Shop exclusive merchandise and collectibles.
                        </p>
                        <a
                            href="https://google.com"
                            className="inline-block bg-red text-white py-2 px-3 rounded-[10px] md:py-3 md:px-6 md:rounded-[15px] font-['RfDewi-Expanded'] text-[17px] md:text-[24px] font-[800] transition duration-300 hover:bg-red-700 mt-[15px] md:mt-[20px]"
                        >
                            Visit Store
                        </a>
                    </div>
                </div>

                <div className="absolute inset-0 flex items-end justify-start p-6 ml:hidden">
                    <div className="text-left text-white">
                        <h1 className="font-['RfDewi-Expanded'] text-[40px] mm:text-[50px] font-[800] leading-[3rem]">
                            Gear Up <br></br> For <span className="font-['F1'] text-[40px] mm:text-[50px]">F1</span>.
                        </h1>
                        <p className="font-['RfDewi-Expanded'] text-[15px] mm:text-[18px] font-[800]">
                            Shop exclusive merchandise and collectibles.
                        </p>
                        <a
                            href="https://google.com"
                            className="inline-block bg-red text-white py-1 px-4 rounded-[7px] font-['RfDewi-Expanded'] text-[15px] font-[800] transition duration-300 hover:bg-red-700 my-[10px]"
                        >
                            Visit Store
                        </a>
                    </div>
                </div>

                <div className="absolute bottom-[19px] left-1/2 transform -translate-x-1/2 flex space-x-[4px]">
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`dot w-[8px] h-[8px] rounded-full cursor-pointer ${currentIndex === index ? 'bg-red' : 'bg-white'}`}
                            onClick={() => handleDotClick(index)}
                        />
                    ))}
                </div>
            </div>

            {/* About */}
            <div className="hero-section-about 950:max-h-[170px] bg-gray-100 flex flex-wrap justify-center justify-between text-center 2xl:px-[142px] xl:px-[80px] lg:px-[20px] px-[10px] lg:py-[30px] md:py-[20px] py-[10px] md:flex-nowrap text-white">
                <div className="md:mx-5 md:px-[0px] px-[5px] mm:w-6/12 ">
                    <i className="bi bi-award lg:text-[34px] text-[25px] "></i>
                    <p className="font-['RfDewi-Expanded'] xl:text-[16px] text-[14px] font-[800]">Official Products</p>
                    <p className="font-['RfDewi-Extended'] xl:text-[13px] text-[11px] font-[500] text-[#A5A5A5]">The Official Destination for Silver Arrows Merchandise</p>
                </div>
                <div className="md:mx-5 md:px-[0px] px-[5px] mm:w-6/12 mm:mt-[0px] mt-[7px]">
                    <i className="bi bi-globe lg:text-[34px] text-[25px]"></i>
                    <p className="font-['RfDewi-Expanded'] xl:text-[16px] text-[14px] font-[800]">Worldwide Delivery</p>
                    <p className="font-['RfDewi-Extended'] xl:text-[13px] text-[11px] font-[500] text-[#A5A5A5]">Racing to your door with DPD express worldwide delivery</p>
                </div>
                <div className="md:mx-5 md:px-[0px] px-[5px] mm:w-6/12 mm:mt-[0px] mt-[7px]">
                    <i className="bi bi-star lg:text-[34px] text-[25px]"></i>
                    <p className="font-['RfDewi-Expanded'] xl:text-[16px] text-[14px] font-[800]">Exclusive Products</p>
                    <p className="font-['RfDewi-Extended'] xl:text-[13px] text-[11px] font-[500] text-[#A5A5A5]">Shop with the Team to get access to all Official Limited Edition merchandise</p>
                </div>
                <div className="md:mx-5 md:px-[0px] px-[5px] mm:w-6/12 mm:mt-[0px] mt-[7px]">
                    <i className="bi bi-geo-alt lg:text-[34px] text-[25px]"></i>
                    <p className="font-['RfDewi-Expanded'] xl:text-[16px] text-[14px] font-[800]">Tracked Delivery</p>
                    <p className="font-['RfDewi-Extended'] xl:text-[13px] text-[11px] font-[500] text-[#A5A5A5]">Fast, tracked and secure DPD delivery straight to your door</p>
                </div>
            </div>

            {/* Best Sellers */}
            <div className="best-sellers-section min-h-[500px] flex flex-col text-center mt-[20px]">
                <h2 className="font-['RfDewi-Expanded'] text-[36px] font-[800]">Best Sellers</h2>

                <div className="flex justify-center justify-between flex-wrap mt-[30px] mx-[110px] items-center text-white text-left">
                    <div className="best-seller-item ">
                        <img
                            src="../images/mercedesF1Tee.png"
                            alt="Best Seller 1"
                            className="best-seller-imagew-[333px] h-[333px]"
                        />
                        <div className="my-[5px] mx-[19px]">
                            <h3 className="font-['RfDewi-Expanded'] text-[19px] font-[700] ">Mercedes F1 TShirt</h3>
                            <span className="font-['RfDewi-Expanded'] text-[16px] font-[700] mt-[-5px]">$35.8</span>
                        </div>
                    </div>
                    <div className="best-seller-item w-[333px] max-h-[396px]">
                        <span className="best-seller-badge absolute font-['RfDewi-Expanded'] font-[700] text-[16px] bg-red px-[8px] pt-[15px] rounded-[4px] rounded-t-none items-center ml-[10px]">Sale</span>
                        <img
                            src="../images/verstappneTee.png"
                            alt="Best Seller 2"
                            className="best-seller-image w-[333px] h-[333px]"
                        />
                        <div className="my-[5px] mx-[19px]">
                            <h3 className="font-['RfDewi-Expanded'] text-[19px] font-[700]">Verstappen F1 TShirt</h3>
                            <span className="font-['RfDewi-Expanded'] text-[16px] font-[700] mt-[-5px] text-white">$35.6</span>

                            <span className="line-through text-red  ml-[5px] opacity-80 text-[13px]">
                                <span className="font-['RfDewi-Expanded'] text-[13px] font-[700] mt-[-5px] text-white">$45.6</span>
                            </span>
                        </div>
                    </div>
                    <div className="best-seller-item w-[333px]">
                        <img
                            src="../images/mclarenTee.png"
                            alt="Best Seller 3"
                            className="best-seller-image w-[333px] h-[333px]"
                        />
                        <div className="my-[5px] mx-[19px]">
                            <h3 className="font-['RfDewi-Expanded'] text-[19px] font-[700]">Mclaren F1 TShirt</h3>
                            <span className="font-['RfDewi-Expanded'] text-[16px] font-[700] mt-[-5px]">$33.4</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Categories */}
            <div className="p-4 md:mx-10">
                <h2 className="font-['RfDewi-Expanded'] text-[36px] font-[800] text-center">Collections</h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {categoriesWithImages.map((category, index) => (
                        <div
                            key={index}
                            className={`relative overflow-hidden shadow-lg flex justify-center items-center ${category.span ? 'col-span-2 md:col-span-2' : ''
                                } h-40 md:h-60 bg-gray-200 group`}
                        >
                            <img
                                src={category.image}
                                alt={category.name}
                                className="object-cover w-full h-full"
                            />
                            <div className="best-seller-item absolute bottom-0 left-0 right-0 bg-black p-2 text-white text-center flex justify-between items-center font-['RfDewi-Expanded'] text-[19px] font-[700]">
                                <span>{category.name}</span>
                                <i className="bi bi-arrow-right ml-2"></i>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-4 flex sm:flex-row flex-col justify-between gap-4">
                    {categoriesWithoutImages.map((category, index) => (
                        <div
                            key={index}
                            className="best-seller-item flex md:w-1/3 justify-between items-center bg-black text-white font-bold text-xl p-4 shadow-lg font-['RfDewi-Expanded'] text-[19px] font-[700]"
                        >
                            <span>{category.name}</span>
                            <i className="bi bi-arrow-right ml-2"></i>
                        </div>
                    ))}
                </div>
            </div>

            {/* FAQ */}
            <Faq />

            {/* Footer */}
            <footer class="footer text-white">
                <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        <div>
                            <div className="flex items-center">
                                <span className="!text-[20px] nav-bar-txt-1">F1MADNESS</span>
                                <span className="!text-[15px] !-translate-y-[2px] nav-bar-txt-2 px-1">Store</span>
                            </div>
                            <p class="max-w-xs mt-4 text-sm text-gray-600">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, accusantium.
                            </p>
                            <div class="flex mt-8 space-x-6 text-gray-600">
                                <a class="hover:opacity-75" href target="_blank" rel="noreferrer">
                                    <span class="sr-only"> Facebook </span>
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a class="hover:opacity-75" href target="_blank" rel="noreferrer">
                                    <span class="sr-only"> Instagram </span>
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a class="hover:opacity-75" href target="_blank" rel="noreferrer">
                                    <span class="sr-only"> Twitter </span>
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                </a>
                                <a class="hover:opacity-75" href target="_blank" rel="noreferrer">
                                    <span class="sr-only"> GitHub </span>
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a class="hover:opacity-75" href target="_blank" rel="noreferrer">
                                    <span class="sr-only"> Dribbble </span>
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
                            <div>
                                <p class="font-medium">
                                    Company
                                </p>
                                <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                                    <a class="hover:opacity-75" href> About </a>
                                    <a class="hover:opacity-75" href> Meet the Team </a>
                                    <a class="hover:opacity-75" href> History </a>
                                    <a class="hover:opacity-75" href> Careers </a>
                                </nav>
                            </div>
                            <div>
                                <p class="font-medium">
                                    Services
                                </p>
                                <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                                    <a class="hover:opacity-75" href> 1on1 Coaching </a>
                                    <a class="hover:opacity-75" href> Company Review </a>
                                    <a class="hover:opacity-75" href> Accounts Review </a>
                                    <a class="hover:opacity-75" href> HR Consulting </a>
                                    <a class="hover:opacity-75" href> SEO Optimisation </a>
                                </nav>
                            </div>
                            <div>
                                <p class="font-medium">
                                    Helpful Links
                                </p>
                                <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                                    <a class="hover:opacity-75" href> Contact </a>
                                    <a class="hover:opacity-75" href> FAQs </a>
                                    <a class="hover:opacity-75" href> Live Chat </a>
                                </nav>
                            </div>
                            <div>
                                <p class="font-medium">
                                    Legal
                                </p>
                                <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                                    <a class="hover:opacity-75" href> Privacy Policy </a>
                                    <a class="hover:opacity-75" href> Terms &amp; Conditions </a>
                                    <a class="hover:opacity-75" href> Returns Policy </a>
                                    <a class="hover:opacity-75" href> Accessibility </a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-5 bg-red min-h-[34px] text-white flex items-center justify-center text-center">
                    <span className="lg:text-[15px] md:text-[14px] sm:text-[13px] ml:text-[12px] mm:text-[11px] ms:text-[10px] font-['RfDewi-Expanded'] font-[700]">©2024 F1MADNESS.COM</span>
                </div>
            </footer>
        </div>

    );
}

export default HomePage;
