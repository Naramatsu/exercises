import React, { useState, useEffect } from "react";
import "./TextAnimated.style.scss";

const TextAnimated = () => {
  const [handlerActive, setHandlerActive] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setHandlerActive("active");
    }, 3000);
  }, []);

  return (
    <section>
      <h3>Text Animated</h3>
      <h5>Result</h5>
      <br />
      <section className="banner">
        <h2 className={`banner__text__animation1 ${handlerActive}`}>
          Some Title Here.
        </h2>
        <p className={`banner__text__animation1 text ${handlerActive}`}>
          Some Paragraph Here
        </p>
      </section>
      <section className="banner">
        <h2 className={`banner__text__animation2 ${handlerActive}`}>
          Some Title Here.
        </h2>
        <p className={`banner__text__animation2 text ${handlerActive}`}>
          Some Paragraph Here
        </p>
      </section>
    </section>
  );
};

export default TextAnimated;
