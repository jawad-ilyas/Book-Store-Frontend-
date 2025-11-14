import React from "react";
import { Arrow } from "./TopSellersArrows";

export const topSellersSliderSettings = {
  dots: false,
  infinite: true,
  speed: 600,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <Arrow direction="right" />,
  prevArrow: <Arrow direction="left" />,
  responsive: [
    { breakpoint: 1280, settings: { slidesToShow: 3 } },
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
};
