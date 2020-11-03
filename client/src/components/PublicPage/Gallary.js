import React from "react";
import ReactFancyBox from "react-fancybox";
import "react-fancybox/lib/fancybox.css";

export default function Gallery() {
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
                thumbnail="/pic3.jpg"
                image="/pic3.jpg"
              />
            </div>
          </div>
          <div className="gallary-left-bottom">
            <div className="gallary-left-bottom-left-image">
              <ReactFancyBox
                className="gallary-image"
                thumbnail="/pic2.jpg"
                image="/pic2.jpg"
              />
            </div>
            <div className="gallary-left-bottom-right-image">
              <ReactFancyBox
                className="gallary-image"
                thumbnail="/pic4.jpg"
                image="/pic4.jpg"
              />
            </div>
          </div>
        </div>
        <div className="gallary-right">
          <div className="gallary-right-top">
            <div className="gallary-right-top-left-image">
              <ReactFancyBox
                className="gallary-image"
                thumbnail="/pic5.jpg"
                image="/pic5.jpg"
              />
            </div>
            <div className="gallary-right-top-right-image">
              <ReactFancyBox
                className="gallary-image"
                thumbnail="/pic1.jpg"
                image="/pic1.jpg"
              />
            </div>
          </div>
          <div className="gallary-right-bottom">
            <div className="gallary-right-bottom-image">
              <ReactFancyBox
                className="gallary-image"
                thumbnail="/pic6.jpg"
                image="/pic6.jpg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
