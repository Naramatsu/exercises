import React from "react";
import "./BackgroundAnimated.style.scss";

const circlesLength = 21;

const randomLeft = (index) => {
  const slot = window.innerWidth / circlesLength - 1;
  return slot * index + "px";
};

const circles = () => {
  const result = [];
  while (result.length < circlesLength) {
    const posibleCase = Math.floor(Math.random() * circlesLength);
    if (!result.includes(posibleCase)) result.push(posibleCase);
  }
  return result;
};

const BackgroundAnimated = ({ children }) => (
  <section className="lines-container">
    {circles().map((circle, index) => (
      <div
        key={circle}
        className="circle"
        style={{ left: randomLeft(index), animationDelay: `${circle}s` }}
      ></div>
    ))}
    {children}
  </section>
);

export default BackgroundAnimated;
