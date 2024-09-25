import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Product.css';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import { useCart } from '../contexts/CartContext';
import LoadingScreen from '../components/loadingScreen';
import Alert from '../components/Alert';

const Product = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const { search } = useLocation();
    const quaryParams = new URLSearchParams(search);
    const productID = quaryParams.get('productID');
    const [product, setProduct] = useState([]);
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [loading, setLoading] = useState(true);
    const [alert, setAlert] = useState({ type: '', message: '' });
    const { addToCart } = useCart();


    // Function to show alert
    const showAlert = (type, message) => {
        setAlert({ type, message });
    };

    // Function to hide alert
    const hideAlert = () => {
        setAlert({ type: '', message: '' });
    };

    const handleThumbnailClick = (index) => {
        setActiveIndex(index);
    };

    const handleIncrement = () => {
        setSelectedQuantity(selectedQuantity + 1);
    }

    const handleDecrement = () => {
        if (selectedQuantity > 1) {
            setSelectedQuantity(selectedQuantity - 1);
        }
    }

    useEffect(() => {
        setLoading(true);
        const fetchProduct = async () => {
            const formattedProductID = productID.split('#').join('%23');
            try {
                const res = await fetch(`https://f1-store-backend.netlify.app/.netlify/functions/fetchSingleProduct?productID=${formattedProductID}`);
                const data = await res.json();
                setProduct(data);
            } catch (error) {
                console.log(error);
            }
            finally {
                setTimeout(() => {
                    setLoading(false);
                }, 500);
            }
        };
        fetchProduct();
    }, [productID]);

    const handleSizeSelect = (size) => {
        setSelectedSize(size); // Update selected size in state
    };

    const images = product?.images || [];

    const handleAddToCart = () => {
        if (product.sizes && product.sizes.length > 0 && !selectedSize) {
            showAlert('info', 'Please select a size before adding to the cart.');
            return;
        }

        // Retrieve cart from local storage
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Check if the product is already in the cart
        const existingProductIndex = cart.findIndex(item => item.productID === productID && item.size === selectedSize);

        if (existingProductIndex !== -1) {
            showAlert('info', 'Product in this size already exists in the cart.');
        } else {
            setLoading(true);
            const productToAdd = {
                productID: productID,
                quantity: selectedQuantity,
                size: selectedSize,
            };
            cart.push(productToAdd);
            addToCart(productToAdd);
            setAlert({ type: 'success', message: 'Product added to cart!' });

            setLoading(false);

        }

        // Save the updated cart back to local storage
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    return (
        <div>
            {loading && <LoadingScreen />}

            {/* Render the Alert component */}
            {alert.message && (
                <Alert
                    type={alert.type}
                    message={alert.message}
                    onClose={hideAlert}
                />
            )}
            <Navbar />
            {/* Landing Announcement */}
            <Announcement />

            {/* Product Details */}

            <section className="py-[50px]">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <nav className="flex mb-4" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse font-['RfDewi-Extended']">
                            <li className="inline-flex items-center ">
                                <a href="/" className="inline-flex items-center  text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white">
                                    <svg className="me-2.5 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                    </svg>
                                    Home
                                </a>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <svg className="h-5 w-5 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" />
                                    </svg>
                                    <span className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ms-2">{product.category}</span>
                                </div>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <svg className="h-5 w-5 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" />
                                    </svg>
                                    <span className="max-w-[360px] ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ms-2 truncate">{product.name}</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="slider-box w-full h-full max-lg:mx-auto mx-0">
                            <div className="main-slide-carousel">
                                {/* Check if images array has items before rendering */}
                                {images.length > 0 && (
                                    <img
                                        alt="Product"
                                        className="w-full h-auto rounded-2xl"
                                        src={images[activeIndex]}
                                    />
                                )}
                            </div>

                            <div className="flex mt-4">
                                {/* Dynamically calculate the width of each thumbnail based on the number of images */}
                                <div className="flex gap-4 w-full max-lg:mx-auto">
                                    {images.map((image, index) => (
                                        <div
                                            key={index}
                                            className={`thumb-container swiper-slide thumbs-slide flex-1 ${activeIndex === index ? 'active' : ''}`}
                                            onClick={() => handleThumbnailClick(index)}
                                        >
                                            <img
                                                alt={`Thumbnail ${index + 1}`}
                                                className={`cursor-pointer w-full h-auto rounded-xl transition-all duration-500 ${activeIndex === index ? 'border-2 border-black' : ''}`}
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
                                            {product.name}
                                        </h2>
                                    </div>
                                </div>
                                <div className="flex flex-col min-[400px]:flex-row min-[400px]:items-center mb-8 gap-y-3">
                                    {product.salePrice > 0 ? (
                                        <div className="flex items-center">
                                            <span className="font-['RfDewi-Expanded'] text-[30px] font-[700] mt-[-5px] text-black">${product.salePrice}</span>

                                            <span className="line-through text-red  ml-[10px] opacity-80 text-[18px]">
                                                <span className="font-['RfDewi-Expanded'] text-[18px] font-[700] mt-[-5px] text-black">${product.price}</span>
                                            </span>
                                        </div>
                                    ) : (
                                        <span className="font-['RfDewi-Expanded'] text-[30px] font-[700] mt-[-5px] text-black">${product.price}</span>
                                    )}
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
                                        <span className="text-base font-medium text-white">{product.rating}</span>
                                    </button>
                                </div>
                                <p className="font-['RfDewi-Extended'] font-[600] text-lg mb-2">Select Size:
                                    <span className='text-[15px] underline ml-[3px]'>
                                        {product.category === 'Tshirt' || product.category === 'Hoodies' || product.category === 'Jackets' ? 'Size Chart' : ''}
                                    </span>
                                </p>
                                <div className="grid grid-cols-2 min-[400px]:grid-cols-4 gap-3 mb-6">
                                    {product.sizes?.map((size, index) => (
                                        <div key={index} className="flex items-center">
                                            <input
                                                type="checkbox"
                                                id={`size-${size}`} // Unique ID for each input
                                                className="hidden peer"
                                                checked={selectedSize === size} // Make input controlled by state
                                                onChange={() => handleSizeSelect(size)} // Handle size selection
                                            />
                                            <label
                                                htmlFor={`size-${size}`} // Corresponding 'htmlFor' to link label and input
                                                className={`cursor-pointer flex items-center justify-center w-full h-10 rounded-lg border border-gray-300 text-base font-medium leading-6 text-gray-900 hover:border-gray-900 ${selectedSize === size ? 'bg-[#111111] text-white' : ''}`}
                                            >
                                                {size}
                                            </label>
                                        </div>
                                    ))}
                                </div>

                                {/* quantity */}
                                <p className="font-['RfDewi-Extended'] font-[600] text-lg mb-2">Quantity:</p>
                                <div className="flex items-center gap-3">
                                    <button className="border rounded-lg py-2.5 px-4 text-center text-base font-medium leading-6 text-gray-900 hover:border-gray-900" onClick={handleDecrement}>
                                        -
                                    </button>
                                    <span className="text-base font-medium leading-6 text-gray-900">{selectedQuantity}</span>
                                    <button className="border rounded-lg py-2.5 px-4 text-center text-base font-medium leading-6 text-gray-900 hover:border-gray-900" onClick={handleIncrement}>
                                        +
                                    </button>
                                </div>

                                <button
                                    className="w-full py-2.5 px-6 rounded-lg bg-[#111111] text-white font-semibold text-lg transition-all duration-500 hover:bg-red mt-[15px]"
                                    onClick={handleAddToCart}
                                >
                                    Add to Cart
                                </button>

                                <p className="font-['RfDewi-Extended'] font-[600] text-lg  mt-5">Product Description:</p>
                                <span className="font-['RfDewi-Extended'] font-[400] opacity-80">{product.description}</span>

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
