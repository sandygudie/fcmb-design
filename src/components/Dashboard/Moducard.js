import React from "react";
import Card from "./Card";

const Moducard = () => {
  return (
    <div className="modu-card">
      <div className="block-one">
        <div className="log">
          <h2>Modules</h2>
          <span>...</span>
        </div>

        <div class="allcard">
          <div className="cards">
            <div className="card-details">
              <p>Update Logo on all pages (HTML & CSS)</p>
              <span>...</span>
            </div>

            <div className="profile">
              <i className="far fa-clock pr-2"></i>
              <span>Due Aug 8</span>
              <div className="pics pl-4">
                <img src="images/Ellipse (1).png" alt="ellipse" />
                <img src="images/Ellipse (2).png" alt="ellipse" />
                <img src="images/Ellipse (3).png" alt="ellipse" />
                <img src="images/Ellipse(4).png" alt="ellipse" />
                <img src="images/Ellipse(5).png" alt="ellipse" />
              </div>
            </div>
          </div>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Moducard;
