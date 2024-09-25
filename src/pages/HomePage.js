import React, { useState, useEffect, useCallback, useRef } from "react";
import "./HomePage.css";
import "../fonts.css";
import Navbar from "../components/Navbar";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Announcement from "../components/Announcement";
import LoadingScreen from "../components/loadingScreen";
import YtEmbed from "../components/YtEmbed";
import Newsletter from "../components/Newsletter";
import Feedback from "../components/Feedback";
import Contact from "../components/Contact";

const images = [
    '../images/image-1.png',
    '../images/image-2.png',
    '../images/image-3.png',
];

const categoriesWithImages = [
    { name: 'Hoodies', image: '../images/collection-tee.webp', span: 2 },
    { name: 'Tshirts', image: '../images/collection-tee.webp' },
    { name: 'Caps', image: '../images/collection-tee.webp' },
    { name: 'Posters', image: '../images/collection-tee.webp' },
    { name: 'Boxers', image: '../images/collection-tee.webp' }
];

const categoriesWithoutImages = [
    { name: 'Socks' },
    { name: 'Phone Cases' },
    { name: 'Lanyard & Keyrings' },
    { name: 'Blankets' },
    { name: 'Bedroom Sets' },
    { name: 'Gift Cards' }
];

const HomePage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [bestSellingProducts, setBestSellingProducts] = useState({
        product1: null,
        product2: null,
        product3: null
    });
    const collectionsRef = useRef(null);

    const scrollToCollections = () => {
        if (collectionsRef.current) {
            collectionsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const fetchProducts = useCallback(async () => {
        try {
            const response = await fetch('https://f1-store-backend.netlify.app/.netlify/functions/fetchAdminProducts', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            const flattened = Object.values(data).flat();
            return flattened;
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }, []);

    const fetchSiteSettings = useCallback(async (products) => {
        try {
            const response = await fetch('https://f1-store-backend.netlify.app/.netlify/functions/fetchSiteSettings', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();

            const mapProductIdToOption = (id) => {
                const product = products.find(p => p.productID === id);
                return product ? {
                    productID: product.productID,
                    name: product.name,
                    shortName: product.shortName,
                    image: product.images[0],
                    price: product.price,
                    salePrice: product.salePrice
                } : null;
            };

            setBestSellingProducts({
                product1: mapProductIdToOption(data.bestSellingProducts.product1),
                product2: mapProductIdToOption(data.bestSellingProducts.product2),
                product3: mapProductIdToOption(data.bestSellingProducts.product3),
            });

        } catch (error) {
            console.error('Error fetching site settings:', error);
        }
    }, []);

    useEffect(() => {
        setLoading(true);
        fetchProducts().then((flattenedProducts) => {
            if (flattenedProducts) {
                fetchSiteSettings(flattenedProducts);
            }

            setTimeout(() => {
                setLoading(false);
            }, 1000);
        });
    }, [fetchProducts, fetchSiteSettings]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const handleDotClick = useCallback((index) => {
        setCurrentIndex(index);
    }, []);

    return (
        <div className="HomePage">
            {loading && <LoadingScreen />}

            {/* Navbar */}
            <Navbar />

            {/* Landing Announcement */}
            <Announcement/>

            {/* Hero Section */}
            <div className="relative md:h-[calc(100vh-90px)] sm:h-[600px] h-[450px] max-h-[800px] overflow-hidden">
                <div className="carousel-wrapper">
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

                <div className="absolute inset-0 items-end justify-start p-6 hidden ml:flex bottom-16">
                    <div className="text-left text-white">
                        <h1 className="font-['RfDewi-Expanded'] text-[50px] md:text-[64px] font-[800]">
                            Gear Up For <span className="font-['F1'] text-[50px] md:text-[64px]">F1</span>.
                        </h1>
                        <p className="font-['RfDewi-Expanded'] text-[22px] md:text-[32px] font-[800] mt-[-10px]">
                            Shop exclusive merchandise and collectibles.
                        </p>
                        <button
                            onClick={scrollToCollections}
                            className="inline-block bg-red text-white py-2 px-3 rounded-[10px] md:py-3 md:px-6 md:rounded-[15px] font-['RfDewi-Expanded'] text-[17px] md:text-[24px] font-[800] transition duration-300 hover:bg-red-700 mt-[15px] md:mt-[20px]"
                        >
                            SHOP NOW
                        </button>
                    </div>
                </div>

                <div className="absolute inset-0 flex items-end justify-start p-6 ml:hidden">
                    <div className="text-left text-white">
                        <h1 className="font-['RfDewi-Expanded'] text-[40px] mm:text-[50px] font-[800] leading-[3rem]">
                            Gear Up <br /> For <span className="font-['F1'] text-[40px] mm:text-[50px]">F1</span>.
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
                <div className="md:mx-5 md:px-[0px] px-[5px] mm:w-6/12">
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
            <div className="best-sellers-section text-center mt-[20px]">
                <h2 className="font-['RfDewi-Expanded'] text-[36px] font-[800]">Best Sellers</h2>
                <div className="flex grid ms:grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-14 mt-[30px] mx-auto max-w-screen-xl sm:px-14 px-4 text-left text-white">
                    {[bestSellingProducts.product1, bestSellingProducts.product2, bestSellingProducts.product3].map((product, index) => (
                        product && (
                            <a key={index} href={`/product?productID=${encodeURIComponent(product.productID)}`}>
                                <div className="best-seller-item relative">
                                    <img
                                        src={product.image}
                                        alt={`Best Seller ${index + 1}`}
                                        className="best-seller-image w-full h-auto"
                                    />
                                    <div className="my-[5px] mx-[19px] pb-[5px]">
                                        <h3 className="font-['RfDewi-Expanded'] text-[16px] font-[700] line-clamp-2">{product.name}</h3>
                                        <span className="font-['RfDewi-Expanded'] text-[18px] font-[700] text-white mt-[-5px]">
                                            ${product.salePrice > 0 ? product.salePrice : product.price}
                                        </span>
                                        {product.salePrice > 0 && (
                                            <span className="line-through text-red ml-[5px] opacity-80 text-[14px] font-[800]">
                                                <span className="font-['RfDewi-Expanded'] text-[14px] font-[700] mt-[-5px] text-white">
                                                    ${product.price}
                                                </span>
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </a>
                        )
                    ))}
                </div>
            </div>

            <div ref={collectionsRef} className="p-4 md:mx-10">
                <h2 className="font-['RfDewi-Expanded'] text-[36px] font-[800] mt-[30px] mb-[20px] text-center">Collections</h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {categoriesWithImages.map((category, index) => (
                        <div
                            key={index}
                            className={`relative overflow-hidden shadow-lg flex justify-center items-center ${category.span ? 'col-span-2 md:col-span-2' : ''
                                } h-40 md:h-60 bg-gray-200 group`}
                        >
                            <a href={`/collections?collection=${category.name}`}>
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="object-cover w-full h-full"
                                />
                                <div className="best-seller-item absolute bottom-0 left-0 right-0 bg-black p-2 text-white text-center flex justify-between items-center font-['RfDewi-Expanded'] text-[19px] font-[700]">
                                    <span>{category.name}</span>
                                    <i className="bi bi-arrow-right ml-2"></i>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
                <div className="mt-4 grid ms:grid-cols-1 mm:grid-cols-2 md:grid-cols-3 gap-4">
                    {categoriesWithoutImages.map((category, index) => (
                        <div
                            key={index}
                            className="best-seller-item flex  justify-between items-center bg-black text-white font-bold text-xl p-4 shadow-lg font-['RfDewi-Expanded'] text-[19px] font-[700]"
                        >
                            <a href={`/collections?collection=${encodeURIComponent(category.name)}`}>
                                <span>{category.name}</span>
                                <i className="bi bi-arrow-right ml-2"></i>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* YouTube Embed */}
            <YtEmbed />

            {/* Feedback */}
            <Feedback />

            {/* FAQ */}
            <Faq />

            {/* Contact */}
            <Contact />

            {/* Newsletter */}
            <Newsletter />

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default React.memo(HomePage);