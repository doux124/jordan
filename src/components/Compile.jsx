import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Model from "./Model";
import Timeline from "./Timeline";
import SecretDrawings from "./SecretDrawings";
import Intro from "./Intro";
import { useState, useEffect } from "react";

const Compile = () => {
    // GSAP
    useGSAP(() => {
        gsap.to("#heading", { y: 0, opacity: 1 });
    }, []);

    const [showSecret, setShowSecret] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Load for 2s
        const loadingTimeout = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        let hideTimeout;
        const hideAfterDelay = () => {
            clearTimeout(hideTimeout);
            hideTimeout = setTimeout(() => {
                setShowSecret(false);
            }, 500);
            window.scrollTo({ top: 10, behavior: 'smooth' });
        }

        // Scrolling on pc
        const handleScroll = () => {
            if (window.scrollY <= 0) {
                setShowSecret(true);
                hideAfterDelay();
            }
        };
        // Scrolling on mobile
        const handleTouchMove = (e) => {
            if (window.scrollY <= 0 && e.touches[0].clientY > window.touchStartY) {
                e.preventDefault();
                setShowSecret(true);
                hideAfterDelay();
            }
        };
        const handleTouchStart = (e) => {
            window.touchStartY = e.touches[0].clientY;
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('touchmove', handleTouchMove, { passive: false });
        window.addEventListener('touchstart', handleTouchStart);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchstart', handleTouchStart);
            clearTimeout(hideTimeout);
            clearTimeout(loadingTimeout);
        };
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <section className="common-padding">
            <SecretDrawings show={showSecret} />
            <div className={`main-content ${showSecret ? 'shifted' : ''}`}>
                <Intro />
                <h1 id='heading' className="section-heading">
                    Timeline
                </h1>
                <Timeline />
            </div>
            <div className="screen-max-width">
                <h1 id='heading' className="section-heading">
                    Click on the arcade machine's screen
                </h1>
                <Model/>
            </div>
        </section>
    );
}

export default Compile;
