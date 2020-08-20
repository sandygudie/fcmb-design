import React from "react";
import Moducard from "./Moducard";
import List from "./List";
// import Button1 from './Button1';
// import Button2 from './Button2';
// import Button3 from './Button3';

const PassButton1 = () => {
  return (
    // <Router>

    <div className="button1">
      <p>Make the background image blur</p>
      <button className="btn-green">
        {" "}
        Pass<i class="fas fa-chevron-down"></i>
      </button>
    </div>
  );
};

const FailButton2 = () => {
  return (
    <div className="button2">
      <p>Make the background image blur</p>
      <button className="btn-pink">
        {" "}
        Failed<i class="fas fa-chevron-down"></i>
      </button>
    </div>
  );
};
const RetestButton3 = () => {
  return (
    <div className="button3">
      <p>Apply gredient colours on the navigation</p>
      <button className="btn-orange">
        {" "}
        Retest<i class="fas fa-chevron-down"></i>
      </button>
    </div>
  );
};

const Testcard = () => {
  return (
    // <Router>

    <div className="testcard">
      <div className="block-one">
        <div className="log">
          <h2>Modules</h2>
          <span>...</span>
        </div>

        <div class="allcard">
          <PassButton1 />
          <RetestButton3 />
          <FailButton2 />
          <RetestButton3 />
          <PassButton1 />
          <FailButton2 />
          <RetestButton3 />
          <PassButton1 />

          <div class="cases-btn">
            <button className="newtest-btn">New Test Cases</button>
            <button className="test-btn"> Test</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testcard;
