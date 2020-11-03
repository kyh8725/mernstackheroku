import React from "react";

export default function Hero() {
  return (
    <section
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <a
            href="https://www.porsche.com/canada/en/models/911/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="d-block w-100" src="/porsche.jpg" alt="porsche" />
            <a
              className="porsche-hover"
              href="https://www.porsche.com/canada/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="vehicle-make">
                <strong> Porsche</strong>
              </div>
            </a>
            <a
              className="porsche-hover"
              href="https://www.porsche.com/canada/en/models/911/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="vehicle-porsche">
                <strong> 911</strong>
              </div>
            </a>
          </a>
        </div>
        <div className="carousel-item">
          <a
            href="https://www.ferrari.com/en-CA/auto/458-italia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="d-block w-100" src="/ferrari.jpg" alt="ferrari" />
            <a
              className="ferrari-hover"
              href="https://www.ferrari.com/en-EN"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="vehicle-make">
                <strong> Ferrari</strong>
              </p>
            </a>
            <a
              className="ferrari-hover"
              href="https://www.ferrari.com/en-CA/auto/458-italia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="vehicle-ferrari">
                <strong> 458 Italia</strong>
              </p>
            </a>
          </a>
        </div>
        <div className="carousel-item">
          <a
            href="https://www.lamborghini.com/en-en/models/aventador"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="d-block w-100"
              src="/lamborghini.jpg"
              alt="lamborghini"
            />
            <a
              className="lambo-hover"
              href="https://www.lamborghini.com/en-en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="vehicle-lambo">
                <strong> Lamborghini</strong>
              </p>
            </a>
            <a
              className="lambo-hover"
              href="https://www.lamborghini.com/en-en/models/aventador"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="vehicle-lambo2">
                <strong>Aventador </strong>
              </p>
            </a>
          </a>
        </div>
        <div className="carousel-item">
          <a
            href="https://www.mclaren.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="d-block w-100" src="/mclaren.jpg" alt="mclaren" />
            <a
              className="mclaren-hover"
              href="https://www.mclaren.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="vehicle-mclaren">
                <strong> Mclaren</strong>
              </p>
            </a>
            <a
              className="mclaren-hover"
              href="https://www.mclaren.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="vehicle-p1">
                <strong> P1</strong>
              </p>
            </a>
          </a>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </section>
  );
}
