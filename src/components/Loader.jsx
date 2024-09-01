import { useState, useEffect } from "react";
import { ClimbingBoxLoader } from "react-spinners";

const Loader = ({ loading }) => {
  const adj = [
    "jiggling", 
    "polishing", 
    "illuminated", 
  ];
  const noun = [
    "jellyfish",
    "potatoes",
    "sobbing",
  ];
  const [text, setText] = useState("illuminated sobbing...");

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
    let adjective = adj[Math.floor(Math.random() * adj.length)]
    setText(adjective + " " + noun[Math.floor(Math.random() * noun.length)] + "...");
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
