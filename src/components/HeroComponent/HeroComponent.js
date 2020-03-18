import React from "react";
import "./style.css";
import demoScreen1 from "../../img/listenbooks-5.png";

export const HeroComponent = () => {
  return (
    <header className="masthead">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-7 my-auto">
            <div className="header-content mx-auto">
              <h1 className="mb-5">
                <span>
                  Приложение{" "}
                  <a href="http://audiolitera.ru/inapp/content/">
                    «Слушать книги»
                  </a>{" "}
                </span>{" "}
                это современная, регулярно пополняемая библиотека аудиокниг.
                Лучшие аудиокниги деловой и художественной литературы. 7000
                произведений. Доступно на платформах <br></br>
                <a href="https://apps.apple.com/ru/app/id1219288168"> iOS</a> и
                <a href="https://play.google.com/store/apps/details?id=ru.eyescream.audiolitera">
                  {" "}
                  Android
                </a>
              </h1>
              <a
                href="http://audiolitera.ru/inapp/content/"
                className="btn btn-outline btn-xl js-scroll-trigger"
              >
                Слушать бесплатно!
              </a>
            </div>
          </div>
          <div className="col-lg-5 my-auto">
            <div className="device-container">
              <div className="device">
                <div className="screen">
                  <img src={demoScreen1} className="img-screen-1" alt="" />
                </div>
                <div className="button"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
