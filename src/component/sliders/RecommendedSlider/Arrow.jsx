// Arrow.jsx
import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Arrow = ({ className, style, onClick, icon }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 transform -translate-y-1/2 z-40 ${className}`}
    style={{
      ...style,
      background: "rgba(255,255,255,0.9)",
      width: 44,
      height: 44,
      borderRadius: 9999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
    }}
    aria-label="slider-arrow"
  >
    {icon}
  </button>
);

export const PrevArrow = (props) => (
  <Arrow {...props} icon={<FiChevronLeft size={20} />} className="left-0 -ml-6" />
);

export const NextArrow = (props) => (
  <Arrow {...props} icon={<FiChevronRight size={20} />} className="right-0 -mr-6" />
);
