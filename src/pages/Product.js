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
    const productID = quaryParams.get('productid');
    const category = quaryParams.get('collection')
    const [product, setProduct] = useState({});
    const [selectedSize, setSelectedSize] = useState({});
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
            setLoading(true);
            if (!productID || !category) {
                console.error('Missing productID or category');
                setLoading(false);
                return;
            }

            const formattedProductID = productID.split('#').join('%23');
            const apiUrl = `https://f1-printful-backend.vercel.app/api/singleProduct?productid=${formattedProductID}&category=${category}`;

            try {
                console.log('Fetching product from:', apiUrl);
                const res = await fetch(apiUrl);
                if (!res.ok) {
                    throw new Error(`API error: ${res.status} ${res.statusText}`);
                }

                const data = await res.json();
                console.log('Fetched Product:', data);

                if (!data.product) {
                    console.warn('Empty product data received');
                    return;
                }

                setProduct(data.product); // ✅ Fix applied
            } catch (error) {
                console.error('Error fetching product:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [productID, category]);

    const handleSizeSelect = (sizeObj) => {
        setSelectedSize({
            size: sizeObj.size,
            sizeid: sizeObj.sizeid,
            files: sizeObj.files
        });
    };

    const images = product?.images
        ? product.images
            .replace(/{|}/g, "") // Remove curly braces
            .split(",") // Split by comma (no space)
            .map(url => url.trim()) // Trim extra spaces from URLs
        : []; // Default to an empty array if product.images is undefined

    console.log(images);
    const handleAddToCart = () => {
        if (product.sizes && product.sizes.length > 0 && !selectedSize) {
            showAlert('info', 'Please select a size before adding to the cart.');
            return;
        }

        // Retrieve cart from local storage
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Check if the product is already in the cart
        const existingProductIndex = cart.findIndex(item =>
            item.productid === productID &&
            item.size?.size === selectedSize?.size &&
            item.size?.sizeid === selectedSize?.sizeid // Ensure sizeid is being compared
        );

        if (existingProductIndex !== -1) {
            showAlert('info', 'Product in this size already exists in the cart.');
        } else {
            setLoading(true);

            // Ensure selectedSize has both size and sizeid properties
            const productToAdd = {
                productid: productID,
                category: category,
                quantity: selectedQuantity,
                size: {
                    size: selectedSize?.size,        // Ensure size is being added
                    sizeid: selectedSize?.sizeid,     // Ensure sizeid is being added
                    files: selectedSize?.files
                },
            };

            cart.push(productToAdd);
            addToCart(productToAdd);
            setAlert({ type: 'success', message: 'Product added to cart!' });

            setLoading(false);
        }

        // Save the updated cart back to local storage, including both size and sizeid
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

            <section className="py-[50px] relative isolate overflow-hidden">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <nav className="flex mb-4" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse font-['RfDewi-Extended']">
                            <li className="inline-flex items-center ">
                                <a href="/" className="inline-flex items-center  text-sm font-medium text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white">
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
                                    {images && Array.isArray(images) && images.length > 0 ? (
                                        images.map((image, index) => (
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
                                        ))
                                    ) : (
                                        <div
                                            className={`thumb-container swiper-slide thumbs-slide flex-1 ${activeIndex === 0 ? 'active' : ''}`}
                                            onClick={() => handleThumbnailClick(0)}
                                        >
                                            <img
                                                alt="Thumbnail"
                                                className={`cursor-pointer w-full h-auto rounded-xl transition-all duration-500 ${activeIndex === 0 ? 'border-2 border-black' : ''}`}
                                                src={product.thumbnail_url}  // Display the product's thumbnail when no images are available
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="pro-detail w-full max-lg:max-w-[608px] lg:pl-8 xl:pl-16 max-lg:mx-auto max-lg:mt-8">
                                <div className="flex items-center justify-between gap-6 mb-3">
                                    <div className="text">
                                        {/* <p className="font-['RfDewi-Extended'] text-base text-gray-500 ml-[2px]">MERCEDES</p> */}
                                        <h2 className="leading-10 text-gray-900 mb-2 text-white font-bai-jamjuree font-700 text-[35px]">
                                            {product.name}
                                        </h2>
                                    </div>
                                </div>
                                <div className="flex flex-col min-[400px]:flex-row min-[400px]:items-center mb-8 gap-y-3">
                                    {product.saleprice > 0 ? (
                                        <div className="flex items-center">
                                            <span className="font-bai-jamjuree font-700 text-[30px] font-[700] mt-[-5px] text-white">${product.saleprice}</span>

                                            <span className="line-through text-red  ml-[10px] opacity-80 text-[18px]">
                                                <span className="font-bai-jamjuree font-700 text-[18px] font-[700] mt-[-5px] text-white">${product.price}</span>
                                            </span>
                                            <span className="best-seller-badge font-bai-jamjuree font-700 text-[14px] text-white bg-red ml-2 p-1 px-2">{(((product.price - product.saleprice) / product.price) * 100).toFixed(0)}% Off</span>
                                        </div>
                                    ) : (
                                        <span className="font-bai-jamjuree font-700 text-[30px] font-[700] mt-[-5px] text-white">${product.price}</span>
                                    )}
                                </div>
                                <p className="font-bai-jamjuree text-white font-[600] text-lg mb-2">
                                    Select Size:
                                    {['Tshirts', 'Hoodies', 'Jackets', 'Boxers'].includes(product.category) && (
                                        <a
                                            href={
                                                product.category === 'Tshirts' ? '../images/tshirts-sizeguide.png' :
                                                    product.category === 'Hoodies' ? '../images/hoodies-sizeguide.png' :
                                                        product.category === 'Jackets' ? '../images/hoodies-sizeguide.png' :
                                                            '../images/hoodies-sizeguide.png'
                                            }
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[15px] underline ml-2 opacity-80 font-bai-jamjuree text-white"
                                        >
                                            Size Chart
                                        </a>
                                    )}
                                </p>
                                <div className="grid grid-cols-2 min-[400px]:grid-cols-4 gap-3 mb-6">
                                    {product.sizes?.map((sizeObj, index) => (
                                        <div key={index} className="flex items-center">
                                            <input
                                                type="checkbox"
                                                id={`size-${sizeObj.size}`}
                                                className="hidden peer"
                                                checked={selectedSize?.size === sizeObj.size} // Compare selectedSize.size
                                                onChange={() => handleSizeSelect(sizeObj)} // Pass the entire sizeObj
                                            />
                                            <label
                                                htmlFor={`size-${sizeObj.size}`}
                                                className={`cursor-pointer flex items-center justify-center w-full h-10 rounded-lg border font-bai-jamjuree font-700 border-gray-300 text-base leading-6 text-white hover:border-white ${selectedSize?.size === sizeObj.size ? 'bg-[red] text-white' : ''
                                                    }`}
                                            >
                                                {sizeObj.size} {/* Display the size */}
                                            </label>
                                        </div>
                                    ))}
                                </div>

                                {/* quantity */}
                                <p className="font-bai-jamjuree text-white font-[600] text-lg mb-2">Quantity:</p>
                                <div className="flex items-center gap-3">
                                    <button className="border rounded-lg py-2 px-3.5 text-center text-base font-medium leading-6 text-gray-900 bg-white hover:border-gray-900" onClick={handleDecrement}>
                                        -
                                    </button>
                                    <span className="text-base font-bai-jamjuree text-white font-700 leading-6 text-gray-900">{selectedQuantity}</span>
                                    <button className="border rounded-lg py-2 px-3.5 text-center text-base font-medium leading-6 text-gray-900 bg-white hover:border-gray-900" onClick={handleIncrement}>
                                        +
                                    </button>
                                </div>

                                <button
                                    className="w-full py-2.5 px-6 rounded-lg bg-[#a4a4a4] text-black font-bai-jamjuree font-semibold text-lg transition-all duration-500 hover:bg-red mt-[15px]"
                                    onClick={handleAddToCart}
                                >
                                    Add to Cart
                                </button>

                                <p className="font-bai-jamjuree text-white font-[600] text-lg  mt-7">Product Description:</p>
                                <span className="font-bai-jamjuree text-white font-[400] opacity-80">{product.description}</span>

                            </div>
                        </div>
                    </div>
                </div>
                <div aria-hidden="true" className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="aspect-[1155/150] w-[80.1875rem] bg-gradient-to-tr from-[#ffffff] to-[#ffffff4a] opacity-40"
                    />
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="aspect-[1155/600] w-[80.1875rem] bg-gradient-to-tr from-[#ffffff8a] to-[#ffffff2a] opacity-30"
                    />
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Product;
