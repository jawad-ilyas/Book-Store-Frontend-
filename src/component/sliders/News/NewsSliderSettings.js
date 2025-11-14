// src/components/News/NewsSliderSettings.js
import NewsArrows from "./NewsArrows";
import React from "react";
const NewsSliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: React.createElement(NewsArrows, { direction: "left" }),
    nextArrow: React.createElement(NewsArrows, { direction: "right" }),
    responsive: [
        { breakpoint: 1280, settings: { slidesToShow: 2 } },
        { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
};

export default NewsSliderSettings;
