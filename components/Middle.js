import { React, forwardRef } from "react";
import Image from "next/image";
import styles from "../styles/Middle.module.css";
import { HiChevronRight } from "react-icons/hi";

const Middle = (props, ref) => {
  return (
    <section ref={ref} id="1" className="fadeup">
      <div className={styles.intersection}>
        <div className={styles.middle}>
          <div className={styles.middleLeft}>
            <div className={styles.middleText}>
              <span>Lorem ipsum dolor sit.</span>
              <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                exercitationem expedita dolore vitae dolores rerum doloremque
                cum assumenda minus.,
              </p>
              <a href="#">
                Lesen Sie weiter <HiChevronRight className="icon" size={25} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.wrapper}>
          <Image
            className={styles.bottomImage}
            src="/home/structure.jpg"
            alt="Structure Demo"
            width={450}
            height={675}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default forwardRef(Middle);
