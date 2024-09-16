import React, { useEffect, useState } from 'react';
import './YtEmbed.css';

const YtEmbed = () => {
    const [videos, setVideos] = useState([]);
    const [channelInfo, setChannelInfo] = useState(null);

    const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
    const CHANNEL_ID = process.env.REACT_APP_YOUTUBE_CHANNEL_ID;

    // Fetch latest 3 videos from YouTube channel
    useEffect(() => {
        const fetchVideos = async () => {
            const response = await fetch(
                `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=3`
            );
            const data = await response.json();
            setVideos(data.items);
        };

        // Fetch channel info (e.g., logo, name)
        const fetchChannelInfo = async () => {
            const response = await fetch(
                `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${CHANNEL_ID}&key=${YOUTUBE_API_KEY}`
            );
            const data = await response.json();
            setChannelInfo(data.items[0].snippet);
        };

        fetchVideos();
        fetchChannelInfo();
    }, [YOUTUBE_API_KEY, CHANNEL_ID]);

    return (
        <div className="yt-embed p-6 my-4">
            <h6 className="font-['RfDewi-Expanded'] text-[18px] font-[800] text-center text-red text-center">
                YouTube
            </h6>
            <h2 className="font-['RfDewi-Expanded'] sm:text-4xl text-2xl font-extrabold text-center">
                Pitlane Performance
            </h2>

            {/* Subscribe box */}
            {channelInfo && (
                <div className="subscribe-box flex items-center justify-center space-x-4 bg-white p-4 rounded-md">
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
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 gap-16 mb-8">
                {videos.map((video) => (
                    <div key={video.id.videoId} className="yt-video">
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${video.id.videoId}`}
                            title={video.snippet.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className='rounded-md'
                        ></iframe>
                        <p className="mt-2 font-bold line-clamp-2">{video.snippet.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default YtEmbed;