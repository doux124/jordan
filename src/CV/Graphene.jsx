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
            Our research aims to enhance glucose biosensors by improving the attachment of glucose 
            oxidase (GOx) to graphene. By exposing graphene to low power radiofrequency (RF) plasma, 
            defects are introduced on its surface, which is expected to increase GOx adsorption. This 
            enhanced attachment is hypothesized to lead to a larger dynamic range in glucose sensing. 
            The project's success will be evaluated through electrical property measurements using an 
            IV probe station and quality assessments of graphene via Raman spectroscopy.
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
