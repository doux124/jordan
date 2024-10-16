import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "../styles.css";
import { useEffect } from "react";

const AnnuloplastyMore = () => {
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
          <h1 className="header">Shape Memory Materials: Nitinol and MMA-PEGDMA</h1>
        </section>
  
        <section className="sectionAnimate">
          <h2 className="subHeader">Shape Memory Effect</h2>
          <br />
          <img src="/jordan/images/arp/SHE.png" className="w-[100vh] h-auto"/>
          <p className="text-justify mt-3">
            The shape memory property of these rings allows them to be pliable 
            outside the body. Since they can be shaped into a thin rod and inserted through the left ribs, 
            the sternum will not need to be split. After being inserted into the heart, 
            they will return to their original ring shape, where they can then be sutured onto the 
            annulus.
          </p>
        </section>

        <div className="flexContainer">
          <section className="sectionAnimate flexItem">
            <h2 className="subHeader">Nitinol</h2>
            <img src="/jordan/images/arp/nitinol_SHE.png" className="w-[100vh] h-auto mt-3"/>
            <p className="text-justify">
              <br />
              Shape Memory Alloys like Nitinol can return to their original shape after being deformed. 
              This happens because, under stress, they change from a complex to a simpler internal 
              structure without permanent damage. When heated, they transform from a martensitic phase 
              to an austenitic phase, and when cooled, they revert back. This transformation allows 
              the material to "remember" and return to its original shape.
              <br />
              <br />
              An advantage of Nitinol is its cheap cost and accessibility.
            </p>
          </section>
  
          <section className="sectionAnimate flexItem">
            <h2 className="subHeader">MMA-PEGDMA</h2>
            <img src="/jordan/images/arp/MMAPEGDMA_SHE.png" className="w-[100vh] h-auto mt-3"/>
            <p className="text-justify">
              <br />
              Shape Memory Polymers are set using a silicon mold. As it forms, 
              strain is minimized and it reaches a stable state. When deformed, 
              it creates temporary interactions that keep it in a new shape. 
              However, heating breaks these interactions, allowing it to return 
              to its original shape. 
              <br />
              <br />
              For biodegradable rings, as the material degrades, 
              the patient's tissue and cells grow around the ring, creating a natural structure. 
              This feature makes MMA-PEGDMA rings ideal for use in children.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AnnuloplastyMore;
