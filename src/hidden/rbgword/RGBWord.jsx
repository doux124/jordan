import { useEffect, useState } from 'react'
const RGBWord = ({ text }) => {
    const getRandomColor = () =>
        `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`
    const [colors, setColors] = useState([])

    useEffect(() => {
        setColors(Array.from({ length: text.length }, () => getRandomColor()))

        const intervalId = setInterval(() => {
            setColors((prevColors) => prevColors.map(() => getRandomColor()))
        }, 100)

        const timeoutId = setTimeout(() => {
            clearInterval(intervalId)
            setColors(Array.from({ length: text.length }, () => "rgb(255, 255, 255)"))
        }, 1000)

        return () => {
            clearInterval(intervalId)
            clearTimeout(timeoutId)
        }
    }, [text])

    return (
      <div className="flex-center mt-5 text-3xl">
        {text.split('').map((char, index) => (
            <span key={index} style={{ color: colors[index] || 'white' }}>
                {char}
            </span>
        ))}
      </div>
    );
  };
  
  export default RGBWord;
  