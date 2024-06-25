import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { eruditionVid } from '../utils/';

gsap.registerPlugin(ScrollTrigger);

const achievements = [
    { year: "2020", text: "Started learning programming." },
    { year: "2021", text: "Built my first web application." },
    { year: "2022", text: "Got my first job as a developer." },
    { year: "2023", text: "Promoted to senior developer." },
    { year: "2024", text: "Promoted to senior developer." },
    { year: "2025", text: "Promoted to senior developer." },
    { year: "2026", text: "Promoted to senior developer." },
    { year: "2027", text: "Promoted to senior developer." },
];

const Timeline = () => {
    const timelineRef = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
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

        const video = videoRef.current;
        video.pause();

        // Ensure video metadata is loaded
        const onVideoLoaded = () => {
            gsap.to(video, {
                currentTime: video.duration,
                scrollTrigger: {
                    trigger: '.timeline-container',
                    scrub: 2,
                    start: "top top",
                    end: "bottom bottom",
                },
                ease: "none"
            });
        };

        // Add event listener for video metadata load
        video.addEventListener('loadedmetadata', onVideoLoaded);

        return () => {
            video.removeEventListener('loadedmetadata', onVideoLoaded);
        };

    }, []);

    return (
        <div className="timeline-wrapper">
            <video className="background-video" ref={videoRef} autoPlay muted playsInline>
                <source src={eruditionVid} type="video/mp4" />
            </video>
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
