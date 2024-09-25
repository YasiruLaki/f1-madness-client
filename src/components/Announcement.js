import React, { useEffect, useState } from 'react';
import './Announcement.css';

const Announcement = ({ loading }) => {
  const [siteAnnouncement, setSiteAnnouncement] = useState('');
  const [showRatings, setShowRatings] = useState(true);

  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        const cachedAnnouncement = localStorage.getItem('siteAnnouncement');
        if (cachedAnnouncement) {
          setSiteAnnouncement(cachedAnnouncement);
        } else {
          const response = await fetch('https://f1-store-backend.netlify.app/.netlify/functions/fetchSiteSettings', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const data = await response.json();
          setSiteAnnouncement(data.siteAnnouncement);
          localStorage.setItem('siteAnnouncement', data.siteAnnouncement);
        }
      } catch (error) {
        console.error('Error fetching announcement:', error);
      }
    };

    fetchAnnouncement();

    // Toggle showRatings every 5 seconds
    const interval = setInterval(() => {
      setShowRatings((prev) => !prev);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`announcement-container ${loading ? 'loading' : 'slide-down'}`}>
      <div className={`announcement-content ${showRatings ? 'hide' : 'show'}`}>
        <span className="lg:text-[15px] md:text-[14px] sm:text-[13px] ml:text-[12px] mm:text-[11px] text-[10px] font-['RfDewi-Expanded'] font-[700]">
          {siteAnnouncement}
        </span>
      </div>
      <div className={`ratings ${showRatings ? 'show' : 'hide'}`}>
        {/* Add your ratings SVGs or content here */}
        <a href='/feedbacks'>
          <div className="flex items-center">
            <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <defs>
                <linearGradient id="half-yellow">
                  <stop offset="80%" stop-color="currentColor" />
                  <stop offset="20%" stop-color="white" />
                </linearGradient>
              </defs>
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" fill="url(#half-yellow)" />
            </svg>
            <p className="ms-1 lg:text-[15px] md:text-[14px] sm:text-[13px] ml:text-[12px] mm:text-[11px] text-[10px] font-['RfDewi-Expanded'] font-[700] text-white">4.95</p>
            <p className="ms-1 lg:text-[15px] md:text-[14px] sm:text-[13px] ml:text-[12px] mm:text-[11px] text-[10px] font-['RfDewi-Expanded'] font-[700] text-white">out of</p>
            <p className="ms-1 lg:text-[15px] md:text-[14px] sm:text-[13px] ml:text-[12px] mm:text-[11px] text-[10px] font-['RfDewi-Expanded'] font-[700] text-white">5</p>
            <p className="ms-1 lg:text-[15px] md:text-[14px] sm:text-[13px] ml:text-[12px] mm:text-[11px] text-[10px] font-['RfDewi-Expanded'] font-[700] hidden ms:block text-white">Based on157 Reviews</p>
          </div>
        </a>

      </div>
    </div>
  );
};

export default Announcement;