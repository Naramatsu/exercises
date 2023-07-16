import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import "./CardGlassBasic.style.scss";

const CardGlassBasic = () => {
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

  return (
    <section className="card" ref={tilt}>
      <section className="content">
        <h3 className="title">Card One</h3>
        <p className="text-content">
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500.
        </p>
        <button onClick={() => console.log("hola")}>Read More</button>
      </section>
    </section>
  );
};

export default CardGlassBasic;
