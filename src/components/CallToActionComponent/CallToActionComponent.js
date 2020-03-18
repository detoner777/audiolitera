import React from "react";
import "./style.css";

export const CallToActionComponent = () => {
  return (
    <section className="cta">
      <div className="cta-content">
        <div className="container">
          <h2>
            Установите красивое
            <br />и удобное приложение
          </h2>
          <a
            href="#download"
            className="btn btn-outline btn-xl js-scroll-trigger"
          >
            Скачать приложение!
          </a>
        </div>
      </div>
      <div className="overlay"></div>
    </section>
  );
};
