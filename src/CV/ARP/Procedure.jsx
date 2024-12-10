import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "../styles.css";
import { useEffect } from "react";
import { Link } from 'react-router-dom';

const Procedure = () => {
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

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    const reloaded = sessionStorage.getItem('reloaded');
    if (!reloaded)  {
      sessionStorage.setItem('reloaded', 'true');
      window.location.reload();
    }
  }, []);

  return (
    <div className="pageContainer">
      <div className="projectContainer">
        <section className="sectionAnimate">
          <h1 className="header">Minimally Invasive Annuloplasty using Shape Memory Materials</h1>
        </section>
  
        <section className="sectionAnimate">
          <h2 className="subHeader">Procedure</h2>
          <p className="text-justify mt-3">
            1. A sizer is used to measure the size of the annulus.
            <img src="/jordan/images/arp/sizer.png" className="image w-[20vh] h-auto"/>
            <br />
            2. The correctly sized <Link to="/research/annuloplasty" style={{ color: '#004d99', textDecoration: 'underline' }}>ring</Link> is made.
            <img src="/jordan/images/arp/steps.png" className="image w-[100vh] h-auto mt-2"/>
            <br />
            2.5. For MMA-PEGDMA rings, the copolymer has to be prepared before letting it set in our molds. 
            <img src="/jordan/images/arp/prep.png" className="image w-[100vh] h-auto"/>
            3. The rings are sutured onto swine hearts exhibiting mitral valve regurgitation.
            <img src="/jordan/images/arp/procedure.png" className="image w-[100vh] h-auto mt-2"/>
            <br />
            4. Four seperate measurements were taken: 
            <br />&emsp;- Reduction in incision size
            <br />&emsp;- Recovery time
            <br />&emsp;- Reduction in backflow
            <br />&emsp;- Flexural Rigidity
          </p>
        </section>
        <section className="sectionAnimate">
          <h2 className="subHeader">Biodegradability of MMA-PEGDMA</h2>
          <p className="text-justify mt-3">
            <img src="/jordan/images/arp/biodegrade.png" className="image w-[100vh] h-auto"/>
            <br />
            MMA-PEGDMA is non-toxic and hydrolyzes into PMMA and PEG, both of which are also safe. 
            PEG is metabolized by the liver and excreted in urine after seven days, while PMMA 
            is used in various medical applications, including bone screw fixation and intraocular 
            lenses. Biocompatibility testing by an independent lab confirmed its safety through a 
            series of standardized tests for cytotoxicity, irritation, and toxicity*.
            <br />
            <br />
            *Biocompatibility testing of MMA-PEGDMA was conducted by AppTec, an independent 
            laboratory in St. Paul, MN. The samples, prepared as 8 × 16 mm² cylinders, 
            were cleaned in boiling water for an hour and sterilized with gamma irradiation. 
            The tests, adhering to ISO 10993 GLP standards, assessed cytotoxicity, sensitization, 
            intracutaneous irritation, acute and subchronic toxicity, and genotoxicity, confirming 
            the material's safety.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Procedure;

