import React from "react";
import "./Block.style.scss";

const Block = ({ index, handlerMoves, icon }) => (
  <section className="block" onClick={() => handlerMoves(index)}>
    {icon}
  </section>
);

export default Block;
