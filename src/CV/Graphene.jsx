import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./styles.css";

const Graphene = () => {
  useGSAP(() => {
    gsap.fromTo('.sectionAnimate', {
      opacity: 0,
      y:20
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
          <h1 className="header">Plasma-based Defect Engineering of Graphene for Biosensing Applications</h1>
        </section>

        <section className="sectionAnimate">
          <h2 className="subHeader">Introduction</h2>
          <p className="flex-1 text-justify mt-2">
            We improved glucose biosensors by increasing the range of glucose sensing. 
            By exposing graphene to low power RF plasma, defects are introduced on its 
            surface, increasing glucose oxidase adsorption. The new sensors were evaulated 
            through Raman spectroscopy and an accessment of their electrical properties.
            <img src="/jordan/images/raman.png" className="image w-[100vh] h-auto mx-auto mt-5 center"/>
          </p>
        </section>

        <section className="sectionAnimate">
          <h2 className="subHeader">Graphene Synthesis</h2>
          <p className="flex-1 text-justify mt-2">
            We grew our graphene using Chemical Vapor Deposition (CVD). Hydrogen gas 
            was used to clean the copper substrate surface of contaminants. 
            Methane gas was then flowed in, chemisorbing onto the copper surface and 
            initiating the growth of graphene. The process is self-limiting due to graphene's minimal solubility in copper.
            
            To transfer the graphene layer onto glass slides, polymethyl methacrylate (PMMA) was 
            spin-coated on top of the graphene-copper stack. To isolate the graphene, it was baked 
            in an oven, floated in Iron Chloride (III) solution and soaked in acetone.
          </p>
        </section>

        <section className="sectionAnimate">
          <h2 className="subHeader">Building the Sensor</h2>
          <p className="flex-1 text-justify mt-2">
            <img src="/jordan/images/cvd.png" className="image w-[50vh] h-auto mx-auto mt-5 center"/>
            <br />
            
            <img src="/jordan/images/gbb.png" className="image w-[50vh] h-auto mx-auto mt-5 center"/>
            The figure above shows our biosensor at its most fundamental level. 2 silver ink 
            droplets with Cu wires attached were used as metal contacts. The graphene surface 
            was then immobilised with 1mg/dl GOx solution            
          </p>
        </section>

        <section className="section">
          <h2 className="subHeader">Links</h2>
          <p className="flex-1 text-justify mt-2">
            Our poster: 
            <a 
              href="/jordan/pdfs/smp_poster.pdf"
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: '#004d99', textDecoration: 'underline', marginLeft: '10px' }}
            >
              View Poster
            </a>
            <br />
            Our research paper: 
            <a 
              href="/jordan/pdfs/smp_report.pdf"
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

export default Graphene;
