import React, { useEffect, useState } from 'react';
import './YtEmbed.css';

const YtEmbed = () => {
    const [videos, setVideos] = useState([]);
    const [channelInfo, setChannelInfo] = useState(null);

    const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
    const CHANNEL_ID = process.env.REACT_APP_YOUTUBE_CHANNEL_ID;

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                // Check if videos are cached in localStorage
                const cachedVideos = localStorage.getItem('youtube_videos');
                if (cachedVideos) {
                    setVideos(JSON.parse(cachedVideos));
                } else {
                    const response = await fetch(
                        `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=3`
                    );
                    const data = await response.json();

                    // Validate if items exist
                    if (data.items && data.items.length > 0) {
                        setVideos(data.items);
                        localStorage.setItem('youtube_videos', JSON.stringify(data.items)); // Cache videos
                    } else {
                        console.error("No videos found in the response");
                        setVideos([]);
                    }
                }
            } catch (error) {
                console.error("Error fetching videos:", error);
            }
        };

        const fetchChannelInfo = async () => {
            try {
                // Check if channel info is cached in localStorage
                const cachedChannelInfo = localStorage.getItem('youtube_channel_info');
                if (cachedChannelInfo) {
                    setChannelInfo(JSON.parse(cachedChannelInfo));
                } else {
                    const response = await fetch(
                        `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${CHANNEL_ID}&key=${YOUTUBE_API_KEY}`
                    );
                    const data = await response.json();

                    // Validate if items exist and fetch channel info
                    if (data.items && data.items.length > 0) {
                        setChannelInfo(data.items[0].snippet);
                        localStorage.setItem('youtube_channel_info', JSON.stringify(data.items[0].snippet)); // Cache channel info
                    } else {
                        setChannelInfo(null);
                    }
                }
            } catch (error) {
                console.error("Error fetching channel info:", error);
            }
        };

        fetchVideos();
        fetchChannelInfo();
    }, [YOUTUBE_API_KEY, CHANNEL_ID]);

    return (
        <div className="yt-embed p-6 my-4">
            <h6 className="font-bai-jamjuree font-700  text-[18px] font-[800] text-center text-red text-center">
                YouTube
            </h6>
            <h2 className="font-bai-jamjuree font-700 text-white  text-[38px] sm:text-4xl text-2xl font-extrabold text-center">
                Pitlane Performance
            </h2>

            {/* Subscribe box */}
            {channelInfo && (
                <div className="subscribe-box flex items-center justify-center space-x-4 mb-2 p-4 rounded-md">
                    <a
                        href={`https://www.youtube.com/channel/${CHANNEL_ID}?sub_confirmation=1`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-red text-white font-semibold px-4 py-2 rounded-full transition hover:bg-red-600"
                    >
                        Subscribe
                    </a>
                </div>
            )}

            {/* Grid to display videos */}
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 gap-16 mb-2 md:min-h-[280px]">
                {videos.map((video) => (
                    <div key={video.id.videoId} className="yt-video">
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${video.id.videoId}`}
                            title={video.snippet.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className='rounded-md'
                        ></iframe>
                        <p className="mt-2 text-white font-bold line-clamp-2">{video.snippet.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default YtEmbed;