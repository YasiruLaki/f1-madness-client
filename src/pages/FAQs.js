import React, {useState} from 'react';
import './FAQs.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Announcement from '../components/Announcement';

const AccordionItem = ({ index, title, content, isOpen, onClick }) => {
    return (
        <div
            className={`accordion sm:py-6 py-3 sm:px-6 px-2 border-b border-solid border-[#1111113a] transition-in duration-50 ${isOpen ? 'bg-[#111111]' : 'hover:bg-[#111111] hover:text-white ease-in'
                }`}
            onClick={() => onClick(index)}
            aria-expanded={isOpen}
        >
            <button
                className={`accordion-toggle group inline-flex items-center justify-between leading-8 w-full text-left hover:text-white font-['RfDewi-Expanded'] sm:text-[20px] text-[15px] font-[700] text-left ${isOpen ? 'text-white' : ''}`}
                aria-expanded={isOpen}
            >
                <h5>{title}</h5>
                <svg
                    className={`text-[#111111] transition duration-500 group-hover:text-white ${isOpen ? 'rotate-180 text-white' : ''
                        }`}
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
            <div
                className={`accordion-content w-full px-0 overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-40' : 'max-h-0'
                    }`}
                aria-hidden={!isOpen}
            >
                <p className="text-base text-white opacity-80 sm:leading-6 mt-4 font-['RfDewi-Extended'] xl:text-[16px] sm:text-[14px] text-[11.5px] font-[500] text-[#A5A5A5]">{content}</p>
            </div>
        </div>
    );
};


const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqItems = [
        {
            title: 'What is Pitlane Performance all about?',
            content:
                "Pitlane Performance is a clothing brand for Formula 1 fans, offering high-quality, comfortable apparel inspired by the excitement and adrenaline of the motorsport world. We also deliver top-notch F1 content through our social channels, making us more than just a brand—we're a community of passionate F1 enthusiasts.",
        },
        {
            title: 'Do you ship internationally?',
            content:
                "Yes! We’re proud to offer worldwide shipping, so no matter where you’re watching the race from, you can enjoy Pitlane Performance gear. Shipping times may vary depending on your location, but we strive to get your order to you as quickly as possible.",
        },
        {
            title: 'How can I track my order?',
            content:
                "Once your order is shipped, we’ll send you a tracking number via email. You can use this to follow your package every step of the way. If you have any issues, feel free to reach out to our customer service team.",
        },
        {
            title: 'What if I need to exchange or return an item?',
            content:
                "We want you to be completely happy with your purchase! If you need to exchange or return an item, please contact us within 30 days of receiving your order. The item must be in its original condition (unworn and unwashed). Visit our Returns & Exchanges page for more details.",
        },
        {
            title: 'How do I know what size to order?',
            content:
                "We provide a detailed size chart for each product on our website. If you’re unsure, we recommend checking the measurements and comparing them to your favorite piece of clothing. Feel free to contact us if you need any help choosing the right size!"
        },
        {
            title: 'Are your products eco-friendly?',
            content:
                "Yes! Sustainability is a core value at Pitlane Performance. We prioritize eco-conscious materials and responsible production processes to ensure that our products not only look good but also make a positive impact on the environment."
        },
        {
            title: 'How often do you release new products?',
            content:
                "We’re always working on new designs and collections! Follow us on social media or sign up for our newsletter to be the first to know about new releases, limited drops, and special promotions."
        },
        {
            title: 'Can I collaborate with Pitlane Performance?',
            content:
                "We’re always open to potential collaborations and partnerships. If you share our passion for Formula 1 and quality apparel, reach out to us through our Contact page or email. We’d love to hear your ideas!"
        },
        {
            title: 'How often do you post new content on social media?',
            content:
                "We post 2-3 times a week on our social channels, bringing you the latest F1 news, top moments, and engaging content to keep the adrenaline pumping between race weekends. Follow us to stay updated!"
        },
        {
            title: 'How can I stay updated on new products and content?',
            content:
                "The best way to stay in the loop is by subscribing to our newsletter or following us on Instagram, YouTube, and other social media platforms. We regularly share updates, exclusive content, and early access to new collections."
        },
    ];

    const handleAccordionClick = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <div className="faq-container">
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
                                            <span className="!text-white ms-1 text-sm font-medium text-gray-500 md:ms-2">FAQs</span>
                                        </div>
                                    </li>
                                </ol>
                            </nav>
                            <h1 className="text-white text-[30px] font-[800] sm:text-[40px] font-['RfDewi-Expanded']">
                                Frequently Asked Questions
                            </h1>
                            <p className="text-white text-[14px] font-['RfDewi-Expanded']mx-4">Find answers to common questions about our products and services.</p>
                        </div>
                    </div>
                </div>

                <div className="accordion-group py-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {faqItems.map((item, index) => (
                        <AccordionItem
                            key={index}
                            index={index}
                            title={item.title}
                            content={item.content}
                            isOpen={index === openIndex}
                            onClick={handleAccordionClick}
                        />
                    ))}
                </div>

            </section>

            <Footer />
        </div>
    );
};

export default FAQs;