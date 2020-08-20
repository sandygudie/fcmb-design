import React from "react";
import Moducard from "./Moducard";
import List from "./List";
import Overview from './Overview';
import Testcard from './Testcard';

const Dashboard = () => {
  return (
    // <Router>

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
{/* 
          <div className="label">
            <Done />
          </div>

          <div className="label">
            <Done />
          </div>

          <div className="label">
            <Done />
          </div>
          
          <div className="add">
        <img src="images/add.png" alt="add"/>
          </div> */}

        </div> 
      </div>
       {/* <Message/> */}
    </div>
  );
};

export default Dashboard;
