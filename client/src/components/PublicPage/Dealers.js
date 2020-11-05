import React from "react";
import GoogleMap from "./GoogleMap";

export default function Dealers() {
  return (
    <section className="dealer">
      <div className="dealer__map">
        <p className="dealer__constr"> UNDER CONSTRUCTION</p>
        <GoogleMap />
      </div>
      <div className="dealer__list"></div>
    </section>
  );
}
