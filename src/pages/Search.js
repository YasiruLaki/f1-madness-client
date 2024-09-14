import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Search.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Announcement from '../components/Announcement';
import LoadingScreen from '../components/loadingScreen';

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
                const filtered = flattened.filter(product => product.name.toLowerCase().includes(searchedQuery.toLowerCase()));
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
            <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12 min-h-[calc(100vh-360px)]">
                <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                    <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
                        <h2 className="mt-3 text-xl font-[800] dark:text-white sm:text-[27px] font-['RfDewi-Expanded'] mt-[20px]">Search Results For "<i>{searchedQuery}</i> "</h2>
                    </div>
                    {searchResults.length === 0 && (
                        <div className="flex items-center justify-center h-[50vh]">
                            <h3 className="sm:text-[20px] font-['RfDewi-Expanded'] text-gray-900 text-center">No products found. <br></br><span className='text-[16px]'>(Try a different Search)</span></h3>
                        </div>
                    )}

                    <div className="mb-4 grid gap-4 grid-cols-2 md:mb-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
                        {searchResults.map((product) => {
                            const salePrice = parseFloat(product.salePrice) || 0;
                            const originalPrice = parseFloat(product.price) || 0;

                            return (
                                <div key={product.productID} className="best-seller-item h-full w-full">
                                    <a href={`/product?productID=${encodeURIComponent(product.productID)}`}>
                                        <div className="h-70 w-full">
                                            {salePrice > 0 && (
                                                <span className="best-seller-badge absolute font-['RfDewi-Expanded'] font-[700] text-[16px] bg-red px-[8px] pt-[15px] rounded-[4px] rounded-t-none items-center ml-[10px] text-white">Sale</span>
                                            )}
                                            <img
                                                src={product.images[0] || "../images/mercedesF1Tee.png"}
                                                alt={product.name || "Best Seller"}
                                                className="best-seller-image w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="my-[5px] mx-[19px] text-white">
                                            <h3 className="font-['RfDewi-Expanded'] text-[16px] font-[700]">{product.name || "Product Name"}</h3>
                                            {salePrice > 0 ? (
                                                <>
                                                    <span className="font-['RfDewi-Expanded'] text-[18px] font-[700] mt-[-5px] text-white">${salePrice}</span>
                                                    <span className="line-through text-red ml-[5px] opacity-80 text-[14px] font-[800]">
                                                        <span className="font-['RfDewi-Expanded'] text-[14px] font-[700] mt-[-5px] text-white">${originalPrice}</span>
                                                    </span>
                                                </>
                                            ) : (
                                                <span className="font-['RfDewi-Expanded'] text-[16px] font-[700] mt-[-5px]">${originalPrice}</span>
                                            )}
                                        </div>
                                    </a>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Search;