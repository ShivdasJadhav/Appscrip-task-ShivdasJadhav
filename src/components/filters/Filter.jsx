import React from "react";
import styles from "@/styles/Filter.module.css";
import FilterOption from "./FilterOption";
import { filterData } from "@/Data";

function Filter({ isMobile, onClose }) {
  return (
    <div
      className={`${isMobile ? styles.mobileFilter : styles.container} ${
        isMobile ? styles.open : ""
      }`}
    >
      {isMobile && (
        <button type="button" className={styles.closeBtn} onClick={onClose}>
          ×
        </button>
      )}
      <div className={styles.customizable}>
        <input id="customizable" type="checkbox" />
        <label htmlFor="customizable">
          <h6>customizable</h6>
        </label>
      </div>
      {Object.entries(filterData).map(([title, options]) => (
        <FilterOption key={title} title={title} options={options} />
      ))}
    </div>
  );
}

export default Filter;
