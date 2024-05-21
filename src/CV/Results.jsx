import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./styles.css";
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
          <h1 className="header">Minimally Invasive Annuloplasty using Shape Memory Materials</h1>
        </section>
  
        <section className="sectionAnimate">
          <h2 className="subHeader">Results</h2>
          <p className="text-justify mt-3">
          <img src="/jordan/images/results1_1.png" className="image w-[100vh] h-auto"/>
          <img src="/jordan/images/results1_2.png" className="image w-[100vh] h-auto"/>

          <img src="/jordan/images/results2.png" className="image w-[100vh] h-auto"/>

          <img src="/jordan/images/results3_1.png" className="image w-[100vh] h-auto"/>
          <img src="/jordan/images/results3_2.png" className="image w-[40vh] h-auto"/>

          <img src="/jordan/images/results4_1.png" className="image w-[100vh] h-auto"/>
          <img src="/jordan/images/results4_2.png" className="image w-[100vh] h-auto"/>
          <img src="/jordan/images/results4_3.png" className="image w-[40vh] h-auto"/>
            
          </p>
        </section>
      </div>
    </div>
  );
}

export default Results;

