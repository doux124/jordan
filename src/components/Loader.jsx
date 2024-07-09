import { useState, useEffect } from "react";
import { ClimbingBoxLoader } from "react-spinners";

const Loader = ({ loading }) => {
  const texts = [
    "Savouring jellyfish...", 
    "Marinating potatoes...", 
    "Resolving crisises...", 
  ];
  const [text, setText] = useState(texts[Math.floor(Math.random() * texts.length)]);
  const [index, setIndex] = useState("");

  useEffect(() => {
    let intervalId;
    if (loading) {
      intervalId = setInterval(() => {
        displayRandomText();
      }, 1500);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [loading]);

  const displayRandomText = () => {
    let newIndex = Math.floor(Math.random() * texts.length);
    while (newIndex == index) {
      newIndex = Math.floor(Math.random() * texts.length);
    }
    setIndex(newIndex);
    setText(texts[newIndex]);
  };

  return (
    <div className={`loader ${loading ? 'visible' : 'hidden'}`}>
      <div>
        <ClimbingBoxLoader size={30} color={"#A020F0"} loading={loading} />
      </div>
      <div className="loader-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Loader;
