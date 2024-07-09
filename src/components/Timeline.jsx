import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { eruditionVid, huntVid, eruditionVidSmall, huntVidSmall, harmonyVidSmall } from '../utils/';

gsap.registerPlugin(ScrollTrigger);

const achievements = [
    { year: "2017", text: "Humble beginnings at NUSH" },
    { year: "2019", text: "Started my first research project" },
    { year: "2019", text: "My first olympiad gold medal" },
    { year: "2020", text: "My first research publication" },
    { year: "2020", text: "Interned at NTU's Computational Intelligence Lab" },
    { year: "2021", text: "Interned at MD6 under NUH" },
    { year: "2021", text: "My first international gold medal" },
    { year: "2022", text: "Graduated NUSH" },
    { year: "2023", text: "Professionally chao kenged in NS" },
    { year: "2024", text: "happi happi happi" },
];

const Timeline = () => {
    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? eruditionVidSmall : eruditionVid)
    const [videoSrc2, setVideoSrc2] = useState(window.innerWidth < 760 ? huntVidSmall : huntVid)
    const [harmony, setHarmony] = useState(window.innerWidth < 760 ? true : false)
    const handleVideoSrcSet = () => {
        if(window.innerWidth < 760) {
            setVideoSrc(eruditionVidSmall)
            setVideoSrc2(huntVidSmall)
            setHarmony(true)
        } else {
            setVideoSrc(eruditionVid)
            setVideoSrc2(huntVid)
            setHarmony(false)
        }
    }

    const timelineRef = useRef(null);
    const videoRef1 = useRef(null);
    const videoRef2 = useRef(null);
    const videoRef3 = useRef(null);

    useEffect(() => {
        // Dynamic Video
        window.addEventListener('resize', handleVideoSrcSet);

        // Timeline
        const items = timelineRef.current.querySelectorAll('.timeline-item');
        items.forEach(item => {
            gsap.to(item, {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: item,
                    start: "bottom bottom",
                    end: "top 30%+=100",
                    scrub: true,
                },
                ease: 'power1.inOut'
            });
        });
    
        // Erudition
        const video1 = videoRef1.current;
        video1.pause();
        const onVideo1Loaded = () => {
            ScrollTrigger.create({
                trigger: '.timeline-container',
                start: "top center",
                end: "top center",
                smoothChildTiming: true,
                onEnter: () => {
                    gsap.to(video1, {
                        currentTime: video1.duration,
                        duration: 4
                    });
                },
                onEnterBack: () => {
                    gsap.to(video1, {
                        currentTime: 0,
                        duration: 2,
                    });
                }
            });
        };
        video1.addEventListener('loadedmetadata', onVideo1Loaded);
    
        // Hunt
        const video2 = videoRef2.current;
        video2.pause();
        const onVideo2Loaded = () => {
            ScrollTrigger.create({
                trigger: '.background-video-2',
                start: "top center",
                end: "top center",
                smoothChildTiming: true,
                onEnter: () => {
                    gsap.to(video2, {
                        currentTime: video2.duration,
                        duration: 4,
                    });
                },
                onEnterBack: () => {
                    gsap.to(video2, {
                        currentTime: 0,
                        duration: 2,
                    });
                }
            });
        };
        video2.addEventListener('loadedmetadata', onVideo2Loaded);

        if (harmony) { 
            const video3 = videoRef3.current;
            video3.pause();
            const onVideo3Loaded = () => {
                ScrollTrigger.create({
                    trigger: '.background-video-3',
                    start: "top center",
                    end: "top center",
                    smoothChildTiming: true,
                    onEnter: () => {
                        gsap.to(video3, {
                            currentTime: video3.duration,
                            duration: 4,
                        });
                    },
                    onEnterBack: () => {
                        gsap.to(video3, {
                            currentTime: 0,
                            duration: 2,
                        });
                    },
                });
            };
            video3.addEventListener('loadedmetadata', onVideo3Loaded);
      
            return () => {
              video3.removeEventListener('loadedmetadata', onVideo3Loaded);
            };
          }
        
        return () => {
            video1.removeEventListener('loadedmetadata', onVideo1Loaded);
            video2.removeEventListener('loadedmetadata', onVideo2Loaded);
            window.removeEventListener('resize', handleVideoSrcSet);
        };
    }, []);
    

    return (
        <div className="timeline-wrapper">
            <div>
                <video className="background-video-1" preload="auto" ref={videoRef1} autoPlay muted playsInline>
                    <source src={videoSrc} type="video/mp4" />
                </video>
                <video className="background-video-2" preload="auto" ref={videoRef2} autoPlay muted playsInline>
                    <source src={videoSrc2} type="video/mp4" />
                </video>
                {harmony && (
                    <video className="background-video-3" preload="auto" ref={videoRef3} autoPlay muted playsInline>
                        <source src={harmonyVidSmall} type="video/mp4" />
                    </video>
                )}
            </div>     
    
            <div className="timeline-container">
                <div className="timeline" ref={timelineRef}>
                    {achievements.map((achievement, index) => (
                        <div className="timeline-item" key={index}>
                            <div className="content">
                                <h3>{achievement.year}</h3>
                                <p>{achievement.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Timeline;
