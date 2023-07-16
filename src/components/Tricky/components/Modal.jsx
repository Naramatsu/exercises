import React from "react";
import "./Modal.style.scss";

const Modal = ({ children, show }) => {
  return show && <section className="modal">{children}</section>;
};

export default Modal;
