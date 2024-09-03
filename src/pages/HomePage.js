import React, { useState, useEffect } from "react";
import "./HomePage.css";
import Navbar from "../components/Navbar";
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
                <div className="md:mx-5 md:px-[0px] px-[5px] w-6/12">
                    <i className="bi bi-award lg:text-[34px] text-[25px]"></i>
                    <p className="font-['RfDewi-Expanded'] xl:text-[16px] text-[14px] font-[800]">Official Products</p>
                    <p className="font-['RfDewi-Extended'] xl:text-[13px] text-[11px] font-[500] text-[#A5A5A5]">The Official Destination for Silver Arrows Merchandise</p>
                </div>
                <div className="md:mx-5 md:px-[0px] px-[5px] w-6/12">
                    <i className="bi bi-globe lg:text-[34px] text-[25px]"></i>
                    <p className="font-['RfDewi-Expanded'] xl:text-[16px] text-[14px] font-[800]">Worldwide Delivery</p>
                    <p className="font-['RfDewi-Extended'] xl:text-[13px] text-[11px] font-[500] text-[#A5A5A5]">Racing to your door with DPD express worldwide delivery</p>
                </div>
                <div className="md:mx-5 md:px-[0px] px-[5px] w-6/12">
                    <i className="bi bi-star lg:text-[34px] text-[25px]"></i>
                    <p className="font-['RfDewi-Expanded'] xl:text-[16px] text-[14px] font-[800]">Exclusive Products</p>
                    <p className="font-['RfDewi-Extended'] xl:text-[13px] text-[11px] font-[500] text-[#A5A5A5]">Shop with the Team to get access to all Official Limited Edition merchandise</p>
                </div>
                <div className="md:mx-5 md:px-[0px] px-[5px] w-6/12">
                    <i className="bi bi-geo-alt lg:text-[34px] text-[25px]"></i>
                    <p className="font-['RfDewi-Expanded'] xl:text-[16px] text-[14px] font-[800]">Tracked Delivery</p>
                    <p className="font-['RfDewi-Extended'] xl:text-[13px] text-[11px] font-[500] text-[#A5A5A5]">Fast, tracked and secure DPD delivery straight to your door</p>
                </div>
            </div>

            {/* Best Sellers */}
            <div className="best-sellers-section min-h-[500px] flex flex-col text-center mt-[20px]">
                <h2 className="font-['RfDewi-Expanded'] text-[36px] font-[800]">Best Sellers</h2>

                <div className="flex justify-between flex-wrap mt-[30px] mx-[110px] items-center text-white text-left">
                    <div className="best-seller-item">
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
                            <span className="line-through text-red">
                                <span className="font-['RfDewi-Expanded'] text-[16px] font-[700] mt-[-5px] text-white">$45.6</span>
                            </span>
                            <span className="font-['RfDewi-Expanded'] text-[16px] font-[700] mt-[-5px] text-white ml-[5px]">$35.6</span>
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

            {/* Footer */}
            <div className="px-5 bg-red min-h-[34px] text-white flex items-center justify-center text-center">
                <span className="text-[14px] font-['RfDewi-Expanded'] font-[700]">F1MADNESS.COM ©2024 | All Rights Reserved</span>
            </div>

        </div>
    );
}

export default HomePage;
