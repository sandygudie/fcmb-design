import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navigation">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light navigation pt-4 pb-3 ">
          <ul className="navbar-nav nav1  mt-2 mt-lg-0">
            <li className="nav-item item1 px-3">
              <img src="images/menu.png" alt=" meun" />
            </li>
            <li className="nav-item  item2 px-4">
              <img src="images/Group 3110.png" alt=" fcmb" />
            </li>
            <li className="nav-item  item3 px-3">
              <img src="images/lineicon.png" alt=" line" />
            </li>
            <li className="nav-item  item4 px-4">
              <img src="images/Group 6.png" alt=" search" />
            </li>
          </ul>
          <ul className="navbar-nav nav2 ml-auto pt-2 mt-2">
            <li className="nav-item  item5 px-3">
              <img src="images/Group 13.png" alt=" meun" />
            </li>
            <li className="nav-item item6 px-3">
              <img src="images/owner.png" alt=" meun" />
            </li>
            <li className="nav-item  item7 px-3">
              <img src="images/Group 3.png" alt=" img" />
            </li>
            <li className="nav-item item8 px-3">
              <img class="face-img" src="images/face.png" alt=" img" />
            </li>
            <li className="position-relative item9 nav-item px-3">
              <p>Chioma Davis</p>
              <a className="email " href="#">
                Chioma@natterbase
              </a>
            </li>
            <li className="nav-item px-3">
              <img src="images/drop arrow.png" alt=" drop" />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
