import React from "react";
import "./style.css";
import googlePlayBadge from "./img/google-play-badge.svg";
import appStoreBadge from "./img/app-store-badge.svg";

export const AppDownloadComponent = () => {
  return (
    <section className="download bg-primary text-center" id="download">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h2 className="section-heading">
              Слушать книги — современный способ чтения.
            </h2>
            <p>
              Загрузите приложение на свой смартфон или планшет и cлушайте
              тысячи аудиокниг бесплатно 7 дней!
            </p>
            <div className="badges">
              <a
                className="badge-link"
                href="https://play.google.com/store/apps/details?id=ru.eyescream.audiolitera"
              >
                <img src={googlePlayBadge} alt="" />
              </a>
              <a
                className="badge-link"
                href="https://apps.apple.com/app/id1219288168"
              >
                <img src={appStoreBadge} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
