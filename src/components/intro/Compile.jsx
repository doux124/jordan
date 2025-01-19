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
    const showcaseRef = useRef(null);

    const scrollToAboutMe = () => {
        if (aboutMeRef.current) {
            aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const scrollToShowcase = () => {
        if (showcaseRef.current) {
            showcaseRef.current.scrollIntoView({ behavior: "smooth" });
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
            {showContent && <CallToAction 
                scrollToAboutMe={scrollToAboutMe}
                scrollToShowcase={scrollToShowcase} 
            />}
            <section className="common-padding">
                <SecretDrawings show={showSecret} />
                <div className={`main-content ${showSecret ? 'shifted' : ''}`}>
                    {showContent && <Intro />}
                    <h1 
                        ref={aboutMeRef} 
                        id="about-me"
                        className="section-heading text-center mt-4 md:mb-10 md:mt-0 text-black dark:text-white"
                    >
                        About Me
                    </h1>
                    <Synopsis />
                    <h1 
                        ref={showcaseRef}
                        id="showcase"
                        className="section-heading text-center mt-20 mb-0 md:mb-10 md:mt-10 text-black dark:text-white"
                    >
                        Project Showcase
                    </h1>
                    <h2 className="flex-center text-sm md:text-xl -mt-5">Click on the projects to learn more</h2>
                    <Showcase />
                    <Contact />
                </div>
            </section>
        </div>
    );
};

export default Compile;