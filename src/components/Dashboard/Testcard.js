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
        // <Router>

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
        // <Router>

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

// ///////
// import React from "react";
// import Card from "./Card";

// const Moducard = () => {
//   return (
//     <div className="modu-card">
//       <div className="block-one">
//         <div className="log">
//           <h2>Modules</h2>
//           <span>...</span>
//         </div>

//         <div class="allcard">
//           <div className="cards">
//             <div className="card-details">
//               <p>Update Logo on all pages (HTML & CSS)</p>
//               <span>...</span>
//             </div>

//             <div className="profile">
//               <i className="far fa-clock pr-2"></i>
//               <span>Due Aug 8</span>
//               <div className="pics pl-4">
//                 <img src="images/Ellipse (1).png" alt="ellipse" />
//                 <img src="images/Ellipse (2).png" alt="ellipse" />
//                 <img src="images/Ellipse (3).png" alt="ellipse" />
//                 <img src="images/Ellipse(4).png" alt="ellipse" />
//                 <img src="images/Ellipse(5).png" alt="ellipse" />
//               </div>
//             </div>
//           </div>
//           <Card />
//           <Card />
//           <Card />
//           <Card />
//           <Card />
//           <Card />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Moducard;
