import React from "react";
import "./style.css";
import "simple-line-icons/css/simple-line-icons.css";
import demoScreen2 from "../../img/listenbooks-6.png";
export const FeaturesComponent = () => {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-heading text-center">
          <h2>Попробуй корпоративную библиотеку бесплатно!</h2>
          <p className="text-muted">
            Напиши нам на{" "}
            <a
              href="support@audiolitera.ru"
              subject="Хочу попробовать корпоративную библиотеку"
            >
              support@audiolitera.ru
            </a>{" "}
            и мы вышлем вам демо доступ корпоративного режима
          </p>
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-4 my-auto">
            <div className="device-container">
              <div className="device-mockup iphone6_plus portrait white">
                <div className="device">
                  <div className="screen">
                    <img src={demoScreen2} className="screen-img-2" alt="" />
                  </div>
                  <div className="button"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 my-auto">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="fa fa-level-up"></i>
                    <h3>Развитие</h3>
                    <p className="text-muted">
                      Бизнес-книги помогут сотрудникам работать эффективнее, а
                      художественные будут развивать разнопланово и мотивировать
                      на новые свершения
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="fa fa-heartbeat"></i>
                    <h3>Лояльность</h3>
                    <p className="text-muted">
                      Сотрудники оценят вашу заботу и возможность развиваться
                      как в профессиональном, так и в личном плане. Аудиокниги
                      помогают в обоих случаях.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="fa fa-credit-card"></i>
                    <h3>Экономия</h3>
                    <p className="text-muted">
                      Рассмотрите альтернативу дорогостоящим корпоративным
                      тренингам и стандартным подарочным наборам календарей и
                      кружек. Общие темы, обсуждения будут ценнее.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="fa fa-users"></i>
                    <h3>На всех</h3>
                    <p className="text-muted">
                      Для компании из 100 человек стоимость годовой подписки для
                      каждого сотрудника будет сравнима со стоимостью одной
                      хорошей печатной книги.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
