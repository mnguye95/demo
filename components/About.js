import { React, forwardRef, useState } from "react";
import Image from "next/image";
import styles from "../styles/About.module.css";
import {
  AiOutlineArrowRight,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import { HiChevronRight } from "react-icons/hi";

const About = (props, ref) => {
  const [active, setActive] = useState({
    0: true,
    1: false,
    2: false,
  });
  return (
    <section ref={ref} id="2" className={`${styles.last} fadeup`}>
      <div className={styles.wrapper}>
        <div className={styles.about}>
          <h3 className={styles.aboutTitle}>Wissenswertes</h3>
          <div className={styles.aboutHeader}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              possimus vel numquam expedita? Neque repellat impedit dolorum
              quas, aliquam aut modi quia ipsum, voluptates inventore, error
              voluptas incidunt officia. Hic?
            </p>
            <a href="#" className={styles.cta}>
              Learn More <HiChevronRight className="icon" size={25} />
            </a>
          </div>
          <div className={styles.aboutContent}>
            <div className={styles.aboutPhotos}>
              <div>
                <Image
                  className={styles.aboutImage}
                  src="/home/arc.jpg"
                  alt="Arc Demo"
                  width={275}
                  height={349}
                  priority
                />
              </div>
              <div>
                <Image
                  className={styles.aboutImage}
                  src="/home/hallway.jpg"
                  alt="Arc Demo"
                  width={275}
                  height={275}
                  priority
                />
                <Image
                  className={styles.aboutImage}
                  src="/home/hallway-2.jpg"
                  alt="Arc Demo"
                  width={275}
                  height={275}
                  priority
                />
              </div>
            </div>
            <div className={styles.aboutFAQ}>
              <div className={styles.numbers}>
                <div className={styles.number}>
                  <span>2260</span>
                  <p>Integer massa</p>
                </div>
                <div className={styles.number}>
                  <span>1324</span>
                  <p>Nisl non gravidl</p>
                </div>
              </div>
              <div className={styles.questions}>
                <div
                  onClick={() => setActive({ ...active, 0: !active[0] })}
                  className={`${active[0] ? styles.activeQuestion : styles.inactiveQuestion} ${
                    styles.question
                  }`}
                >
                  <div>
                    <span>
                      <AiOutlineArrowRight
                        className={styles.icon}
                        size={25}
                        color="orange"
                      />{" "}
                      Bewirb dich bei uns massa
                    </span>
                    {active[0] ? <AiOutlineMinus size={25} color="black" /> : <AiOutlinePlus size={25} color="gray"/>}
                  </div>
                  <p className={`${active[0] ? styles.open : styles.closed}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod architecto ullam recusandae repellendus rem eius
                    reiciendis! Modi, voluptas! Vitae, earum.
                  </p>
                </div>
                <div
                  onClick={() => setActive({ ...active, 1: !active[1] })}
                  className={`${active[1] ? styles.activeQuestion : styles.inactiveQuestion} ${
                    styles.question
                  }`}
                >
                  <div>
                    <span>
                      <AiOutlineArrowRight
                        className={styles.icon}
                        size={25}
                        color="orange"
                      />{" "}
                      Morbi amet aenean
                    </span>
                    {active[1] ? <AiOutlineMinus size={25} color="black" /> : <AiOutlinePlus size={25} color="gray"/>}
                  </div>
                  <p className={`${active[1] ? styles.open : styles.closed}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod architecto ullam recusandae repellendus rem eius
                    reiciendis! Modi, voluptas! Vitae, earum.
                  </p>
                </div>
                <div
                  onClick={() => setActive({ ...active, 2: !active[2] })}
                  className={`${active[2] ? styles.activeQuestion : styles.inactiveQuestion} ${
                    styles.question
                  }`}
                >
                  <div>
                    <span>
                      <AiOutlineArrowRight
                        className={styles.icon}
                        size={25}
                        color="orange"
                      />{" "}
                      Nunc condimentum nis
                    </span>
                    {active[2] ? <AiOutlineMinus size={25} color="black" /> : <AiOutlinePlus size={25} color="gray"/>}
                  </div>
                  <p className={`${active[2] ? styles.open : styles.closed}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod architecto ullam recusandae repellendus rem eius
                    reiciendis! Modi, voluptas! Vitae, earum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default forwardRef(About);
