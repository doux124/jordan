import { useEffect, useState, useRef } from 'react';

const RGBWord = ({ text, interval = 100, color = 'white' }) => {
    const specialChars = ['!', '#', '$', '%', '&', '*', '@', '█'];
    const getRandomCharacter = () => specialChars[Math.floor(Math.random() * specialChars.length)];
    
    const getRandomColor = () => `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    
    const [colors, setColors] = useState(Array(text.length).fill(color));
    const [glitchedText, setGlitchedText] = useState(Array(text.length).fill(''));
    const [visibleChars, setVisibleChars] = useState(0);
    const currentVisibleChar = useRef(0);
    
    useEffect(() => {
        let colorInterval;
        let revealTimeout;

        // Reset states when the text changes
        setColors(Array(text.length).fill("rgb(255, 255, 255)"));
        setGlitchedText(Array(text.length).fill(''));
        setVisibleChars(0);
        currentVisibleChar.current = 0;
        
        // Reveal each character one at a time
        revealTimeout = setInterval(() => {
            setVisibleChars((prev) => {
                if (prev < text.length) {
                    currentVisibleChar.current = prev + 1;
                    return prev + 1;
                }
                clearInterval(revealTimeout);
                return prev;
            });
        }, interval);
        
        // Apply color and glitch effects for each visible character
        colorInterval = setInterval(() => {
            const currentIndex = currentVisibleChar.current - 1;
            setColors((prevColors) => {
                const newColors = [...prevColors];
                newColors[currentIndex] = getRandomColor();
                if (currentIndex > 0) {
                    newColors[currentIndex-1] = color;
                }
                return newColors;
            });
            setGlitchedText((prevText) => {
                const newText = [...prevText];
                if (text[currentIndex] !== ' ') {
                    newText[currentIndex] = getRandomCharacter();
                }
                if (currentIndex > 0) {
                    newText[currentIndex-1] = text.split('')[currentIndex-1];
                }
                return newText;
            });
        }, interval);
        
        // Clear intervals and reset after all characters are revealed
        const timeoutId = setTimeout(() => {
            clearInterval(colorInterval);
            setColors(Array(text.length).fill(color));
            setGlitchedText(text.split(''));
        }, interval * text.length);
        
        return () => {
            clearInterval(revealTimeout);
            clearInterval(colorInterval);
            clearTimeout(timeoutId);
        };
    }, [text, interval]);
    
    return (
        <div className="flex-center mt-5 text-4xl">
            {glitchedText.map((char, index) => (
                <span
                    key={index}
                    style={{
                        color: colors[index],
                        transition: 'color 0.3s ease',
                        visibility: index < visibleChars ? 'visible' : 'hidden',
                        whiteSpace: 'pre' // Ensures spaces are rendered properly
                    }}>
                    {char}
                </span>
            ))}
        </div>
    );
};

export default RGBWord;