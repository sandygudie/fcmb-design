import React from "react";

const SideNavbar = () => {
  return (
    <div className="SideNavbar">
      <div className="text-center sidenav py-4">
        <div className=" icons">
          <img src="images/Group 17.png" alt="image" />
        </div>

        <div className=" hr"></div>

        <div className="py-2 vector">
          <a href="#" className="pb-4">
            <img src="images/link.png" alt="image" />
          </a>
          <a href="#" className="pb-4">
            <img src="images/faceicon.png" alt="image" />
          </a>
          <a href="#" className="pb-4">
            <img src="images/boardicon.png" alt="image" />
          </a>
        </div>

        <div className=" my-3 hr"></div>

        <div className="py-2 vectorgroup">
          <a href="#" className="py-2">
            <img src="images/Group 2818.png" alt="image" />
          </a>
          <a href="#" className="py-2">
            <img src="images/Group 2819.png" alt="image" />
          </a>
          <a href="#" className="py-2">
            <img src="images/Group 2820.png" alt="image" />
          </a>
          <a href="#" className="py-2">
            <img src="images/Group 2821.png" alt="image" />
          </a>
          <a href="#" className="py-2">
            <img src="images/Group 2822.png" alt="image" />
          </a>
        </div>

        <div className=" my-3 hr"></div>

        <div className="arrow-right ">
          <a href="#">
            <img src="images/Group 20.png" alt="image" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
