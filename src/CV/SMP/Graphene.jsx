import "../styles.css";

const Graphene = () => {
  return (
    <div className="pageContainer">
      <div className="projectContainer">
        <section className="section">
          <h1 className="header">Plasma-based Defect Engineering of Graphene for Biosensing Applications</h1>
        </section>

        <section className="section">
          <h2 className="subHeader">Keywords</h2>
          <p className="flex-1 text-justify mt-2">
            Glucose Biosensor, Graphene, Chemical Vapor Deposition (CVD), RF Plasma
          </p>
        </section>

        <section className="section">
          <h2 className="subHeader">Introduction</h2>
          <p className="flex-1 text-justify mt-2">
            We successfully made biosensors with a wider range of glucose sensing. 
            By exposing graphene to low power RF plasma, we introduce defects onto its 
            surface, increasing glucose oxidase adsorption. The new sensors were evaulated 
            through Raman spectroscopy and an accessment of their electrical properties.
            <img src="/jordan/images/smp/raman.png" className="image w-[100vh] h-auto mx-auto mt-5 center"/>
          </p>
        </section>

        <section className="section">
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

        <section className="section">
          <h2 className="subHeader">Building the Sensor</h2>
          <p className="flex-1 text-justify mt-2">
            <img src="/jordan/images/smp/cvd.png" className="image w-[50vh] h-auto mx-auto mt-5 center"/>
            <br />
            The graphene is subjected to RF Plasma to introduce defects. This allows for a greater surface area 
            for glucose oxidase (GOx) adsorption, which reacts with glucose to alter the biosensor's electrical properties. 
            Our sensor works by measuring the change in resistance, which is mapped to the blood glucose concentration.
            <br />
            <img src="/jordan/images/smp/gbb.png" className="image w-[50vh] h-auto mx-auto mt-5 center"/>
            <br />
            The figure above shows our biosensor at its most fundamental level. 2 silver ink 
            droplets with Cu wires attached were used as metal contacts. The graphene surface 
            was then immobilised with 1mg/dl GOx solution.            
          </p>
        </section>

        <section className="section">
          <h2 className="subHeader">Results</h2>
          <p className="flex-1 text-justify mt-2">
            <img src="/jordan/images/smp/glucose_results.png" className="image w-[75vh] h-auto mx-auto mt-5 center"/>
            <br />
            Our results demonstrate that over 15mins of exposure affects the quality of GOx binding. However, 
            5-10mins of RF plasma exposure causes the effective sensing range of our biosensor to increase. 
            Through this method, a more effective wearable and resuable diabetes monitoring sensor can be made.      
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
