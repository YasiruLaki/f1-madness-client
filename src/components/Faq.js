import React, { useState } from 'react';
import './Faq.css';

// Accordion Item Component
const AccordionItem = ({ index, title, content, isOpen, onClick }) => {
  return (
    <div
      className={`accordion sm:py-6 py-3 sm:px-6 px-2 border-b border-solid border-[#1111113a] transition-in duration-50 ${
        isOpen ? 'bg-[#111111]' : 'hover:bg-[#111111] hover:text-white ease-in'
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
          className={`text-[#111111] transition duration-500 group-hover:text-white ${
            isOpen ? 'rotate-180 text-white' : ''
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
        className={`accordion-content w-full px-0 overflow-hidden transition-max-height duration-500 ease-in-out ${
          isOpen ? 'max-h-40' : 'max-h-0'
        }`}
        aria-hidden={!isOpen}
      >
        <p className="text-base text-white opacity-80 sm:leading-6 mt-4 font-['RfDewi-Extended'] xl:text-[16px] sm:text-[14px] text-[11.5px] font-[500] text-[#A5A5A5]">{content}</p>
      </div>
    </div>
  );
};

// Main Faq Component
const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      title: 'How do I update my billing information?',
      content:
        'To update your billing information, go to your account settings and navigate to the billing section. Here you can modify your payment details.',
    },
    {
      title: 'How can I contact customer support?',
      content:
        "To contact customer support, look for a 'Contact us' or 'Help' button or link on the website or platform. You may be able to email, call, or chat with customer support for assistance.",
    },
    {
      title: 'How do I update my profile information?',
      content:
        'To update your profile information, navigate to your profile settings and click on the edit button. Make the necessary changes and save your updates.',
    },
    {
      title: 'How do I find my purchase history?',
      content:
        'To find your purchase history, log in to your account and go to the order history or purchase history section. Here you can view all your past transactions.',
    },
  ];

  const handleAccordionClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="py-[50px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h6 className="font-['RfDewi-Expanded'] text-[18px] font-[800] text-center text-red text-center">
            FAQs
          </h6>
          <h2 className="font-['RfDewi-Expanded'] sm:text-[36px] text-[25px] font-[800] text-center">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="accordion-group">
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
      </div>
    </section>
  );
};

export default Faq;