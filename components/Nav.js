import React from "react";
import Image from "next/image";
import styles from "../styles/Nav.module.css";
import menu from "../data/menu";
import { HiChevronRight } from "react-icons/hi";
import { FaCaretDown } from "react-icons/fa";

const Nav = () => {
  return (
    <div className={styles.header}>
      <div>
        <a href="#">
          <Image
            src="/logo.svg"
            alt="Weiss Demo"
            className={styles.logo}
            width={150}
            height={50}
            priority
          />
        </a>
      </div>
      <ul className={styles.menu}>
        {menu.map((item, index) => (
          <li className={styles.dropdown} key={index}>
            <a href="#">
              {item.anchor}
              {item.subMenu && <FaCaretDown className="uil" size={20} />}
            </a>

            {item.subMenu && (
              <div className={styles.dropdownContent}>
                {item.subMenu.map((subItem, j) => (
                  <p key={index + " " + j}>{subItem.anchor}</p>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
      <a href="#" className={styles.cta}>
        Button <HiChevronRight className={styles.icon} size={25} />
      </a>
    </div>
  );
};

export default Nav;
