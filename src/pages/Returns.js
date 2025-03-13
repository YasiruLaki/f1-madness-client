import React from 'react';
import './Returns.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Announcement from '../components/Announcement';

const Returns = () => {
    return (
        <div className="returns-container">
            <Navbar />
            <Announcement />
            <section className="bg-gray-50  antialiased min-h-[calc(100vh-360px)]">
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
                                        <a href="/" className="!text-white inline-flex items-center  text-sm font-medium text-gray-700 hover:text-primary-600">
                                            <svg className="me-2.5 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                            </svg>
                                            Home
                                        </a>
                                    </li>
                                    <li aria-current="page">
                                        <div className="flex items-center">
                                            <svg className="!text-white h-5 w-5 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" />
                                            </svg>
                                            <span className="!text-white ms-1 text-sm font-medium text-gray-500 md:ms-2">Returns</span>
                                        </div>
                                    </li>
                                </ol>
                            </nav>
                            <h1 className="text-white text-[30px] font-[800] sm:text-[40px] font-['RfDewi-Expanded']">
                                Return Policy
                            </h1>
                        </div>
                    </div>
                </div>

                <div className='mx-auto max-w-screen-xl px-4 2xl:px-0'>
                    <p className="text-[15px] font-[400] sm:text-[18px] font-['RfDewi-Extended'] mt-3">At Pitlane Performances, we want you to be completely satisfied with your purchase. If you’re not happy with your order, we’re here to help.</p>

                    <ul className="list-inside text-[15px] font-[700] sm:text-[18px] font-['RfDewi-Extended'] mt-3">
                        <li>1. Return Eligibility</li>
                        <p className="text-[15px] font-[400] sm:text-[18px] font-['RfDewi-Extended'] mt-3">You can return items within 30 days of receiving your order if they meet the following conditions:
                        </p>
                        <ul>
                            <li>• Item must be unused, unworn, and unwashed</li>
                            <li>• Item must be in its original packaging with tags attached</li>
                            <li>• Proof of purchase (order confirmation or receipt) is required</li>
                        </ul>
                        <br></br>
                        <li>Non-returnable items:</li>
                        <p className="text-[15px] font-[400] sm:text-[18px] font-['RfDewi-Extended'] mt-3">We never sell or share your personal information with third parties, except when necessary for shipping and payment processing.
                        </p>
                        <ul>
                            <li>• Personalized or custom-made items</li>
                            <li>• Final sale or clearance items</li>
                            <li>• Gift cards</li>
                        </ul>
                        <br></br>
                        <li>2. How to Initiate a Return</li>
                        <p className="text-[15px] font-[400] sm:text-[18px] font-['RfDewi-Extended'] mt-3">Once we receive and inspect the returned item, we will process your refund:
                        </p>
                        <ul>
                            <li>• Refunds will be credited to the original payment method within 7-10 business days.</li>
                            <li>• Shipping fees are non-refundable (unless the return is due to our error).</li>
                        </ul>
                        <br></br>
                        <li>4. Exchanges</li>
                        <p className="text-[15px] font-[400] sm:text-[18px] font-['RfDewi-Extended'] mt-3">If you need a different size or product, please place a new order and return the original item for a refund.
                        </p><br></br>
                        <li>5. Damaged or Incorrect Items</li>
                        <p className="text-[15px] font-[400] sm:text-[18px] font-['RfDewi-Extended'] mt-3">Received a wrong or defective item? We’re sorry! Contact us at contact@pitlanceperformances.com within 7 days of delivery, and we’ll make it right at no extra cost.
                        </p><br></br>
                    </ul>

                    <p className="text-[15px] font-[400] sm:text-[18px] font-['RfDewi-Extended'] mt-3 pb-10">For any questions regarding returns, feel free to reach out to contact@pitlanceperformances.com or visit our Contact Us page.</p>

                </div>

            </section>

            <Footer />        </div>
    );
};

export default Returns;