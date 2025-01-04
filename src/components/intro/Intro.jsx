import {
    mainVid,
    mainVidSmall,
    mainVidLight,
    mainVidSmallLight
} from "../../utils";
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from "react";

const Intro = () => {
    const navigate = useNavigate();
    const videoRef = useRef(null);
    let isDarkMode = document.documentElement.classList.contains('dark');

    const getVideoSource = (width, isDarkMode) => {
        if (width < 760) {
            return isDarkMode ? mainVidSmall : mainVidSmallLight;
        }
        return isDarkMode ? mainVid : mainVidLight;
    };

    const [videoSrc, setVideoSrc] = useState(() =>
        getVideoSource(window.innerWidth, document.documentElement.classList.contains('dark'))
    );

    const handleVideoSrcSet = () => {
        isDarkMode = document.documentElement.classList.contains('dark');
        setVideoSrc(getVideoSource(window.innerWidth, isDarkMode));
    };

    const handleClick = (event) => {
        const videoElement = videoRef.current;
        if (!videoElement) return;

        const rect = videoElement.getBoundingClientRect();
        const scaleX = videoElement.videoWidth / rect.width;
        const scaleY = videoElement.videoHeight / rect.height;
        const x = (event.clientX - rect.left) * scaleX;
        const y = (event.clientY - rect.top) * scaleY;
        const mobile = window.innerWidth < 760;

        console.log(`Clicked at normalized coordinates: (${x}, ${y})`);

        if (mobile & isDarkMode) {
            if (110 < x && x < 480 && 435 < y && y < 675) {
                navigate('/research');
            }
            if (380 < x && x < 760 && 645 < y && y < 820) {
                navigate('/hobbies');
            }
            if (500 < x && x < 600 && 400 < y && y < 450) {
                navigate('/hidden');
            }
        } else if (mobile) {
            if (250 < x && x < 950 && 950 < y && y < 1250) {
                navigate('/research');
            }
            if (750 < x && x < 1450 && 1300 < y && y < 1600) {
                navigate('/hobbies');
            }
            if (1050 < x && x < 1250 && 750 < y && y < 875) {
                navigate('/hidden');
            }
        } else if (!isDarkMode) {
            if (1270 < x && x < 2300 && 1130 < y && y < 1830) {
                navigate('/research');
            }
            if (2450 < x && x < 3450 && 1150 < y && y < 1850) {
                navigate('/hobbies');
            }
            if (2850 < x && x < 3050 && 510 < y && y < 710) {
                navigate('/hidden');
            }
        } else {
        if (630 < x && x < 1180 && 600 < y && y < 940) {
            navigate('/research');
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
        const handleThemeChange = () => {
            handleVideoSrcSet();
        };

        // Observe changes to the 'dark' class on the html element
        const observer = new MutationObserver(handleThemeChange);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

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
            observer.disconnect();
        };
    }, []);

    return (
        <div className="h-[750px] md:h-dvh -mt-10">
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <video
                    key={videoSrc}
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
