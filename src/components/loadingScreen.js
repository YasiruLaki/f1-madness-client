import React from 'react';
import './loadingScreen.css';

const LoadingScreen = () => {
    return (
        <div className="loading-screen">
            <div className="flex items-center">
                <span className="nav-bar-txt-1 !text-[20px]">F1MADNESS</span>
                <span className="nav-bar-txt-2 px-1 !text-[15px]">Store</span>
            </div>
            <div className="loader">
                <div className="ball"></div>
                <div className=" red ball"></div>
                <div className="ball"></div>
            </div>
        </div>
    );
};

export default LoadingScreen;

