import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import '../../standards/buttons.css';
import {
    mainVid,
    mainVidSmall,
    mainVidLight,
    mainVidSmallLight
} from "../../utils";

const Intro = () => {
    const navigate = useNavigate();
    const videoRef = useRef(null);
    const researchButtonRef = useRef(null);
    const hobbiesButtonRef = useRef(null);
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
            if (500 < x && x < 600 && 400 < y && y < 450) {
                navigate('/hidden');
            }
        } else if (mobile) {
            if (1050 < x && x < 1250 && 750 < y && y < 875) {
                navigate('/hidden');
            }
        } else if (!isDarkMode) {
            if (2850 < x && x < 3050 && 510 < y && y < 710) {
                navigate('/hidden');
            }
        } else {
            if (1400 < x && x < 1560 && 205 < y && y < 370) {
                navigate('/hidden');
            }
        }
    };

    useEffect(() => {
        const handleThemeChange = () => {
            handleVideoSrcSet();
        };

        const observer = new MutationObserver(handleThemeChange);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

        // GSAP Entrance Animation
        const isMobile = window.innerWidth < 760;

        gsap.fromTo(
            researchButtonRef.current,
            { 
                opacity: 0, 
                x: isMobile ? -50 : 50,
                scale: 0.8 
            },
            { 
                opacity: 1, 
                x: 0,
                scale: 1,
                duration: 1,
                delay: 0.8,
                ease: "back.out(1.7)"
            }
        );

        gsap.fromTo(
            hobbiesButtonRef.current,
            { 
                opacity: 0, 
                x: isMobile ? 50 : 50,
                scale: 0.8 
            },
            { 
                opacity: 1, 
                x: 0,
                scale: 1,
                duration: 1, 
                delay: 0.5,
                ease: "back.out(1.7)"
            }
        );

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
        <div className="h-[750px] md:h-dvh -mt-10 relative">
            {window.innerWidth > 760 ? (
                <div>
                    <Link to='/research'>
                        <button 
                            ref={researchButtonRef}
                            className="button-100 button-200 absolute text-2xl w-[406px] h-[262px] top-[395px] left-[calc(50%-250px)] z-10"
                        ></button>
                    </Link>
                    <Link to='/hobbies'>
                        <button 
                            ref={hobbiesButtonRef}
                            className="button-100 button-201 absolute text-2xl w-[406px] h-[262px] top-[395px] left-[calc(50%+180px)] z-10"
                        ></button>
                    </Link>
                </div>
            ) : (
                <div>
                    <Link to='/research'>
                        <button 
                            ref={researchButtonRef}
                            className="button-100 button-200 absolute text-2xl w-[165px] h-[106px] top-[328px] left-[calc(50%-133px)] z-10"
                        ></button>
                    </Link>
                    <Link to='/hobbies'>
                        <button 
                            ref={hobbiesButtonRef}
                            className="button-100 button-201 absolute text-2xl w-[165px] h-[106px] top-[455px] left-[calc(50%-28px)] z-10"
                        ></button>
                    </Link>
                </div>
            )}
            <div className="relative w-full h-full">
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
                        zIndex: 5,
                        cursor: 'pointer',
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                    }}
                    onClick={handleClick}
                />
            </div>
        </div>
    );
};

export default Intro;