"use client";
import React, { useState, useEffect } from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";

function Footer() {
  const [isMobile, setIsMobile] = useState(false);
  const [openSections, setOpenSections] = useState({
    sitemap: true,
    quicklinks: true,
    social: true,
  });

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setOpenSections({ sitemap: true, quicklinks: true });
      }
    };
    handleResize(); // call on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSection = (key) => {
    if (!isMobile) return;
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  return (
    <div className={styles.container}>
      {/* Top Info Section */}
      <div className={styles.info}>
        <div className={styles.subscribe}>
          <h2>BE THE FIRST TO KNOW</h2>
          <p className={styles.desktopOnly}>
            Sign up for updates from mettā muse.
          </p>
          <p className={styles.mobileOnly}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. this is simply dummy text.
          </p>
          <div className={styles.form}>
            <input type="text" placeholder="Enter your e-mail..." />
            <button>Subscribe</button>
          </div>
        </div>
        <div className={styles.contact}>
          <div className={styles.contactDetails}>
            <h2 className={styles.desktopOnly}>CONTACT US</h2>
            <h2 className={styles.mobileOnly}>CALL US</h2>
            <div className={styles.rowContact}>
              <p>+44 221 133 5360</p>
              <li>customercare@mettamuse.com</li>
            </div>
          </div>
          <div className={styles.currencyDetails}>
            <h2>CURRENCY</h2>
            <div className={styles.currency}>
              <Image src={"/assets/usa.png"} alt="usa" width={20} height={20} />
              <li>USD</li>
            </div>
            <p className={styles.desktopOnly}>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>
      </div>

      <hr />

      {/* Links Section */}
      <div className={styles.links}>
        <div className={`${styles.sitemap} ${styles.section}`}>
          <div
            className={styles.sectionHeader}
            onClick={() => toggleSection("sitemap")}
          >
            <h2>mettā muse</h2>
            {isMobile &&
              (openSections.sitemap ? (
                <ChevronUp className={styles.icon} />
              ) : (
                <ChevronDown className={styles.icon} />
              ))}
          </div>
          {openSections.sitemap && (
            <ul>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/stories">Stories</Link>
              </li>
              <li>
                <Link href="/artisans">Artisans</Link>
              </li>
              <li>
                <Link href="/boutiques">Boutiques</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/compliances">EU Compliances DOCS</Link>
              </li>
            </ul>
          )}
        </div>

        <div className={`${styles.quicklinks} ${styles.section}`}>
          <div
            className={styles.sectionHeader}
            onClick={() => toggleSection("quicklinks")}
          >
            <h2>QUICK LINKS</h2>
            {isMobile &&
              (openSections.quicklinks ? (
                <ChevronUp className={styles.icon} />
              ) : (
                <ChevronDown className={styles.icon} />
              ))}
          </div>
          {openSections.quicklinks && (
            <ul>
              <li>
                <Link href="#">Orders & Shippings</Link>
              </li>
              <li>
                <Link href="#">Join/Login as a Seller</Link>
              </li>
              <li>
                <Link href="#">Payment & Pricing</Link>
              </li>
              <li>
                <Link href="#">Returns & Refunds</Link>
              </li>
              <li>
                <Link href="#">FAQs</Link>
              </li>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Terms & Conditions</Link>
              </li>
            </ul>
          )}
        </div>

        <div className={`${styles.social}`}>
          <div className={styles.section}>
            <div
              className={styles.sectionHeader}
              onClick={() => toggleSection("social")}
            >
              <h2>FOLLOW US</h2>
              {isMobile &&
                (openSections.social ? (
                  <ChevronUp className={styles.icon} />
                ) : (
                  <ChevronDown className={styles.icon} />
                ))}
            </div>
            {(!isMobile || openSections.social) && (
              <div className={styles.socialIcons}>
                <Image
                  src={"/assets/insta.png"}
                  alt="instagram"
                  width={20}
                  height={20}
                />
                <Image
                  src={"/assets/linkedin.png"}
                  alt="linkedin"
                  width={20}
                  height={20}
                />
              </div>
            )}
          </div>
          <div className={styles.paymentSection}>
            <h2>mettā muse ACCEPTS</h2>
            <div className={styles.payment}>
              <Image
                src={"/assets/g_pay.png"}
                alt="google pay"
                width={20}
                height={20}
              />
              <Image
                src={"/assets/master_pay.png"}
                alt="mastercard"
                width={20}
                height={20}
              />
              <Image
                src={"/assets/pay_pal.png"}
                alt="paypal"
                width={20}
                height={20}
              />
              <Image
                src={"/assets/amex_pay.png"}
                alt="amex"
                width={20}
                height={20}
              />
              <Image
                src={"/assets/apple_pay.png"}
                alt="apple pay"
                width={20}
                height={20}
              />
              <Image
                src={"/assets/o_pay.png"}
                alt="o pay"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        Copyright © 2023 mettamuse. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
