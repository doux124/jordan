import { mainVid, mainVidSmall } from "../../utils";
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from "react";

const Intro = () => {
    const navigate = useNavigate();
    const videoRef = useRef(null);
    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? mainVidSmall : mainVid);

    const handleVideoSrcSet = () => {
        if(window.innerWidth < 760) {
            setVideoSrc(mainVidSmall);
        } else {
            setVideoSrc(mainVid);
        }
    };

    const handleClick = (event) => {
        const videoElement = videoRef.current;
        if (!videoElement) return;

        const rect = videoElement.getBoundingClientRect();
        const scaleX = videoElement.videoWidth / rect.width;
        const scaleY = videoElement.videoHeight / rect.height;
        const x = (event.clientX - rect.left) * scaleX;
        const y = (event.clientY - rect.top) * scaleY;
        const mobile = (window.innerWidth < 760) ? true : false
        console.log(`Clicked at normalized coordinates: (${x}, ${y})`);

        if (mobile) {
            if (110 < x && x < 480 && 435 < y && y < 675) {
                navigate('/achievements/research');
            }
            if (380 < x && x < 760 && 745 < y && y < 970) {
                navigate('/hobbies');
            }
            if (500 < x && x < 600 && 400 < y && y < 450) {
                navigate('/hidden');
            }
        } else {
            if (630 < x && x < 1180 && 600 < y && y < 940) {
                navigate('/achievements/research');
            }
            if (1250 < x && x < 1800 && 600 < y && y < 940) {
                navigate('/hobbies');
            }
            if (1400 < x && x < 1560 && 205 < y && y < 370) {
                navigate('/hidden');
            }
        }
    };

    useEffect(() => {
        // Dynamic video
        window.addEventListener('resize', handleVideoSrcSet);

        // Main video
        const video = videoRef.current;
        video.pause();
        const timeout = setTimeout(() => {
            video.play();
        }, 0);

        return () => {
            clearTimeout(timeout);
            window.removeEventListener('resize', handleVideoSrcSet);
        };
    }, []);

    return (
        <div className="h-dvh">
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <video
                    key={videoSrc}
                    id="mainVideo"
                    ref={videoRef}
                    autoPlay
                    muted
                    playsInline
                    style={{ width: '100%', height: '100%' }}
                >
                    <source src={videoSrc} type="video/mp4" />
                </video>
                <div
                    style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%',
                        zIndex: 10,
                        cursor: 'pointer',
                        backgroundColor: 'rgba(0, 0, 0, 0)', // Transparent background
                    }}
                    onClick={handleClick}
                />
            </div>
        </div>
    );
};

export default Intro;
