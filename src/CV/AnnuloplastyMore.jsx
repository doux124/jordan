import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./styles.css";
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
          <img src="/images/SHE.png" className="w-[100vh] h-auto"/>
          <p className="text-justify mt-3">
            The shape memory property of these rings allows them to be pliable 
            outside the body. They can be shaped into a thin rod and inserted through the left ribs. 
            The sternum will not need to be split. After being inserted into the heart, 
            they will return to their original ring shape, where they can then be sutured onto the 
            annulus to reduce mitral valve regurgitation.
          </p>
        </section>

        <div className="flexContainer">
          <section className="sectionAnimate flexItem">
            <h2 className="subHeader">Nitinol</h2>
            <img src="/images/nitinol_SHE.png" className="w-[100vh] h-auto mt-3"/>
            <p className="text-justify">
              <br />
              In Shape Memory Alloys such as Nitinol, monoclinic multi-variant martensite undergoes detwinning 
              instead of irreversible deformation, transforming into single-variant martensite with the 
              application of an external stress. The shape memory effect refers to the transformation between 
              the martensitic and austenitic phases. When the temperature is raised beyond the austenite start 
              temperature, both single and multi-variant martensitic fractions assume the interpenetrating 
              simple cubic structure austenite, which reverts to multi-variant martensite as the temperature 
              is lowered. Since austenite and multi-variant martensite have the same macroscopic structure, 
              the original shape of the material is restored.

              Advantages of Nitinol is its cheap cost and accessibility.
            </p>
          </section>
  
          <section className="sectionAnimate flexItem">
            <h2 className="subHeader">MMA-PEGDMA</h2>
            <img src="/images/MMAPEGDMA_SHE.png" className="w-[100vh] h-auto mt-3"/>
            <p className="text-justify">
              <br />
              In Shape Memory Polymers such as MMA-PEGDMA, the copolymer is made via the 
              silicon mould to have a stored permanent shape in the form of the annuloplasty 
              ring. As it sets in the mould, the polymer forms in a way that minimizes strain and 
              is at its equilibrated state. When deformed, it forms new chain-chain interactions 
              that keep it in its temporary form. However, upon heating, these weak chain-chain 
              interactions are broken, and it returns to their original permanent shape.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AnnuloplastyMore;
