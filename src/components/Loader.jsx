import { useState, useEffect } from "react";
import { ClimbingBoxLoader } from "react-spinners/ClimbingBoxLoader";

const Loader = ({ loading }) => {
  const adj = [
    "illuminated", 
    "unstable", 
    "insatiable",
    "gruntled",
    "fragrant",
    "malleable",
    "lucid",
    "capitalistic",
    "crustaceous",
    "bombastic",
    "demure and mindful",
  ];
  const noun = [
    "howling",
    "murmurs",
    "whispers",
    "echoes",
    "sobbing",
    "cries",
    "wailing",
    "prayers",
    "loading",
  ];
  const [text, setText] = useState("");

  useEffect(() => {
    let intervalId;
    setText(adj[Math.floor(Math.random() * adj.length)] + " loading...");
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
