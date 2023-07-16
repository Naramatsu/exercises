import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import "./CardGlassComment.style.scss";
import { BsQuote } from "react-icons/bs";

const CardGlassComment = () => {
  const tilt = useRef(null);
  const options = {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.5,
  };

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, []);

  const img = "https://cdn.wallpapersafari.com/64/44/gYwV8P.jpg";

  return (
    <section className="card-comment__box" ref={tilt}>
      <section className="card-comment"></section>
      <section className="card-comment__elements bg">
        <BsQuote className="quote" />
      </section>
      <section className="card-comment__elements img">
        <img src={img} alt="avatar" />
      </section>
      <section className="card-comment__elements name">
        <h2>Michell Mendoza</h2>
      </section>
      <section className="card-comment__elements text">
        <p>
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor (N. del T.
          persona que se dedica a la imprenta)
        </p>
      </section>
    </section>
  );
};

export default CardGlassComment;
