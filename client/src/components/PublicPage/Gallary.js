import React from "react";
import ReactFancyBox from "react-fancybox";
import "react-fancybox/lib/fancybox.css";

export default function Gallery() {
  const pic1 =
    "https://www.hdcarwallpapers.com/walls/mclaren_p1_supercars_4k-HD.jpg";
  const pic2 =
    "https://www.wsupercars.com/wallpapers/Porsche/2019-Porsche-911-GT3-RS-001-1080.jpg";
  const pic3 =
    "https://cdn.motor1.com/images/mgl/kPWbN/s1/mclaren-senna-victory-grey.jpg";
  const pic4 =
    "https://www.topgear.com/sites/default/files/styles/16x9_1858w/public/news-listicle/image/1_70.jpg?itok=J6JLQWWk";
  const pic5 =
    "https://robbreport.com/wp-content/uploads/2016/12/2017-lamborghini-aventador-s-011.jpg?w=1024";
  const pic6 =
    "https://cdn.motor1.com/images/mgl/vyjQb/s3/ferrari-488-pista-prova-sul-circuito-di-fiorano.jpg";

  return (
    <>
      <div className="project__title-wrap">
        <h1 className="project__title">Gallary</h1>
      </div>
      <section className="gallary">
        <div className="gallary-left">
          <div className="gallary-left-top">
            <div className="gallary-left-top-image">
              <ReactFancyBox
                className="gallary-image"
                thumbnail={pic3}
                image={pic3}
              />
            </div>
          </div>
          <div className="gallary-left-bottom">
            <div className="gallary-left-bottom-left-image">
              <ReactFancyBox
                className="gallary-image"
                thumbnail={pic2}
                image={pic2}
              />
            </div>
            <div className="gallary-left-bottom-right-image">
              <ReactFancyBox
                className="gallary-image"
                thumbnail={pic4}
                image={pic4}
              />
            </div>
          </div>
        </div>
        <div className="gallary-right">
          <div className="gallary-right-top">
            <div className="gallary-right-top-left-image">
              <ReactFancyBox
                className="gallary-image"
                thumbnail={pic5}
                image={pic5}
              />
            </div>
            <div className="gallary-right-top-right-image">
              <ReactFancyBox
                className="gallary-image"
                thumbnail={pic1}
                image={pic1}
              />
            </div>
          </div>
          <div className="gallary-right-bottom">
            <div className="gallary-right-bottom-image">
              <ReactFancyBox
                className="gallary-image"
                thumbnail={pic6}
                image={pic6}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
