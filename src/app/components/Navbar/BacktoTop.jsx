"use client";

import React, { useEffect, useState } from "react";

function BacktoTop() {
  const [showButton, setShowButton] = useState(false);

  const scrollFunction = () => {
    if (window.scrollY > 20) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const topFunction = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  return (
    <button
      onClick={topFunction}
      id="myBtn"
      style={{ display: showButton ? "block" : "none" }}
    >
      <i className="ri-arrow-up-s-line"></i>
    </button>
  );
}

export default BacktoTop;
