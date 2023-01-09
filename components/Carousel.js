import React from "react";
import styles from "../styles/Carousel.module.css";
import { FaCaretRight } from "react-icons/fa";

const Carousel = ({ active, moveViewTo }) => {
  return (
    <div id='nagivator' className={styles.verticalCarousel}>
      <ul>
        <li
          onClick={() => moveViewTo(0)}
          className={active === 0 ? styles.selected : undefined}
        >
         <FaCaretRight className={styles.icon} size={25} /> 01
        </li>
        <li
          onClick={() => moveViewTo(1)}
          className={active === 1 ? styles.selected : undefined}
        >
         <FaCaretRight className={styles.icon} size={25} /> 02
        </li>
        <li
          onClick={() => moveViewTo(2)}
          className={active === 2 ? styles.selected : undefined}
        >
         <FaCaretRight className={styles.icon} size={25} /> 03
        </li>
      </ul>
    </div>
  );
};

export default Carousel;
