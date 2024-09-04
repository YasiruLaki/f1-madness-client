import React, { useState } from 'react';
import './Product.css';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';

const Product = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const images = [
        "../images/mercedesF1Tee.png",
        "../images/mercedesF1Tee.png",
        "../images/mercedesF1Tee.png",
        "../images/mercedesF1Tee.png",
    ];

    const handleThumbnailClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div>
            <Navbar />
            {/* Landing Announcement */}
            <Announcement />

            {/* Product Details */}
            <section className="py-[50px]">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div>
                        <span className="text-left block"><a href='#'>Home</a> &gt; <a href='#'>Tshirts</a> &gt; Mercedes F1 Team TShirt</span>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="slider-box w-full h-full max-lg:mx-auto mx-0">
                            <div className="main-slide-carousel">
                                <img
                                    alt="Product"
                                    className="w-full h-auto rounded-2xl"
                                    src={images[activeIndex]}
                                />
                            </div>
                            <div className="nav-for-slider">
                                <div className="flex space-x-2">
                                    {images.map((image, index) => (
                                        <div
                                            key={index}
                                            className={`swiper-slide thumbs-slide ${activeIndex === index ? 'active' : ''}`}
                                            onClick={() => handleThumbnailClick(index)}
                                        >
                                            <img
                                                alt="Thumbnail"
                                                className="cursor-pointer rounded-xl transition-all duration-500"
                                                src={image}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="pro-detail w-full max-lg:max-w-[608px] lg:pl-8 xl:pl-16 max-lg:mx-auto max-lg:mt-8">
                                <div className="flex items-center justify-between gap-6 mb-3">
                                    <div className="text">
                                        <p className="font-['RfDewi-Extended'] text-base text-gray-500 ml-[2px]">MERCEDES</p>
                                        <h2 className="leading-10 text-gray-900 mb-2 font-['RfDewi-Expanded'] text-[35px] font-[800]">
                                            Mercedes F1 Team TShirt
                                        </h2>
                                    </div>
                                </div>
                                <div className="flex flex-col min-[400px]:flex-row min-[400px]:items-center mb-8 gap-y-3">
                                    <div className="flex items-center">
                                        <span className="font-['RfDewi-Expanded'] text-[30px] font-[700] mt-[-5px] text-black">$35.6</span>

                                        <span className="line-through text-red  ml-[10px] opacity-80 text-[18px]">
                                            <span className="font-['RfDewi-Expanded'] text-[18px] font-[700] mt-[-5px] text-black">$45.6</span>
                                        </span>
                                    </div>
                                    <svg
                                        className="mx-5 max-[400px]:hidden"
                                        fill="none"
                                        height="36"
                                        viewBox="0 0 2 36"
                                        width="2"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M1 0V36" stroke="#E5E7EB" />
                                    </svg>
                                    <button className="flex items-center gap-1 rounded-lg bg-red py-1.5 px-2.5 w-max">
                                        <svg
                                            fill="none"
                                            height="18"
                                            viewBox="0 0 18 18"
                                            width="18"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_12657_16865)">
                                                <path
                                                    d="M8.10326 2.26718C8.47008 1.52393 9.52992 1.52394 9.89674 2.26718L11.4124 5.33818C11.558 5.63332 11.8396 5.83789 12.1653 5.88522L15.5543 6.37768C16.3746 6.49686 16.7021 7.50483 16.1086 8.08337L13.6562 10.4738C13.4205 10.7035 13.313 11.0345 13.3686 11.3589L13.9475 14.7343C14.0877 15.5512 13.2302 16.1742 12.4966 15.7885L9.46534 14.1948C9.17402 14.0417 8.82598 14.0417 8.53466 14.1948L5.5034 15.7885C4.76978 16.1742 3.91235 15.5512 4.05246 14.7343L4.63137 11.3589C4.68701 11.0345 4.57946 10.7035 4.34378 10.4738L1.89144 8.08337C1.29792 7.50483 1.62543 6.49686 2.44565 6.37768L5.8347 5.88522C6.16041 5.83789 6.44197 5.63332 6.58764 5.33818L8.10326 2.26718Z"
                                                    fill="white"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_12657_16865">
                                                    <rect fill="white" height="18" width="18" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <span className="text-base font-medium text-white">4.8</span>
                                    </button>
                                </div>
                                <p className="font-['RfDewi-Extended'] font-[600] text-lg mb-2">Select Size: <span className='text-[15px] underline'>(Size Chart)</span></p>
                                <div className="grid grid-cols-2 min-[400px]:grid-cols-4 gap-3 mb-6">
                                    {['S', 'M', 'L', 'XL'].map((size, index) => (
                                        <button
                                            key={index}
                                            className="border rounded-lg py-2.5 text-center text-base font-medium leading-6 text-gray-900 hover:border-gray-900"
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>

                                {/* quantity */}
                                <p className="font-['RfDewi-Extended'] font-[600] text-lg mb-2">Quantity:</p>
                                <div className="flex items-center gap-3">
                                    <button className="border rounded-lg py-2.5 px-4 text-center text-base font-medium leading-6 text-gray-900 hover:border-gray-900">
                                        -
                                    </button>
                                    <span className="text-base font-medium leading-6 text-gray-900">1</span>
                                    <button className="border rounded-lg py-2.5 px-4 text-center text-base font-medium leading-6 text-gray-900 hover:border-gray-900">
                                        +
                                    </button>
                                </div>

                                <button className="w-full py-2.5 px-6 rounded-lg bg-[#111111] text-white font-semibold text-lg transition-all duration-500 hover:bg-red mt-[15px]">
                                    Add to Cart
                                </button>

                                <p className="font-['RfDewi-Extended'] font-[600] text-lg  mt-5">Product Description:</p>
                                <span className="font-['RfDewi-Extended'] font-[400] opacity-80">Show your support for the Mercedes-AMG Petronas Formula One Team with this stylish T-shirt. Featuring the iconic team logo and colors, it's made from soft, breathable fabric for maximum comfort, whether you're at the track or watching from home. Perfect for any F1 fan!</span>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Product;
