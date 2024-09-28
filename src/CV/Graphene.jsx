import "./styles.css";

const Graphene = () => {
  return (
    <div className="pageContainer">
      <div className="projectContainer">
        <section className="section">
          <h1 className="header">Plasma-based Defect Engineering of Graphene for Biosensing Applications</h1>
        </section>

        <section className="section">
          <h2 className="subHeader">Introduction</h2>
          <p className="flex-1 text-justify mt-2">
            We improved glucose biosensors by increasing the range of glucose sensing. 
            By exposing graphene to low power RF plasma, defects are introduced on its 
            surface, increasing glucose oxidase adsorption. The new sensors were evaulated 
            through Raman spectroscopy and an accessment of their electrical properties.
            <img src="/jordan/images/raman.png" className="image w-[100vh] h-auto mx-auto mt-5 center"/>
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
            <img src="/jordan/images/cvd.png" className="image w-[50vh] h-auto mx-auto mt-5 center"/>
            <br />
            The graphene is subjected to RF Plasma.
            <br />
            
            <img src="/jordan/images/gbb.png" className="image w-[50vh] h-auto mx-auto mt-5 center"/>
            <br />
            The figure above shows our biosensor at its most fundamental level. 2 silver ink 
            droplets with Cu wires attached were used as metal contacts. The graphene surface 
            was then immobilised with 1mg/dl GOx solution.            
          </p>
        </section>

        <section className="section">
          <h2 className="subHeader">Results</h2>
          <p className="flex-1 text-justify mt-2">
            <img src="/jordan/images/glucose_results.png" className="image w-[75vh] h-auto mx-auto mt-5 center"/>
            <br />
            Initial resistance increases with more plasma exposure while change in resistance against glucose 
            concentration decreases. Above 15mins of exposure causes GOx to be unable to bind effectively.
            <br />
            <br />
            From our results, we can see that by exposing the biosensor to 5-10mins of RF plasma, the effective 
            sensing range increases. This has applications in improving the feasbility of wearable biosensors. 
            Through this method, an effective wearable and resuable diabetes monitoring sensor can be made.      
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
