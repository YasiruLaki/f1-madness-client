import React from 'react';
import "./Announcement.css";

const Announcement = () => {
    return (
        <div className="px-5 bg-red min-h-[34px] text-white flex items-center justify-center text-center">
            <span className="lg:text-[15px] md:text-[14px] sm:text-[13px] ml:text-[12px] mm:text-[11px] ms:text-[10px] font-['RfDewi-Expanded'] font-[700]">New Items have Arrived!  |  🚚 Free Shipping on Orders Over $50!</span>
        </div>
    );
};

export default Announcement;