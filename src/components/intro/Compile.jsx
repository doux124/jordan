import { useState, useEffect, useRef } from "react";
import SecretDrawings from "./SecretDrawings";
import Intro from "./Intro";
import Synopsis from "./Synopsis";
import CallToAction from "./CallToAction";
import Showcase from "./Showcase";
import Contact from "./Contact";

const Compile = () => {
    const [loading, setLoading] = useState(false);
    const [showSecret, setShowSecret] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const aboutMeRef = useRef(null);

    const scrollToAboutMe = () => {
        if (aboutMeRef.current) {
            aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 0);

        let hideTimeout;
        const hideAfterDelay = () => {
            clearTimeout(hideTimeout);
            hideTimeout = setTimeout(() => {
                setShowSecret(false);
            }, 500);
            window.scrollTo({ top: 10, behavior: 'smooth' });
        };

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
        };
    }, []);

    useEffect(() => {
        if (!loading) {
            document.body.style.overflowY = 'auto';
        } else {
            document.body.style.overflowY = 'hidden';
        }
    }, [loading]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowContent(true);
        }, 1);
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div>
            {showContent && <CallToAction scrollToAboutMe={scrollToAboutMe} />}
            <section className="common-padding">
                <SecretDrawings show={showSecret} />
                <div className={`main-content ${showSecret ? 'shifted' : ''}`}>
                    {showContent && <Intro />}
                    <h1 ref={aboutMeRef} id="heading" className="section-heading text-center mt-4 md:mb-10 md:mt-0 text-black dark:text-white">
                        About Me
                    </h1>
                    <Synopsis />
                    <Showcase />
                    <Contact />
                </div>
            </section>
        </div>
    );
};

export default Compile;
