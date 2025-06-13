"use client";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Label from "./Label";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className={styles.container}>
      <Label />
      <div className={styles.banner}>
        <div className={styles.leftGroup}>
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(true)}
          >
            <Image
              src="/assets/hamburger.png"
              alt="menu"
              width={20}
              height={20}
            />
          </button>
          <Image
            className={styles.logo}
            src="/assets/Logo.png"
            alt="alt_logo"
            height={20}
            width={20}
          />
        </div>
        <h1 className={styles.centerText}>LOGO</h1>
        <ul>
          <li>
            <Image
              src="/assets/search-normal.png"
              alt="search icon"
              width={10}
              height={10}
            />
          </li>
          <li>
            <Image
              src="/assets/heart.png"
              alt="wishlist"
              width={10}
              height={10}
            />
          </li>
          <li>
            <Image
              src="/assets/shopping-bag.png"
              alt="shopping bag"
              width={10}
              height={10}
            />
          </li>
          <li>
            <Image
              src="/assets/profile.png"
              alt="profile icon"
              width={10}
              height={10}
            />
          </li>
          <li className={styles.language}>
            <h3>ENG</h3>
            <Image
              src="/assets/arrow-down.png"
              alt="down arrow"
              width={10}
              height={10}
            />
          </li>
        </ul>
      </div>
      <Navbar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}

export default Header;
