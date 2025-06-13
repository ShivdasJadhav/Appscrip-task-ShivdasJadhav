"use client";
import Link from "next/link";
import React from "react";
import { X } from "lucide-react"; 
import styles from "../styles/Navbar.module.css";

function Navbar({ isOpen, onClose }) {
  return (
    <nav className={`${styles.container} ${isOpen ? styles.open : ""}`}>
      <button className={styles.closeBtn} onClick={onClose}>
        <X size={24} />
      </button>
      <Link href="/shop">Shop</Link>
      <Link href="/skills">Skills</Link>
      <Link href="/stores">Stores</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact Us</Link>
    </nav>
  );
}

export default Navbar;
