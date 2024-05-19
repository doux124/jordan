import React, { useState } from "react";
import gsap from "gsap";
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
    gsap.fromTo('.section', {
      opacity: 0,
      y:20
    }, {
      opacity: 1,
      y: 0,
      delay: 1,
      stagger: 0.2
    })
  }, [modelClicked]);

  return (
    <div className="pageContainer">
      <div className="projectContainer">
        <section className="section">
          <h1 className="header">Minimally Invasive Annuloplasty using Shape Memory Materials</h1>
        </section>
  
        <section className="section">
          <h2 className="subHeader">Mitral Valve Regurgitation and Annuloplasties</h2>

          <div className="flex items-start">
            <div className="inline-flex mr-4 mb-4">
              <img src="/images/backflow.png" className="w-[45vh] h-auto" alt="Backflow" />
            </div>
            <p className="flex-1 text-justify">
              <br />
              Mitral valve regurgitation is the backflow of blood through the bicuspid/mitral valve.
              It is treated by suturing an annuloplasty ring onto the annulus to tighten the valve. 
              However, the procedure involves splitting the sternum, causing the procedure to be 
              surgically taxing.
            </p>
          </div>

          <div className="flex items-start">           
            <p className="flex-1 text-justify mt-2">
              Treatment is not usually recommended unless the patient’s condition is 
              very severe. Therefore, those suffering from mitral valve regurgitation 
              usually do not get it treated immediately.    
            </p>
            <div className="inline-flex mr-4 mb-4">
              <img src="/images/annuloplasty_ring.png" className="w-[45vh] h-auto ml-4" alt="Annuloplasty" />
            </div>            
          </div>
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
