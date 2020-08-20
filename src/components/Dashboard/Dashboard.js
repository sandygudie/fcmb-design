import React from "react";
import Moducard from "./Moducard";
import List from "./List";
import Overview from "./Overview";
import Testcard from "./Testcard";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="allcontainer">
        <List />

        <div className="board">
          <div className="label">
            <Moducard />
          </div>

          <div className="label">
            <Testcard />
          </div>

          <div className="label">
            <Overview />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
