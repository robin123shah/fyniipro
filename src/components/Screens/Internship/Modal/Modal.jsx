import React, { useEffect } from "react";
// import { CSSTransition } from "react-transition-group";
import "./Modal.css";

const Modal = (props) => {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return (
    <div class="popup123">
      <div class="content">
        <ul class="icons">
          <a href="#">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="#">
            <i class="fab fa-whatsapp"></i>
          </a>
          <a href="#">
            <i class="fab fa-telegram-plane"></i>
          </a>
        </ul>
        <p>Or copy link</p>
        <div class="field">
          <i class="url-icon uil uil-link"></i>
          <input type="text" readonly value="example.com/share-link" />
          <button>Copy</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
