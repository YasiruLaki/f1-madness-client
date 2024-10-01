import React from 'react';
import './Feedback.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Feedback = () => {
    return (
        <div className="feedback-container bg-gray relative isolate overflow-hidden py-10 mt-12 font-bai-jamjuree text-white">
            <div>
                <div class="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <h6 className="!font-bai-jamjuree  text-[18px] font-[800] text-center text-red text-center">
                            Feedback
                        </h6>
                        <h2 className="!font-bai-jamjuree font-700 text-white  text-[38px] sm:text-[36px] text-center">
                            What Our Customers Say
                        </h2>
                    </div>
                    <div class="grid grid-cols-1 xl:grid-cols-2 gap-11 max-xl:max-w-2xl max-xl:mx-auto">
                        <div class="box flex flex-col gap-y-4 w-full ">
                            <div class="flex items-center w-full">
                                <p class="font-[600] text-lg text-white mr-0.5">5</p>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_12042_8589)">
                                        <path
                                            d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                                            fill="#FBBF24" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_12042_8589">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p class="h-2 w-full sm:min-w-[278px] rounded-3xl bg-amber-50 ml-5 mr-3">
                                    <span class="h-full w-[93%] rounded-3xl bg-amber-400 flex"></span>
                                </p>
                                <p class=" text-lg font-[600] text-white mr-0.5">150</p>
                            </div>
                            <div class="flex items-center w-full">
                                <p class="font-[600] text-lg text-white mr-0.5">4</p>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_12042_8589)">
                                        <path
                                            d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                                            fill="#FBBF24" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_12042_8589">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p class="h-2 w-full xl:min-w-[278px] rounded-3xl bg-amber-50 ml-5 mr-3">
                                    <span class="h-full w-[5%] rounded-3xl bg-amber-400 flex"></span>
                                </p>
                                <p class="font-[600] text-lg text-white mr-0.5">15</p>
                            </div>
                            <div class="flex items-center">
                                <p class="font-[600] text-lg text-white mr-0.5">3</p>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_12042_8589)">
                                        <path
                                            d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                                            fill="#FBBF24" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_12042_8589">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p class="h-2 w-full xl:min-w-[278px] rounded-3xl bg-amber-50 ml-5 mr-3">
                                    <span class="h-full w-[2%] rounded-3xl bg-amber-400 flex"></span>
                                </p>
                                <p class="font-[600] text-lg text-white mr-0.5">2</p>
                            </div>
                            <div class="flex items-center">
                                <p class="font-[600] text-lg text-white mr-0.5">2</p>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_12042_8589)">
                                        <path
                                            d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                                            fill="#FBBF24" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_12042_8589">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p class="h-2 w-full xl:min-w-[278px] rounded-3xl bg-amber-50 ml-5 mr-3">
                                    <span class="h-full w-[1%] rounded-3xl bg-amber-400 flex"></span>
                                </p>
                                <p class="font-[600] text-lg text-white mr-0.5">1</p>
                            </div>
                            <div class="flex items-center">
                                <p class="font-[600] text-lg text-white mr-0.5">1</p>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_12042_8589)">
                                        <path
                                            d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                                            fill="#FBBF24" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_12042_8589">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p class="h-2 w-full xl:min-w-[278px] rounded-3xl bg-amber-50 ml-5 mr-3">
                                    <span class="h-full w-[1%] rounded-3xl bg-amber-400 flex"></span>
                                </p>
                                <p class="font-[600] text-lg py-[1px] text-white mr-0.5">1</p>
                            </div>
                        </div>
                        <div class="p-8 bg-[#3232326a] backdrop-blur-sm rounded-3xl flex items-center justify-center flex-col">
                            <h2 class="font-manrope font-bold text-5xl text-white mb-6">
                                4.95</h2>
                            <div class="flex items-center justify-center gap-2 sm:gap-6 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44"
                                    fill="none">
                                    <g clip-path="url(#clip0_13624_2608)">
                                        <path
                                            d="M21.1033 2.9166C21.4701 2.17335 22.5299 2.17335 22.8967 2.9166L28.233 13.729C28.3786 14.0241 28.6602 14.2287 28.9859 14.276L40.9181 16.0099C41.7383 16.1291 42.0658 17.137 41.4723 17.7156L32.8381 26.1318C32.6024 26.3616 32.4949 26.6926 32.5505 27.017L34.5888 38.9009C34.7289 39.7178 33.8714 40.3408 33.1378 39.9551L22.4653 34.3443C22.174 34.1911 21.826 34.1911 21.5347 34.3443L10.8622 39.9551C10.1286 40.3408 9.27114 39.7178 9.41125 38.9009L11.4495 27.017C11.5051 26.6926 11.3976 26.3616 11.1619 26.1318L2.52771 17.7156C1.93419 17.137 2.2617 16.1291 3.08192 16.0099L15.0141 14.276C15.3398 14.2287 15.6214 14.0241 15.767 13.729L21.1033 2.9166Z"
                                            fill="#FBBF24" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_13624_2608">
                                            <rect width="44" height="44" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44"
                                    fill="none">
                                    <g clip-path="url(#clip0_13624_2608)">
                                        <path
                                            d="M21.1033 2.9166C21.4701 2.17335 22.5299 2.17335 22.8967 2.9166L28.233 13.729C28.3786 14.0241 28.6602 14.2287 28.9859 14.276L40.9181 16.0099C41.7383 16.1291 42.0658 17.137 41.4723 17.7156L32.8381 26.1318C32.6024 26.3616 32.4949 26.6926 32.5505 27.017L34.5888 38.9009C34.7289 39.7178 33.8714 40.3408 33.1378 39.9551L22.4653 34.3443C22.174 34.1911 21.826 34.1911 21.5347 34.3443L10.8622 39.9551C10.1286 40.3408 9.27114 39.7178 9.41125 38.9009L11.4495 27.017C11.5051 26.6926 11.3976 26.3616 11.1619 26.1318L2.52771 17.7156C1.93419 17.137 2.2617 16.1291 3.08192 16.0099L15.0141 14.276C15.3398 14.2287 15.6214 14.0241 15.767 13.729L21.1033 2.9166Z"
                                            fill="#FBBF24" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_13624_2608">
                                            <rect width="44" height="44" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44"
                                    fill="none">
                                    <g clip-path="url(#clip0_13624_2608)">
                                        <path
                                            d="M21.1033 2.9166C21.4701 2.17335 22.5299 2.17335 22.8967 2.9166L28.233 13.729C28.3786 14.0241 28.6602 14.2287 28.9859 14.276L40.9181 16.0099C41.7383 16.1291 42.0658 17.137 41.4723 17.7156L32.8381 26.1318C32.6024 26.3616 32.4949 26.6926 32.5505 27.017L34.5888 38.9009C34.7289 39.7178 33.8714 40.3408 33.1378 39.9551L22.4653 34.3443C22.174 34.1911 21.826 34.1911 21.5347 34.3443L10.8622 39.9551C10.1286 40.3408 9.27114 39.7178 9.41125 38.9009L11.4495 27.017C11.5051 26.6926 11.3976 26.3616 11.1619 26.1318L2.52771 17.7156C1.93419 17.137 2.2617 16.1291 3.08192 16.0099L15.0141 14.276C15.3398 14.2287 15.6214 14.0241 15.767 13.729L21.1033 2.9166Z"
                                            fill="#FBBF24" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_13624_2608">
                                            <rect width="44" height="44" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44"
                                    fill="none">
                                    <g clip-path="url(#clip0_13624_2608)">
                                        <path
                                            d="M21.1033 2.9166C21.4701 2.17335 22.5299 2.17335 22.8967 2.9166L28.233 13.729C28.3786 14.0241 28.6602 14.2287 28.9859 14.276L40.9181 16.0099C41.7383 16.1291 42.0658 17.137 41.4723 17.7156L32.8381 26.1318C32.6024 26.3616 32.4949 26.6926 32.5505 27.017L34.5888 38.9009C34.7289 39.7178 33.8714 40.3408 33.1378 39.9551L22.4653 34.3443C22.174 34.1911 21.826 34.1911 21.5347 34.3443L10.8622 39.9551C10.1286 40.3408 9.27114 39.7178 9.41125 38.9009L11.4495 27.017C11.5051 26.6926 11.3976 26.3616 11.1619 26.1318L2.52771 17.7156C1.93419 17.137 2.2617 16.1291 3.08192 16.0099L15.0141 14.276C15.3398 14.2287 15.6214 14.0241 15.767 13.729L21.1033 2.9166Z"
                                            fill="#FBBF24" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_13624_2608">
                                            <rect width="44" height="44" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44"
                                    fill="none">
                                    <g clip-path="url(#clip0_13624_2608)">
                                        <path
                                            d="M21.1033 2.9166C21.4701 2.17335 22.5299 2.17335 22.8967 2.9166L28.233 13.729C28.3786 14.0241 28.6602 14.2287 28.9859 14.276L40.9181 16.0099C41.7383 16.1291 42.0658 17.137 41.4723 17.7156L32.8381 26.1318C32.6024 26.3616 32.4949 26.6926 32.5505 27.017L34.5888 38.9009C34.7289 39.7178 33.8714 40.3408 33.1378 39.9551L22.4653 34.3443C22.174 34.1911 21.826 34.1911 21.5347 34.3443L10.8622 39.9551C10.1286 40.3408 9.27114 39.7178 9.41125 38.9009L11.4495 27.017C11.5051 26.6926 11.3976 26.3616 11.1619 26.1318L2.52771 17.7156C1.93419 17.137 2.2617 16.1291 3.08192 16.0099L15.0141 14.276C15.3398 14.2287 15.6214 14.0241 15.767 13.729L21.1033 2.9166Z"
                                            fill="#FBBF24" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_13624_2608">
                                            <rect width="44" height="44" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <p class="font-[600] text-xl leading-8 text-white text-center">169 Ratings</p>
                        </div>
                    </div>
                </div>
                <section className="pt-10">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            slidesPerView={1}
                            spaceBetween={32}
                            loop={true}
                            centeredSlides={true}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 32,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 32,
                                },
                                1024: {
                                    slidesPerView: 2,
                                    spaceBetween: 32,
                                },
                            }}
                            className="mySwiper z-100"
                        >
                            <SwiperSlide>
                                <div className=" group bg-[#323232] border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500 w-full mx-auto hover:shadow-sm ">
                                    <div>
                                        <div className="flex items-center mb-3 gap-2 text-[orange] transition-all duration-500">
                                            <svg
                                                className="w-5 h-5"
                                                viewBox="0 0 18 17"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                            <span className="text-base font-semibold text-white">
                                                4.9
                                            </span>
                                        </div>
                                        <h2 className='!font-[RfDewi-Expanded] font-[700]  mb-1'>
                                            “The best F1 merch I’ve ever owned!”
                                        </h2>
                                        <p className="text-base text-white text-xs leading-6 transition-all duration-500 pb-1">
                                            I’m a massive Formula 1 fan, so I’ve bought my fair share of F1 clothing from different brands over the years. But nothing has impressed me as much as Pitlane Performance. The hoodie I got feels incredibly soft and looks just as good after several washes (which is rare!). What I love most is that it’s not just about F1 logos slapped on a shirt; you can tell a lot of thought went into the design, from the subtle nods to motorsport to the overall quality. This is clothing I can wear every day, not just on race weekends.
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-1">
                                        <div className="block">
                                            <h5 className="text-white font-medium transition-all duration-500 mb-1">
                                            James W.
                                            </h5>
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>

                            <SwiperSlide>
                                <div className=" group bg-[#323232] border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500 w-full mx-auto hover:shadow-sm ">
                                    <div>
                                        <div className="flex items-center mb-3 gap-2 text-[orange] transition-all duration-500">
                                            <svg
                                                className="w-5 h-5"
                                                viewBox="0 0 18 17"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                            <span className="text-base font-semibold text-white">
                                                4.8
                                            </span>
                                        </div>
                                        <h2 className='!font-[RfDewi-Expanded] font-[700]  mb-1'>
                                        “Perfect blend of comfort and style”
                                        </h2>
                                        <p className="text-base text-white text-xs leading-6 transition-all duration-500 pb-1">
                                        I’m not usually one to leave reviews, but I couldn’t resist sharing how much I love my new Pitlane Performance sweatshirt. I wore it during the latest Grand Prix, and it was perfect for lounging on the couch all day. It’s super comfy but still stylish enough to wear out and about (I’ve already gotten a couple of compliments!). The quality is obvious from the moment you take it out of the package. I’ve already ordered more for my next race-day look. Highly recommended for any F1 fan who values comfort and style!                                        </p>
                                    </div>
                                    <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-1">
                                        <div className="block">
                                            <h5 className="text-white font-medium transition-all duration-500 mb-1">
                                            Sophie L.
                                            </h5>
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>

                            <SwiperSlide>
                                <div className=" group bg-[#323232] border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500 w-full mx-auto hover:shadow-sm ">
                                    <div>
                                        <div className="flex items-center mb-3 gap-2 text-[orange] transition-all duration-500">
                                            <svg
                                                className="w-5 h-5"
                                                viewBox="0 0 18 17"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                            <span className="text-base font-semibold text-white">
                                                4.95
                                            </span>
                                        </div>
                                        <h2 className='!font-[RfDewi-Expanded] font-[700]  mb-1'>
                                        “Exceeded my expectations!”
                                        </h2>
                                        <p className="text-base text-white text-xs leading-6 transition-all duration-500 pb-1">
                                        Honestly, I wasn’t sure what to expect when I first ordered from Pitlane Performance, but they totally blew me away! The t-shirt I ordered is such great quality – thick material that doesn’t feel cheap at all, and it fits perfectly. I wore it to a race watch party, and I had so many people asking me where I got it. It’s hard to find F1-related clothing that doesn’t feel like generic merch, but these guys get it. You can feel the passion behind the brand. Will definitely be stocking up for future race weekends!                                        </p>
                                    </div>
                                    <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-1">
                                        <div className="block">
                                            <h5 className="text-white font-medium transition-all duration-500 mb-1">
                                            Michael T.
                                            </h5>
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>

                            <SwiperSlide>
                                <div className=" group bg-[#323232] border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500 w-full mx-auto hover:shadow-sm ">
                                    <div>
                                        <div className="flex items-center mb-3 gap-2 text-[orange] transition-all duration-500">
                                            <svg
                                                className="w-5 h-5"
                                                viewBox="0 0 18 17"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                            <span className="text-base font-semibold text-white">
                                                5
                                            </span>
                                        </div>
                                        <h2 className='!font-[RfDewi-Expanded] font-[700]  mb-1'>
                                        “Perfect for F1 fans – top-notch quality!”
                                        </h2>
                                        <p className="text-base text-white text-xs leading-6 transition-all duration-500 pb-1">
                                        I’ve been a huge F1 fan for years, and finding merch that feels both authentic and high quality is always a challenge. Pitlane Performance nailed it! I ordered the hoodie, and it’s seriously the comfiest thing I own now. The material feels durable, yet soft, and the design isn’t just your typical slapped-on logo. You can tell the attention to detail here. I’ve already worn it to a couple of races, and it’s become my go-to! Super impressed and will be coming back for more gear, no doubt!                                        </p>
                                    </div>
                                    <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-1">
                                        <div className="block">
                                            <h5 className="text-white font-medium transition-all duration-500 mb-1">
                                            Sarah R.
                                            </h5>
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>
            </div>

            <div aria-hidden="true" className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="aspect-[1155/150] w-[80.1875rem] bg-gradient-to-tr from-[#ffffff] to-[#ffffff4a] opacity-40"
                />
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="aspect-[1155/600] w-[80.1875rem] bg-gradient-to-tr from-[#ffffff8a] to-[#ffffff2a] opacity-30"
                />
            </div>
        </div>

    );
};

export default Feedback;