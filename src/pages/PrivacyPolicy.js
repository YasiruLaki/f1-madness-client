import React from 'react';
import './PrivacyPolicy.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Announcement from '../components/Announcement';

const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy">
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
                                            <span className="!text-white ms-1 text-sm font-medium text-gray-500 md:ms-2">Privacy Policy</span>
                                        </div>
                                    </li>
                                </ol>
                            </nav>
                            <h1 className="text-white text-[30px] font-[800] sm:text-[40px] font-['RfDewi-Expanded']">
                                Privacy Policy
                            </h1>
                            <p className="text-white text-[14px] font-['RfDewi-Expanded']mx-4">Understand how we collect, use, and protect your personal information.</p>
                        </div>
                    </div>
                </div>

                <div className='mx-auto max-w-screen-xl px-4 2xl:px-0 py-12'>
                    {/* <h1 className="text-[25px] font-[700] sm:text-[30px] font-['RfDewi-Expanded'] mt-10"></h1> */}
                    <p className="text-[15px] font-[400] sm:text-[18px] font-['RfDewi-Extended'] mt-3">At Pitlane Performance, we take your privacy seriously. When you shop with us or engage with our content, you can trust that your personal information is in safe hands. We are committed to protecting your data and being fully transparent about how we use it.</p>

                    <p className="text-[15px] font-[400] sm:text-[18px] font-['RfDewi-Extended'] mt-3">Here’s what you can expect from our privacy practices:</p>

                    <ul className="list-disc list-inside text-[15px] font-[700] sm:text-[18px] font-['RfDewi-Extended'] mt-3">
                        <li>Secure Data Handling:</li>
                        <p className="text-[15px] font-[400] sm:text-[18px] font-['RfDewi-Extended'] mt-3">Any information you provide—whether it’s your name, email address, or payment details—is stored securely and used only for the purposes of processing your orders, providing customer service, and improving your experience.
                        </p><br></br>
                        <li>No Unnecessary Sharing:</li>
                        <p className="text-[15px] font-[400] sm:text-[18px] font-['RfDewi-Extended'] mt-3">We never sell or share your personal information with third parties, except when necessary for shipping and payment processing.
                        </p><br></br>
                        <li>Your Choice:</li>
                        <p className="text-[15px] font-[400] sm:text-[18px] font-['RfDewi-Extended'] mt-3">By subscribing to our newsletter or following us on social media, you agree to receive updates, promotions, and exclusive offers. You can opt out at any time, no strings attached.
                        </p><br></br>
                        <li>Transparency:</li>
                        <p className="text-[15px] font-[400] sm:text-[18px] font-['RfDewi-Extended'] mt-3">If you ever want to review, update, or delete the personal information we hold, just reach out to our team, and we’ll be happy to assist.
                        </p><br></br>
                    </ul>

                    <p className="text-[15px] font-[400] sm:text-[18px] font-['RfDewi-Extended'] mt-3">We value your trust and will always respect your privacy. For more details, feel free to read our full privacy policy linked <a href='../docs/Pitlane-Performances-Privacy-Policy.pdf' target='_blank' className='underline'>Here</a>.</p>

                </div>

            </section>

            <Footer />        </div>
    );
};

export default PrivacyPolicy;