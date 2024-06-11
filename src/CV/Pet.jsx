import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./styles.css";
import { useEffect } from "react";

const Pet = () => {
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
          <h1 className="header">Latte the Guniea Pig</h1>
        </section>
  
        <section className="sectionAnimate">
          <h2 className="subHeader">This is my guniea pig</h2>
          <br />
          <img src="/jordan/images/latte.png" className="w-[100vh] h-auto"/>
        </section>
      </div>
    </div>
  );
}

export default Pet;
