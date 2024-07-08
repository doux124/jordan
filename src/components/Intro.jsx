import { mainVid } from "../utils";
import { useNavigate } from 'react-router-dom';
import { useRef } from "react";

const Intro = () => {
    const navigate = useNavigate();
    const videoRef = useRef(null);
    const handleClick = (event) => {
        const videoElement = videoRef.current;
        if (!videoElement) return;

        const rect = videoElement.getBoundingClientRect();
        const scaleX = videoElement.videoWidth / rect.width;
        const scaleY = videoElement.videoHeight / rect.height;
        const x = (event.clientX - rect.left) * scaleX;
        const y = (event.clientY - rect.top) * scaleY;
        console.log(`Clicked at normalized coordinates: (${x}, ${y})`);

        if (630 < x && x < 1180 && 600 < y && y < 940) {
            navigate('/achievements/research');
        }
        if (1250 < x && x < 1800 && 600 < y && y < 940) {
            navigate('/hobbies');
        }
    };

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <video id="mainVideo" ref={videoRef} autoPlay muted playsInline style={{ width: '100%', height: '100%' }}>
                <source src={mainVid} type="video/mp4" />
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
    );
};

export default Intro;
