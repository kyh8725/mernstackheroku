import React from "react";

export default function Warranty() {
  return (
    <div className="warranty">
      <h2 className="warranty__title">VEHICLE WARRANTY</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
        possimus hic repellat libero commodi veritatis consequatur maiores
        aperiam, assumenda dolorum, quod minima odit esse, dolore obcaecati id.
        Assumenda, provident obcaecati. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Eveniet possimus hic repellat libero commodi veritatis
        consequatur maiores aperiam, assumenda dolorum, quod minima odit esse,
        dolore obcaecati id. Assumenda, provident obcaecati.
      </p>
      <br></br>
      <h4>STANDARD WARRANTY COVERAGE FOR NEW VEHICLES</h4>
      <br></br>
      <div className="warranty__detail">
        <div className="warranty__detail-first">
          <p className="warranty__detail-head">Power Train</p>
          <p className="warranty__detail-desc">5 years / 100,000km</p>
          <p className="warranty__detail-head">Accessories</p>
          <p className="warranty__detail-desc">3 years / 60,000km</p>
          <p className="warranty__detail-head">Emission Systems</p>
          <p>8 years / 130,000km</p>
        </div>
        <div className="warranty__detail-second">
          <p className="warranty__detail-head">Distributor's Warranty</p>
          <p className="warranty__detail-desc">3 years / 60,000km</p>
          <p className="warranty__detail-head">Rust Perforation</p>
          <p className="warranty__detail-desc">5 years / No Distance Limit</p>
          <p className="warranty__detail-head">Roadside Assistance</p>
          <p className="warranty__detail-desc">3 years / No Distance Limit</p>
          <p className="warranty__detail-head">Audio components</p>
          <p className="warranty__detail-desc">3 years / 60,000km</p>
        </div>
        <div className="warranty__detail-third">
          <p className="warranty__detail-head">Emission Systems</p>
          <p className="warranty__detail-desc">3 years / 60,000km</p>
          <p className="warranty__detail-head">Surface Corrosion</p>
          <p className="warranty__detail-desc">3 years / No Distance Limit</p>
          <p className="warranty__detail-head">Battery</p>
          <p className="warranty__detail-desc">3 years / No Distance Limit</p>
          <p className="warranty__detail-head">
            Integrated Motor Assist System
          </p>
          <p className="warranty__detail-desc">8 years / 160,000km</p>
        </div>
      </div>
    </div>
  );
}
