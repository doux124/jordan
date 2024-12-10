import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "../styles.css";
import { Link } from 'react-router-dom';

import Ring from "./Ring";

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

  useGSAP(() => {
    gsap.fromTo('.sectionAnimate', {
      opacity: 0,
      y: 20
    }, {
      opacity: 1,
      y: 0,
      delay: 1,
      stagger: 0.2
    })
  }, [])

  return (
    <div className="pageContainer">
      <div className="projectContainer">
        <section className="sectionAnimate">
          <h1 className="header">Minimally Invasive Annuloplasty using Shape Memory Materials</h1>
        </section>

        <section className="sectionAnimate">
          <h2 className="subHeader">Keywords</h2>
          <p className="flex-1 text-justify mt-2">
            1. Annuloplasty, Minimally Invasive Surgery, Mitral Valve
            <br />
            2. Shape Memory Materials, Nitinol, MMA-PEGDMA
          </p>
        </section>
  
        <section className="sectionAnimate">
          <h2 className="subHeader">Mitral Valve Regurgitation and Annuloplasties</h2>

          <div className="flex flex-col md:flex-row items-start">
            <div className="inline-flex mb-4 md:mr-4">
              <img src="/jordan/images/arp/backflow.png" className="w-[45vh] h-auto"/>
            </div>
            <p className="flex-1 text-justify">
              <br />
              Mitral valve regurgitation is the backflow of blood through the mitral valve.
              It is treated by suturing an annuloplasty ring onto the annulus to tighten the valve. 
              However, the procedure involves splitting the sternum, causing the procedure to be 
              surgically taxing.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-start">        
            <p className="flex-1 text-justify mt-2">
              Treatment is not usually recommended unless the patient’s condition is 
              very severe. Therefore, those suffering from mitral valve regurgitation 
              usually do not get it treated immediately.    
            </p>
            <div className="inline-flex mr-4 mb-4">
              <img src="/jordan/images/arp/annuloplasty_ring.png" className="w-[45vh] h-auto ml-4"/>
            </div>            
          </div>
        </section>

        <section className="sectionAnimate">
          <h2 className="subHeader">Project Idea</h2>
          <p className="flex-1 text-justify mt-2">
            We used <Link to="/research/annuloplasty" style={{ color: '#004d99', textDecoration: 'underline' }}>shape memory materials</Link> to
            design the novel annuloplasty rings. <br /> <br /> We made 2 versions, one using <Link to="/research/annuloplasty" style={{ color: '#004d99', textDecoration: 'underline' }}>Nitinol</Link>
            , and one using <Link to="/research/annuloplasty" style={{ color: '#004d99', textDecoration: 'underline' }}>MMA-PEGDMA</Link>.
            This allowed the rings to be shaped into thin rods for insertion between the ribs. As such, the sternum does not need to be split, reducing the invasiveness of the surgery.
          </p>
          <img src="/jordan/images/arp/rings.png" className="image w-[50vh] h-auto mx-auto mt-5 center"/>
        </section>
  
        <div className="flexContainer">
          <section className="section flexItem">
            <h2 className="subHeader">
              Making the rings (<Link to="/research/annuloplasty/procedure" style={{ color: '#004d99', textDecoration: 'underline' }}>More details</Link>)
            </h2>
            <p className="flex-1 text-justify mt-2">  
              For Nitinol rings, Nitinol wire is cut, bent and wrapped in bovine myocardium. 
              <br />
              <br />
              For MMA-PEGDMA rings, polymer is added to a mold
              and polymerised under UV light.
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
          <p className="flex-1 text-justify mt-2">
            Our <Link to="/research/annuloplasty/results" style={{ color: '#004d99', textDecoration: 'underline' }}>experimental results</Link> verified 
            the Nitinol and MMA-PEGDMA designs' 
            efficacy in reducing mitral valve regurgitation, as well as their 
            ability to undergo the shape memory effect. Our novel research has great 
            significance in making improving the accessibility of treatment for 
            patients suffering from mitral valve regurgitation.
            <img src="/jordan/images/arp/results.png" className="image w-[50vh] h-auto mx-auto mt-3"/>
          </p>
        </section>

        <section className="section">
          <h2 className="subHeader">Links</h2>
          <p className="flex-1 text-justify mt-2">
            Our poster: 
            <a 
              href="/jordan/pdfs/cardiac_poster.pdf"
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: '#004d99', textDecoration: 'underline', marginLeft: '10px' }}
            >
              View Poster
            </a>
            <br />
            Our research paper: 
            <a 
              href="/jordan/pdfs/cardiac_report.pdf"
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: '#004d99', textDecoration: 'underline', marginLeft: '10px' }}
            >
              View Report
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}

export default Annuloplasty;
