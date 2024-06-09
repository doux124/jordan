import React, { useEffect, useState } from 'react';
import gsap from "gsap";
import "./styles.css";
import { preloader } from "../hooks/Preloader";

const Pet = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    const reloaded = sessionStorage.getItem('reloaded');
    if (!reloaded)  {
      sessionStorage.setItem('reloaded', 'true');
      window.location.reload();
    }

    const checkLoaded = setInterval(() => {
      if (preloader.isLoaded()) {
        setLoaded(true);
        clearInterval(checkLoaded);
      }
    }, 100);

    return () => clearInterval(checkLoaded);
  }, []);

  useEffect(() => {
    if (loaded) {
      gsap.fromTo('.sectionAnimate', {
        opacity: 0,
        y: 20
      }, {
        opacity: 1,
        y: 0,
        delay: 1,
        stagger: 0.2
      });
    }
  }, [loaded]);

  if (!loaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pageContainer">
      <div className="projectContainer">
        <section className="sectionAnimate">
          <h1 className="header">Latte the Guinea Pig</h1>
        </section>

        <section className="sectionAnimate">
          <h2 className="subHeader">This is my guinea pig</h2>
          <br />
          <img src={preloader.images.latte.image.src} alt="Latte the Guinea Pig" className="w-[100vh] h-auto" />
        </section>
      </div>
    </div>
  );
}

export default Pet;
