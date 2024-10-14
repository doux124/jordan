import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "../styles.css";
import { useEffect } from "react";

const Results = () => {
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
          <h1 className="header">Minimally Invasive Annuloplasty: Results</h1>
        </section>

        <section className="sectionAnimate">
          <h2 className="subHeader">Reduction in backflow</h2>
          <p className="text-justify mt-3">
            <img src="/jordan/images/arp/results3_1.png" className="image w-[100vh] h-auto mb-5"/>
            <div class="flex">
              <img src="/jordan/images/arp/results3_2.png" className="image w-[40vh] h-auto mr-5"/>
              <p className="mt-2">
                We tested the efficacy of the rings using the static backflow method on swine hearts 
                due to their similarity to human hearts. Water was pumped at a constant flow rate 
                against the valve, and the reduction in backflow velocity was calculated. The results 
                show that the reduction in backflow is comparable to traditional annuloplasty rings.
              </p>
            </div>
          </p>
        </section>
        <section className="sectionAnimate">
          <h2 className="subHeader">Flexural Rigidity</h2>
          <p className="text-justify mt-3">
            <img src="/jordan/images/arp/results4_1.png" className="image w-[100vh] h-auto mb-5"/>
            Weights were hung from the annuloplasty rings, extending it, and the resulting 
            radius of curvature R formed is obtained using Tracker by fitting the curved section to a circle.
            <img src="/jordan/images/arp/results4_2.png" className="image w-[100vh] h-auto mt-5"/>
            <div class="flex">
              <p className="mt-2 mr-3">
              The material-specific elastic modulus E is obtained from the gradient of the stress-strain
              plot, allowing the determination the geometry-specific flexural rigidity D as a function of
              the ring thickness via D = EI, where I is the moment of inertia. The flexural rigidity of 
              the traditional annuloplasty rings is then used to calculate the optimal thickness of our 
              thermosensitive annuloplasty rings.
              </p>
              <img src="/jordan/images/arp/results4_3.png" className="image w-[40vh] h-auto"/>
            </div>
          </p>
        </section>
        <section className="sectionAnimate">
          <h2 className="subHeader">Reduction in incision size</h2>
          <p className="text-justify mt-3">
            <img src="/jordan/images/arp/results1_1.png" className="image w-[100vh] h-auto mb-5"/>
            <img src="/jordan/images/arp/results1_2.png" className="image w-[100vh] h-auto"/>
            <br /> We plotted reduction in incision size against ring thickness. At each material's optimal thickness, 
            the reduction in incisison size is 52% for Nitinol and 48% for MMA-PEGDMA. This suggests a significant reduction in incision size. The optimal thickness is calculated using the flexural rigidity 
            of each ring type.
          </p>
        </section>
        <section className="sectionAnimate">
          <h2 className="subHeader">Recovery time</h2>
          <p className="text-justify mt-3">
            <img src="/jordan/images/arp/results2.png" className="image w-[100vh] h-auto"/>
          </p>
        </section>
      </div>
    </div>
  );
}

export default Results;

