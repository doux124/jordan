import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./styles.css";
import { useEffect } from "react";

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
            A sizer is used to measure the size of the annulus.
            <img src="/images/sizer.png" className="image w-[20vh] h-auto ml-20"/>
          </p>
        </section>
      </div>
    </div>
  );
}

export default Procedure;

