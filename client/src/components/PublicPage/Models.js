import React from "react";

export default function Models() {
  return (
    <section id="projects">
      <div className="project__title-wrap">
        <h1 className="project__title">Models</h1>
      </div>

      <div className="project-tile">
        <div className="project-tile-single">
          <a
            href="https://www.porsche.com/canada/en/models/911/"
            target="/blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.supercars.net/blog/wp-content/uploads/2018/11/2018-Porsche-911-GT2-RS-V1-1080.jpg"
              alt="porsche911"
            />

            <div className="project-tile-single-name">
              Porsche 911
              <span className="project-tile-single-name-ani">&gt;</span>
            </div>
          </a>
        </div>

        <div className="project-tile-single">
          <a
            href="https://www.ferrari.com/en-CA/auto/458-italia"
            target="/blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.supercars.net/blog/wp-content/uploads/2016/04/2012_Mansory_458SpiderMonacoEdition-0-1536.jpg"
              alt="458Italia"
            />

            <div className="project-tile-single-name">
              Ferrari 458 Italia
              <span className="project-tile-single-name-ani">&gt;</span>
            </div>
          </a>
        </div>
        <div className="project-tile-single">
          <a
            href="https://www.lamborghini.com/en-en/models/aventador"
            target="/blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://coolwallpapers.me/picsup/2628895-lamborghini-aventador-s-4k-best-hd-wallpaper-desktop.jpg"
              alt="aventador"
            />

            <div className="project-tile-single-name">
              Lamborghini Aventador
              <span className="project-tile-single-name-ani">&gt;</span>
            </div>
          </a>
        </div>
        <div className="project-tile-single">
          <a
            href="https://www.nissan.ca/vehicles/sports-cars/gt-r.html"
            target="/blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.mad4wheels.com/img/free-car-images/mobile/17444/nissan-gt-r-r35-nismo-2020-552029.jpg"
              alt="GTR"
            />

            <div className="project-tile-single-name">
              Nissan GTR
              <span className="project-tile-single-name-ani">&gt;</span>
            </div>
          </a>
        </div>
        <div className="project-tile-single">
          <a
            href="https://www.lotuscars.com/"
            target="/blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.bellandcolvill.co.uk/images/ww/car-media/Lotus/Exige%20Cup%20430/_resized/Lotus_Exige_Cup_430_10_1200_800_0_0_2000_1332.jpg"
              alt="lotus"
            />

            <div className="project-tile-single-name">
              Lotus Exige Cup 430
              <span className="project-tile-single-name-ani">&gt;</span>
            </div>
          </a>
        </div>
        <div className="project-tile-single">
          <a
            href="https://www.mclaren.com/"
            target="/blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.gta5-mods.com/q95/images/mclaren-p1-realistic-handling/66f681-2014-mclaren-p1-photo-617376-s-1280x782.jpg"
              alt="mclaren"
            />

            <div className="project-tile-single-name">
              Mclaren P1
              <span className="project-tile-single-name-ani">&gt;</span>
            </div>
          </a>
        </div>
      </div>
      <a className="project__showAlla" href="/vehicles">
        <div className="project__showAll">
          Show all
          <span className="project__showAll-b">{">"}</span>
        </div>
      </a>
    </section>
  );
}
