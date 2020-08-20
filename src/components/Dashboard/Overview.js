import React from "react";



const Overview = () => {
  return (
    // <Router>

    <div className="overview">
      <div className="all-block">
        <div className="log">
          <h2>Modules</h2>
          <span>...</span>
        </div>

        <div class="allcard">

        
          <div className="tmodule">
              <img src="images/bag.png" alt="bag"/>
              <span>20</span>
              <p>Total Modules</p>

          </div>
          <div className="timprove">
              <img src="images/bag.png" alt="bag"/>
              <span>20</span>
              <p>Improvement</p>

          </div>
          <div className="tmodule-test">
              <img src="images/bag.png" alt="bag"/>
              <span>20</span>
              <p>Total Modules test</p>

          </div>
          <div className="tfailed">
              <img src="images/bag.png" alt="bag"/>
              <span>14</span>
              <p>Total Failed</p>

          </div>
          <div className="tpassed">
              <img src="images/bag.png" alt="bag"/>
              <span>20</span>
              <p>Total Passed</p>

          </div>
          <div className="untested">
              <img src="images/bag.png" alt="bag"/>
              <span>20</span>
              <p>Total Untested</p>

          </div>

       
        </div>
      </div>
    </div>
  );
};

export default Overview;
