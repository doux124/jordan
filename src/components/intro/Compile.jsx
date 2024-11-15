import { useState, useEffect, Suspense, lazy } from "react";
import SecretDrawings from "./SecretDrawings";
import Intro from "./Intro";
import Synopsis from "./Synopsis";
import Timeline2 from "../timeline/Timeline2";
// import ResearchSypnosis from "./ResearchSypnosis";

// import Awards from "./Awards";
// import Model from "./Model";
// import Timeline from "./Timeline";

const Compile = () => {
    const [loading, setLoading] = useState(false);
    const [showSecret, setShowSecret] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 0)

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

        };
    }, []);

    useEffect(() => {
        if (!loading) {
            document.body.style.overflowY = 'auto';
        } else {
            document.body.style.overflowY = 'hidden';
        }
    }, [loading]);

    return (
        <div>
            {/* <Loader loading={loading} /> */}
            <section className="common-padding">
                <SecretDrawings show={showSecret} />
                <div className={`main-content ${showSecret ? 'shifted' : ''}`}>
                    <Intro />

                    <h1 id='heading' className="section-heading text-center mt-4 md:mb-10 md:mt-0">
                        About Me
                    </h1>
                    <Synopsis />
                    <Timeline2 />
                    {/* <ResearchSypnosis /> */}

                    {/* <h1 id='heading' className="section-heading text-center mt-6 md:my-0">
                        Jordan's Lore
                    </h1>
                    <Timeline /> */}
                </div>
                {/* <div className="screen-max-width">
                    <h1 id='heading' className="section-heading text-center mt-4">
                        Game Area
                    </h1>
                    <h1 className="section-subheading text-center">
                        Don't mind me flexing here
                    </h1>
                    <Awards />
                    <h1 id='heading' className="section-subheading text-center mt-7">
                        Click on the arcade machine's screen
                    </h1>
                    <Model />    
                </div> */}
            </section>
        </div>
    );
}

export default Compile;
