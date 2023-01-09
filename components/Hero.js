import { React, forwardRef } from "react";
import Image from "next/image";
import styles from "../styles/Hero.module.css";
import { HiChevronRight } from "react-icons/hi";

const Hero = (props, ref) => {
  return (
    <section ref={ref} id="0" className={`${styles.hero}`}>
      <div className={styles.heroFirst}>
        <span>Lorem ipsum dolor sit.</span>
        <h1>Lorem ipsum dolor, sit amet consectetur adipisicing.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          repellendus quod laboriosam labore inventore. Error temporibus
          incidunt rerum nostrum iure dolorum nobis expedita, sit nisi facilis..
        </p>
        <a href="#">
          Learn More <HiChevronRight className={styles.icon} size={25} />
        </a>
      </div>
      <div className={styles.heroSecond}>
        <Image
          className={styles.heroImage}
          src="/home/arc.jpg"
          alt="Arc Demo"
          width={579}
          height={734}
          priority
        />
      </div>
    </section>
  );
};

export default forwardRef(Hero);
