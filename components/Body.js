import { React, createRef, useEffect, useState } from "react";
import Hero from "./Hero";
import About from "./About";
import Middle from "./Middle";
import Carousel from "./Carousel";
import styles from "../styles/Home.module.css";

const Body = () => {
  const [activeBand, setActiveBand] = useState(0);
  const heroRef = createRef(null);
  const middleRef = createRef(null);
  const aboutRef = createRef(null);

  if (typeof window !== "undefined") {
    const sections = document.querySelectorAll("section");

    const options = {
      root: null,
      threshold: 0.25,
      rootMargin: "-175px",
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add('in-view');
        }
        if (activeBand != parseInt(entry.target.id) && entry.isIntersecting) {
          setActiveBand(parseInt(entry.target.id));
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });
  }

  const moveViewTo = (band) => {
    if (band === 0) {
      heroRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "end",
      });
    } else if (band === 1) {
      middleRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "end",
      });
    } else if (band === 2) {
      aboutRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "end",
      });
    }
  };

  return (
    <div className={styles.mainWrapper}>
      <Carousel active={activeBand || 0} moveViewTo={moveViewTo} />
      <Hero ref={heroRef} />
      <Middle ref={middleRef} />
      <About ref={aboutRef} />
    </div>
  );
};

export default Body;
