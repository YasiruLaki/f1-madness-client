import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Search.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Announcement from '../components/Announcement';

const Search = () => {
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const searchedQuery = queryParams.get('query');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://f1-store-backend.netlify.app/.netlify/functions/fetchAdminProducts', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data = await response.json();
                const flattened = Object.values(data).flat();
                const searchWords = searchedQuery.toLowerCase().split(' ').filter(word => word);
                const filtered = flattened.filter(product =>
                    searchWords.every(word => product.name.toLowerCase().includes(word))
                );

                setSearchResults(filtered);

                setTimeout(() => {
                    setLoading(false);
                }, 500);
            } catch (error) {
                console.error('Error fetching products:', error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, [searchedQuery]);

    return (
        <div className="search-container">

            <Navbar />
            <Announcement />
            <div
                className="w-full bg-cover bg-center "
                style={{
                    height: '25vh',
                    backgroundImage: `url('https://wallpapers.com/images/hd/1920x1080-black-ivgflkhu7bxomm84.jpg')`,
                    objectFit: 'cover',
                }}
            >
                <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
                    <div className="text-center">
                        <nav className="flex !text-white items-center justify-center opacity-80 mx-4" aria-label="Breadcrumb">
                            {/* Breadcrumb navigation */}
                            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse font-['RfDewi-Extended']">
                                <li className="inline-flex items-center !text-white">
                                    <a href="/" className="!text-white inline-flex items-center  text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white">
                                        <svg className="me-2.5 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                        </svg>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <div className="flex items-center !text-white">
                                        <svg className="!text-white h-5 w-5 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" />
                                        </svg>
                                        <a href="/" className="!text-white ms-1 text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white md:ms-2">Search</a>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                        <h1 className="text-white text-[30px] font-[800] sm:text-[40px] font-['RfDewi-Expanded']">
                            Search
                        </h1>
                    </div>
                </div>
            </div>

            <section className="py-8 antialiased  md:py-12 min-h-[calc(100vh-360px)]">
                <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                    <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
                        <h2 className="mt-3 text-xl font-[800] text-white dark:text-white sm:text-[27px] font-['RfDewi-Expanded'] mt-[20px]">Search Results For "<i>{searchedQuery}</i> "</h2>
                    </div>

                    {loading ? (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                            {[...Array(8)].map((_, index) => (
                                <div key={index} className="best-seller-item h-full w-full">
                                    <div className="h-70 w-full bg-gray-200 animate-pulse"></div>
                                    <div className="w-full h-auto bg-white">
                                        <img
                                            src="../images/loaderBg.webp"
                                            alt="Best Seller"
                                            className="best-seller-image w-full h-auto"
                                        />
                                    </div>
                                    <div className="my-[5px] mx-[19px] pb-[5px]">
                                        <div className="h-[20px] bg-white mb-[10px]"></div>
                                        <div className="h-[20px] bg-white w-[60%]"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="mb-4 grid gap-4 grid-cols-2 md:mb-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
                            {searchResults.map((product) => {
                                const saleprice = parseFloat(product.saleprice) || 0;

                                return (
                                    <div key={product.productid} className="best-seller-item h-full w-full">
                                        <a href={`/product?productid=${product.productid}&collection=${product.category}`}>

                                            <div className="h-70 w-full">
                                                {saleprice > 0 && (
                                                    <span className="best-seller-badge absolute font-bai-jamjuree font-700 text-[14px] text-white bg-red ml-2 mt-2 p-1 px-2">{(((product.price - product.saleprice) / product.price) * 100).toFixed(0)}% Off</span>
                                                )}
                                                <img
                                                    src={product.images[0] || "../images/mercedesF1Tee.png"}
                                                    alt={product.name || "Best Seller"}
                                                    className="best-seller-image w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="my-[5px] mx-[19px] text-white">
                                                <h3 className="font-bai-jamjuree font-600 text-[18px] font-[700] line-clamp-2">{product.name || "Product Name"}</h3>
                                                <span className="font-bai-jamjuree font-700 text-[20px] font-[700] text-white">
                                                    ${product.saleprice > 0 ? product.saleprice : product.price}
                                                </span>
                                                {product.saleprice > 0 && (
                                                    <span className="line-through text-red ml-[7px] opacity-80 text-[16px] font-[800]">
                                                        <span className="font-bai-jamjuree font-600 text-[16px] font-[700] text-white">
                                                            ${product.price}
                                                        </span>
                                                    </span>
                                                )}
                                            </div>
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    {searchResults.length === 0 && (
                        <div className="flex items-center justify-center h-[50vh]">
                            <h3 className="sm:text-[20px] font-['RfDewi-Expanded'] text-gray-900 text-center">No products found. <br></br><span className='text-[16px]'>(Try a different Search)</span></h3>
                        </div>
                    )}

                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Search;