import React from 'react';
import './Terms&Conditions.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Announcement from '../components/Announcement';

const TermsAndConditions = () => {
    return (
        <div className="terms-container">
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
                                            <span className="!text-white ms-1 text-sm font-medium text-gray-500 md:ms-2">Terms & Conditions</span>
                                        </div>
                                    </li>
                                </ol>
                            </nav>
                            <h1 className="text-white text-[30px] font-[800] sm:text-[40px] font-['RfDewi-Expanded']">
                                Terms & Conditions
                            </h1>
                            <p className="text-white text-[14px] font-['RfDewi-Expanded']mx-4">Review the rules and guidelines for using our website and services.</p>
                        </div>
                    </div>
                </div>

                <div className='mx-auto max-w-screen-xl px-4 2xl:px-0 py-8'>
                    <p className="text-[15px] font-[400] sm:text-[18px] font-['RfDewi-Extended'] mt-3">Welcome to Pitlane Performance. By using our website, making a purchase, or engaging with our content, you agree to the following terms and conditions. We encourage you to review them carefully.</p>
                    <h1 className="text-[25px] font-[700] sm:text-[30px] font-['RfDewi-Expanded'] mt-10">1. General</h1>
                    <p className="text-[15px] font-[400] sm:text-[18px] font-['RfDewi-Extended'] mt-3">All products, services, and content provided by Pitlane Performance are subject to availability and may be modified or discontinued at any time without prior notice. We reserve the right to refuse service to anyone for any reason at any time.</p>

                    <h1 className="text-[25px] font-[700] sm:text-[30px] font-['RfDewi-Expanded'] mt-10">2. Payments & Pricing</h1>
                    <p className="text-[15px] font-[400] sm:text-[18px] font-['RfDewi-Extended'] mt-3">All prices listed on our website are in USD and include applicable taxes unless otherwise stated. Payment must be received in full at the time of purchase. We reserve the right to adjust prices and/or correct pricing errors on our website without prior notice.</p>

                    <h1 className="text-[25px] font-[700] sm:text-[30px] font-['RfDewi-Expanded'] mt-10">3. Shipping & Delivery</h1>
                    <p className="text-[15px] font-[400] sm:text-[18px] font-['RfDewi-Extended'] mt-3">We aim to ship your orders as quickly as possible. Shipping times may vary depending on your location. Once your order has been shipped, you’ll receive a tracking number via email. Please note that Pitlane Performance is not responsible for any delays or issues caused by shipping carriers.</p>

                    <h1 className="text-[25px] font-[700] sm:text-[30px] font-['RfDewi-Expanded'] mt-10">4. Returns & Exchanges</h1>
                    <p className="text-[15px] font-[400] sm:text-[18px] font-['RfDewi-Extended'] mt-3">We offer a 14-day money-back guarantee on all unworn, unwashed items in their original packaging. For more information on returns and exchanges, please refer to our dedicated Returns & Exchanges policy.</p>

                    <h1 className="text-[25px] font-[700] sm:text-[30px] font-['RfDewi-Expanded'] mt-10">5. Intellectual Property</h1>
                    <p className="text-[15px] font-[400] sm:text-[18px] font-['RfDewi-Extended'] mt-3">All content on this website, including but not limited to logos, designs, graphics, text, and product images, are the intellectual property of Pitlane Performance and are protected by copyright laws. Unauthorized use of any materials from our website is strictly prohibited.</p>

                    <h1 className="text-[25px] font-[700] sm:text-[30px] font-['RfDewi-Expanded'] mt-10">6. Privacy Policy</h1>
                    <p className="text-[15px] font-[400] sm:text-[18px] font-['RfDewi-Extended'] mt-3">Your privacy is important to us. By using our website, you agree to the collection and use of your information as outlined in our Privacy Policy. We do not share or sell your personal data to third parties except for necessary services such as shipping and payment processing.</p>

                    <h1 className="text-[25px] font-[700] sm:text-[30px] font-['RfDewi-Expanded'] mt-10">7. Changes to Terms</h1>
                    <p className="text-[15px] font-[400] sm:text-[18px] font-['RfDewi-Extended'] mt-3">Pitlane Performance reserves the right to update or modify these terms and conditions at any time. Any changes will be posted on this page, and your continued use of the site constitutes acceptance of any changes.</p>

                    <h1 className="text-[25px] font-[700] sm:text-[30px] font-['RfDewi-Expanded'] mt-10">8. Limitation of Liability</h1>
                    <p className="text-[15px] font-[400] sm:text-[18px] font-['RfDewi-Extended'] mt-3">Pitlane Performance will not be liable for any direct, indirect, incidental, or consequential damages that arise from your use of our website, products, or services.</p><br></br>

                    <p className="text-[15px] font-[400] sm:text-[18px] font-['RfDewi-Extended'] mt-3">By making a purchase or engaging with our content, you agree to these terms. If you have any questions or concerns, feel free to contact us at <a href='/contact' className='underline'>here</a>.</p>

                </div>

            </section>

            <Footer />        </div>
    );
};

export default TermsAndConditions;