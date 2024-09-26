import React from 'react';
import './About.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Announcement from '../components/Announcement';

const About = () => {
    return (
        <div className="about-container">

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
                                            <span className="!text-white ms-1 text-sm font-medium text-gray-500 md:ms-2">About</span>
                                        </div>
                                    </li>
                                </ol>
                            </nav>
                            <h1 className="text-white text-[30px] font-[800] sm:text-[40px] font-['RfDewi-Expanded']">
                                About Us
                            </h1>
                            <p className="text-white text-[14px] font-['RfDewi-Expanded']mx-4">Learn more about our story, mission, and values.</p>
                        </div>
                    </div>
                </div>

                <div className='mx-auto max-w-screen-xl px-4 2xl:px-0 pb-16'>
                    <h1 className="text-[25px] font-[700] sm:text-[30px] font-['RfDewi-Expanded'] mt-10">Welcome to Pitlane Performance, where fashion meets the fast lane! 🚀</h1>
                    <p className="text-[15px] font-[400] sm:text-[18px] font-['RfDewi-Extended'] mt-3">We are more than just a clothing brand – we’re a community of motorsport enthusiasts who live and breathe Formula 1. Whether you’re on the track or in the stands, our clothing keeps you looking stylish while revving up your passion for F1.<br></br><br></br>
                    Through our Instagram channel, we fuel your love for Formula 1 by delivering top-tier content: from breaking news to in-depth race analyses, legendary drives, and behind-the-scenes insights. We pride ourselves on delivering nothing less than pole position when it comes to quality coverage, while keeping the banter as fast as a pit stop.<br></br><br></br>
                    We know we’re only as good as the amazing community that supports us. That’s why your loyalty means everything – without you, we’re just spinning our wheels. So, whether you’re here for the fashion or the Formula 1 fanaticism (or both!), we’re thrilled to have you along for the ride.</p>

                    <h1 className="text-[25px] font-[700] sm:text-[30px] font-['RfDewi-Expanded'] mt-10">But why “Pitlane Performance” you may ask?</h1>
                    <p className="text-[15px] font-[400] sm:text-[18px] font-['RfDewi-Extended'] mt-3">At Pitlane Performance, we chose our name to reflect what we’re all about: speed, precision, and that winning mindset. In Formula 1, the pitlane is where races are won and lost—where seconds make the difference between victory and defeat. It’s a place of elite performance, just like our clothing and content.<br></br><br></br>
                    But we know that not everyone can be at the track. Many of our fans tune in from home, across the world, for those high-speed weekends. That’s why we’ve designed our apparel to keep you comfortable whether you’re watching from your couch, hosting a race-day party, or dreaming of the grandstands. Our goal is to deliver the same performance-driven style that fuels F1, but with a level of comfort perfect for enjoying the race wherever you are.<br></br><br></br>
                    So, whether you’re cheering from the grandstands or streaming the race with your morning coffee halfway across the globe, Pitlane Performance has got you covered – literally. 🌍</p>

                    <h1 className="text-[25px] font-[700] sm:text-[30px] font-['RfDewi-Expanded'] mt-10">History</h1>
                    <p className="text-[15px] font-[400] sm:text-[18px] font-['RfDewi-Extended'] mt-3">At Pitlane Performance, we started our engines just two years ago with a simple goal: to share our passion for Formula 1 with the world. What began as a few YouTube videos breaking down the latest race highlights has since grown into a thriving, global community united by a love for speed, adrenaline, and all things motorsport.<br></br><br></br>
                    From the very beginning, we knew we wanted to offer more than just race recaps. So, we’ve built a platform that not only delivers the latest F1 news but also deep dives into the sport’s best moments – think “Top 10 Overtakes,” “Legendary Drives,” and insider insights you won’t find anywhere else. Posting 2-3 times a week, we’re always working to keep our fans engaged and entertained, whether you’re here for the hard facts or the heart-pounding drama of the race.<br></br><br></br>
                    Today, we’re proud to have one of the most active and passionate communities in the F1 space. And the best part? We’re just getting started. From YouTube to Instagram and beyond, we’re taking Pitlane Performance to new heights—because for us, there’s always more ground to cover (and laps to lead).<br></br><br></br>
                    Join us on this ride—it’s going to be fast, it’s going to be fun, and we can’t wait to share the journey with you!</p>

                    <h1 className="text-[25px] font-[700] sm:text-[30px] font-['RfDewi-Expanded'] mt-10">Cause</h1>
                    <p className="text-[15px] font-[400] sm:text-[18px] font-['RfDewi-Extended'] mt-3">At Pitlane Performance, everything we do is for one reason: the fans. From the very first video we posted to the latest piece of merchandise we’ve designed, our passion has always been to fuel the same excitement for Formula 1 that drives us. This isn’t just a brand – it’s a community of like-minded people who live for the thrill of race weekends, the roar of engines, and the pursuit of excellence on and off the track.<br></br><br></br>
                    For us, it’s all about giving back to the fans who make this journey worthwhile. Every like, comment, and piece of feedback inspires us to push harder and deliver even more. That’s why we reinvest everything we earn directly into the business. Whether it’s through higher-quality videos, more insightful content, or top-notch merchandise, we’re constantly working to improve what we offer. The goal? To make every experience with Pitlane Performance better than the last.<br></br><br></br>
                    This is more than just a passion project – it’s a commitment to you, our community. The road ahead is exciting, and as we continue to grow, we want to bring you along for the ride. Because at the end of the day, we’re here for the same reason as you: the love of the sport and the people who share it with us. Buckle up, because this is just the beginning.</p>



                </div>

            </section>

            <Footer />
        </div>
    );
};

export default About;