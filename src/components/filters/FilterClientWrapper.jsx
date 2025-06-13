"use client";
import { useState, useEffect } from "react";
import FilterControl from "./FilterControl";
import Filter from "./Filter";

export default function FilterClientWrapper() {
  const [showFilter, setShowFilter] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <>
      <FilterControl showFilter={showFilter} setShowFilter={setShowFilter} />
      {(showFilter || !isMobile) && (
        <Filter
          isMobile={isMobile}
          onClose={() => setShowFilter(false)}
        />
      )}
    </>
  );
}
