import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Collections.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Announcement from '../components/Announcement';

function Collections() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { search } = useLocation();
    const quaryParams = new URLSearchParams(search);
    const collection = quaryParams.get('collection');
    const [productsByCategory, setProductsByCategory] = useState([]);


    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`https://f1-store-backend.netlify.app/.netlify/functions/fetchAdminProducts?filteredCategory=${collection}`);
                const data = await response.json();
                setProductsByCategory(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [collection]);


    return (
        <div>
            {/* Nav bar */}
            <Navbar />
            {/* Landing Announcement */}
            <Announcement />
            {/* Collections */}
            <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
                <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                    <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
                        <div>
                            <nav className="flex" aria-label="Breadcrumb">
                                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                                    <li className="inline-flex items-center">
                                        <a href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white">
                                            <svg className="me-2.5 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                            </svg>
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <div className="flex items-center">
                                            <svg className="h-5 w-5 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" />
                                            </svg>
                                            <a href="/" className="ms-1 text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white md:ms-2">Collections</a>
                                        </div>
                                    </li>
                                    <li aria-current="page">
                                        <div className="flex items-center">
                                            <svg className="h-5 w-5 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" />
                                            </svg>
                                            <span className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ms-2">{collection}</span>
                                        </div>
                                    </li>
                                </ol>
                            </nav>
                            <h2 className="mt-3 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">{collection}</h2>
                        </div>
                        <div className="relative flex items-center">
                            <button
                                id="sortDropdownButton1"
                                onClick={toggleDropdown}
                                type="button"
                                className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
                            >
                                <svg className="-ms-0.5 me-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M7 4l3 3M7 4 4 7m9-3h6l-6 6h6m-6.5 10 3.5-7 3.5 7M14 18h4" />
                                </svg>
                                Sort
                                <svg className="-me-0.5 ms-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" />
                                </svg>
                            </button>
                            {/* Dropdown menu */}
                            {isDropdownOpen && (
                                <div
                                    id="dropdownSort1"
                                    className="absolute z-50 mt-2 sm:w-40 w-[100%] divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700 sm:-translate-x-[60px] translate-y-[140px]"
                                >
                                    <ul className="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400" aria-labelledby="sortDropdownButton1">
                                        <li>
                                            <a href="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"> The most popular </a>
                                        </li>
                                        <li>
                                            <a href="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"> Newest </a>
                                        </li>
                                        <li>
                                            <a href="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"> Increasing price </a>
                                        </li>
                                        <li>
                                            <a href="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"> Decreasing price </a>
                                        </li>
                                        <li>
                                            <a href="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"> No. reviews </a>
                                        </li>
                                        <li>
                                            <a href="#" className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"> Discount % </a>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>

                    {Object.entries(productsByCategory).map(([category, products]) => (
                        <div key={category} className="mb-4 grid gap-4 grid-cols-2 md:mb-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
                            {products.map((product) => {

                                const salePrice = parseFloat(product.salePrice) || 0;
                                const originalPrice = parseFloat(product.price) || 0;

                                return salePrice > 0 ? (
                                    <div key={product.productID} className="best-seller-item h-full w-full">
                                        <a href={`/product?collection=${collection}&productID=${product.productID.split('#').join("%23")}`}>
                                            <div className="h-70 w-full">
                                                <span className="best-seller-badge absolute font-['RfDewi-Expanded'] font-[700] text-[16px] bg-red px-[8px] pt-[15px] rounded-[4px] rounded-t-none items-center ml-[10px] text-white">Sale</span>
                                                <img
                                                    src={product.images[0] || "../images/mercedesF1Tee.png"}
                                                    alt={product.name || "Best Seller"}
                                                    className="best-seller-image w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="my-[5px] mx-[19px] text-white">
                                                <h3 className="font-['RfDewi-Expanded'] text-[19px] font-[700]">{product.name || "Product Name"}</h3>
                                                <span className="font-['RfDewi-Expanded'] text-[16px] font-[700] mt-[-5px] text-white">${salePrice}</span>
                                                <span className="line-through text-red ml-[5px] opacity-80 text-[13px]">
                                                    <span className="font-['RfDewi-Expanded'] text-[13px] font-[700] mt-[-5px] text-white">${originalPrice}</span>
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                ) : (
                                    <div key={product.productID} className="best-seller-item h-full w-full">
                                        <a href={`/product?collection=${collection}&productID=${product.productID.split('#').join("%23")}`}>
                                            <div className="h-70 w-full">
                                                <img
                                                    src={product.images[0] || "../images/mercedesF1Tee.png"}
                                                    alt={product.name || "Best Seller"}
                                                    className="best-seller-image w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="my-[5px] mx-[19px] text-white">
                                                <h3 className="font-['RfDewi-Expanded'] text-[19px] font-[700]">{product.name || "Product Name"}</h3>
                                                <span className="font-['RfDewi-Expanded'] text-[16px] font-[700] mt-[-5px]">${originalPrice}</span>
                                            </div>
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Collections;
