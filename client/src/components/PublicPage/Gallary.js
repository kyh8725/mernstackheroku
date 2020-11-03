import React from "react";
import ModalImage from "react-modal-image";

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
              <ModalImage
                className="small-img"
                small="/pic3.jpg"
                large="/pic3.jpg"
                alt="pic3"
              />
            </div>
          </div>
          <div className="gallary-left-bottom">
            <div className="gallary-left-bottom-left-image">
              <ModalImage
                className="small-img"
                small="/pic2.jpg"
                large="/pic2.jpg"
                alt="pic2"
              />
            </div>
            <div className="gallary-left-bottom-right-image">
              <ModalImage
                className="small-img"
                small="/pic4.jpg"
                large="/pic4.jpg"
                alt="pic4"
              />
            </div>
          </div>
        </div>
        <div className="gallary-right">
          <div className="gallary-right-top">
            <div className="gallary-right-top-left-image">
              <ModalImage
                className="small-img"
                small="/pic5.jpg"
                large="/pic5.jpg"
                alt="pic5"
              />
            </div>
            <div className="gallary-right-top-right-image">
              <ModalImage
                className="small-img"
                small="/pic1.jpg"
                large="/pic1.jpg"
                alt="pic1"
              />
            </div>
          </div>
          <div className="gallary-right-bottom">
            <div className="gallary-right-bottom-image">
              <ModalImage
                className="small-img"
                small="/pic6.jpg"
                large="/pic6.jpg"
                alt="pic6"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
