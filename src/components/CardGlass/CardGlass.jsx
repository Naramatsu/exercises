import React from "react";
import CardGlassBasic from "./components/CardGlassBasic";
import CardGlassComment from "./components/CardGlassComment";
import "./style.scss";

const CardGlass = () => {
  return (
    <section className="app">
      <section className="container">
        <CardGlassBasic />
        <section className="card-group">
          <CardGlassComment />
          <CardGlassComment />
          <CardGlassComment />
        </section>
      </section>
    </section>
  );
};

export default CardGlass;
