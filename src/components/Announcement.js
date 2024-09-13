import React, { useEffect, useState } from 'react';
import './Announcement.css';

const Announcement = ({ loading }) => {
  const [siteAnnouncement, setSiteAnnouncement] = useState('');

  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        // Check if the announcement is already in local storage
        const cachedAnnouncement = localStorage.getItem('siteAnnouncement');
        if (cachedAnnouncement) {
          // If found in local storage, use it
          setSiteAnnouncement(cachedAnnouncement);
        } else {
          // Fetch announcement from server if not found in local storage
          const response = await fetch('https://f1-store-backend.netlify.app/.netlify/functions/fetchSiteSettings', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const data = await response.json();
          setSiteAnnouncement(data.siteAnnouncement);
          // Save fetched announcement to local storage
          localStorage.setItem('siteAnnouncement', data.siteAnnouncement);
        }
      } catch (error) {
        console.error('Error fetching announcement:', error);
      }
    };

    fetchAnnouncement();
  }, []);

  return (
    <div className={`px-5 bg-red min-h-[34px] text-white flex items-center justify-center text-center announcement ${loading ? 'loading' : 'slide-down'}`}>
      <span className="lg:text-[15px] md:text-[14px] sm:text-[13px] ml:text-[12px] mm:text-[11px] ms:text-[10px] font-['RfDewi-Expanded'] font-[700]">
        {siteAnnouncement}
      </span>
    </div>
  );
};

export default Announcement;