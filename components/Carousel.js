import React from "react";
import styles from "../styles/Carousel.module.css";

const Carousel = ({ active, moveViewTo }) => {
  return (
    <div className={styles.verticalCarousel}>
      <ul>
        <li
          onClick={() => moveViewTo(0)}
          className={active === 0 && styles.selected}
        >
          01
        </li>
        <li
          onClick={() => moveViewTo(1)}
          className={active === 1 && styles.selected}
        >
          02
        </li>
        <li
          onClick={() => moveViewTo(2)}
          className={active === 2 && styles.selected}
        >
          03
        </li>
      </ul>
    </div>
  );
};

export default Carousel;
