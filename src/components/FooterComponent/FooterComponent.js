import React from "react";
import "./style.css";

export const FooterComponent = () => {
  return (
    <footer>
      <div className="container">
        <p>&copy; 2020 Audiolitera.ru. All Rights Reserved.</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <span>
              made by
              <a href="https://detoner777.github.io/portfolio-page/">
                {" "}
                Alexey Lysenko
              </a>
            </span>
          </li>
          {/* <li className="list-inline-item">
            <a href="#">Terms</a>
          </li>
          <li className="list-inline-item">
            <a href="#">FAQ</a>
          </li> */}
        </ul>
      </div>
    </footer>
  );
};
