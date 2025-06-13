import React from "react";
import styles from "@/styles/FilterControl.module.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
function FilterControl({ showFilter, setShowFilter }) {
  return (
    <div className={styles.container}>
      {/* only visible on mobile screens, onclick, show filter */}
      <button
        className={styles.triggerfilter}
        onClick={() => setShowFilter(!showFilter)}
      >
        Filter
      </button>
      {/* only visible on desktop screens */}
      <div className={styles.info}>
        <h4>120 Items</h4>
        {showFilter ? (
          <button
            onClick={() => {
              console.log(showFilter);
              setShowFilter(!showFilter);
            }}
          >
            <ChevronLeft /> Hide filter
          </button>
        ) : (
          <button
            onClick={() => {
              console.log(showFilter);
              setShowFilter(!showFilter);
            }}
          >
            <ChevronRight /> Show filter
          </button>
        )}
      </div>
      <p className={styles.divider}></p>
      {/* filter by dropdown,visible on both */}
      <select name="filter_by" id="group_filters">
        <option value="recommended">recommended</option>
        <option value="newest_first">newest first</option>
        <option value="popular">popular</option>
        <option value="low_to_high">price: low to high</option>
        <option value="high_to_low">price: high to low</option>
      </select>
    </div>
  );
}

export default FilterControl;
