import React from "react";
import "./style.css";

export const SocialComponent = () => {
  return (
    <section className="contact bg-primary" id="contact">
      <div className="container">
        <h2>
          Мы
          <i className="fa fa-heart"></i>
          новых друзей!
        </h2>
        <ul className="list-inline list-social">
          <li className="list-inline-item social-facebook">
            <a href="https://www.facebook.com/audiolitera/">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li className="list-inline-item social-vk">
            <a href="https://vk.com/mobileboo">
              <i className="fa fa-vk"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
