import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.outer}>
        <div className={styles.firstrow}>
          <Image
            src="/white-logo.svg"
            alt="Weiss Demo"
            className={styles.logo}
            width={150}
            height={50}
            priority
          />
          <div className={styles.contact}>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1em" }}
            >
              <strong>EMAIL</strong>
              <p>team@weiss.com</p>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1em" }}
            >
              <strong>ADDRESS</strong>
              <p>
                200 W Cesar Chavez St.<br></br>Ste 350, Austin, TX 78701
              </p>
            </div>
          </div>
        </div>
        <div className={styles.secondrow}>
          <div>
            <p>Terms of Services</p>
            <p>Privacy Policy</p>
          </div>
          <div>
            <p>&copy; WEISS Limited</p>
            <p>2022 All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
