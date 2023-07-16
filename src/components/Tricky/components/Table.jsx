import React from "react";
import Block from "./Block";
import { positions } from "../utils.js";
import "./Table.style.scss";

const Table = ({ handlerMoves, moves, drawIcon }) => (
  <section className="table">
    {positions.map((rows, rowIndex) => (
      <section className="row" key={rowIndex}>
        {rows.map((column, columnsIndex) => (
          <Block
            key={columnsIndex}
            index={column}
            handlerMoves={handlerMoves}
            player={moves.length % 2}
            icon={drawIcon(column)}
          />
        ))}
      </section>
    ))}
  </section>
);

export default Table;
