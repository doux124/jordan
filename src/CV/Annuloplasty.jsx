import React, { useState } from "react";
import gsap from "gsap";
import RingModel from "./RingModel";
import Ring from "./Ring";
import { useGSAP } from "@gsap/react";
import "./styles.css";

const Annuloplasty = () => {
  const [modelClicked, setModelClicked] = useState(false);
  const styles = {
    rotateText: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      opacity: modelClicked ? 0 : 0.5,
      pointerEvents: 'none',
    },
  };
  const handleModelMouseDown = () => {
    setModelClicked(true);
  };

  useGSAP(() => {
    if (modelClicked) {
      gsap.to("#ring", {
        opacity: 0,
        time: 0.5,
      });
    }
  }, [modelClicked]);

  return (
    <div className="pageContainer">
      <div className="projectContainer">
        <h1 className="header">Minimally Invasive Annuloplasty using Shape Memory Materials</h1>
  
        <section className="section">
          <h2 className="subHeader">Mitral Valve Regurgitation and Annuloplasties</h2>
          <p>
            (Intro to MVR)
          </p>
          <p>
            (Intro to Annuloplasties)
          </p>
        </section>
  
        <div className="flexContainer">
          <section className="section flexItem">
            <h2 className="subHeader">Methods</h2>
            <p>
              (methods)
            </p>
          </section>
  
          <section className="section flexItem" onMouseDown={handleModelMouseDown}>
            <Ring />
            <div style={styles.rotateText}>
              Click to Rotate Model
            </div>
          </section>
        </div>
  
        <section className="section">
          <h2 className="subHeader">Results</h2>
          <div>Results</div>
        </section>
      </div>
    </div>
  );
}

export default Annuloplasty;
