"use client";
import React, { useState } from "react";
import styles from "@/styles/FilterOption.module.css";
import { ChevronDown, ChevronUp } from "lucide-react";

function FilterOption({ title, options }) {
  const [selected, setSelected] = useState([]);
  const [optionsVisible, setOptionsVisible] = useState(false);

  const handleOption = () => {
    setOptionsVisible(!optionsVisible);
  };

  const unselectAll = () => {
    setSelected([]);
    const checkboxes = document.querySelectorAll(
      `input[name="${title}-option"]`
    );
    checkboxes.forEach((checkbox) => (checkbox.checked = false));
  };

  const handleChange = (e) => {
    const { id, checked } = e.target;
    setSelected((prev) =>
      checked ? [...prev, id] : prev.filter((item) => item !== id)
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.filter} onClick={handleOption}>
        <div className={styles.selector}>
          <h6>{title.toUpperCase()}</h6>
          {optionsVisible ? <ChevronUp /> : <ChevronDown />}
        </div>
        <div className={styles.selected}>
          {selected.length > 0 ? (
            selected.map((item) => <p key={item}>{item}</p>)
          ) : (
            <p>All</p>
          )}
        </div>
      </div>

      {optionsVisible && (
        <div className={styles.options}>
          <button onClick={unselectAll}>Unselect all</button>
          {options.map((item, index) => {
            const id = `${title}-${item}`;
            return (
              <div className={styles.option} key={id}>
                <input
                  className={styles.input}
                  id={id}
                  name={`${title}-option`}
                  type="checkbox"
                  onChange={handleChange}
                />
                <label htmlFor={id}>{item}</label>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default FilterOption;
