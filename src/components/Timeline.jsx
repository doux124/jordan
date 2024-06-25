import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { eruditionVid, huntVid } from '../utils/';

gsap.registerPlugin(ScrollTrigger);

const achievements = [
    { year: "2017", text: "Entered NUSH" },
    { year: "2019", text: "Started first research project - \"Plasma Based Defect Engineering for Biosensing Applications\"" },
    { year: "2019", text: "SJChO (Gold), SJBO (Gold), UK Biology Olympiad (Gold)" },
    { year: "2020", text: "Interned at Computational Intelligence Lab @ NTU" },
    { year: "2021", text: "Interned at MD6 @ NUH" },
    { year: "2021", text: "IChTo Gold, 2 research publications in IRC-SET" },
    { year: "2022", text: "Global Youth Science and Technology Bowl (1st Place), SSEF (Gold)" },
    { year: "2023", text: "Professionally chao kenged in NS" },
];

const Timeline = () => {
    const timelineRef = useRef(null);
    const videoRef1 = useRef(null);
    const videoRef2 = useRef(null);

    useEffect(() => {
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
            gsap.to(video1, {
                currentTime: video1.duration,
                scrollTrigger: {
                    trigger: '.timeline-container',
                    scrub: true,
                    start: "top center",
                    end: "bottom top+100px",
                    smoothChildTiming: true,
                },
                ease: 'power1.inOut'
            });
        };
        video1.addEventListener('loadedmetadata', onVideo1Loaded);
    
        // Hunt
        const video2 = videoRef2.current;
        video2.pause();
        const onVideo2Loaded = () => {
            gsap.to(video2, {
                currentTime: video2.duration,
                scrollTrigger: {
                    trigger: '.background-video-2',
                    scrub: true,
                    start: "top bottom",
                    end: "top top",
                    smoothChildTiming: true,
                },
                ease: 'power1.inOut'
            });
        };
        video2.addEventListener('loadedmetadata', onVideo2Loaded);
    
        return () => {
            video1.removeEventListener('loadedmetadata', onVideo1Loaded);
            video2.removeEventListener('loadedmetadata', onVideo2Loaded);
        };
    }, []);
    

    return (
        <div className="timeline-wrapper">
            <div>
                <video className="background-video-1" ref={videoRef1} autoPlay muted playsInline>
                    <source src={eruditionVid} type="video/mp4" />
                </video>
                <video className="background-video-2" ref={videoRef2} autoPlay muted playsInline>
                    <source src={huntVid} type="video/mp4" />
                </video>
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
