
import React from "react";

import {Link} from 'react-router-dom';

const List= () => {
	return (
		<div className="list">
	
				
					<nav className=" navigation py-1 px-1">
				
						{/* <div
							className="collapse navbar-collapse"
							id="collapsibleNavId"
						> */}
							<ul className=" work1 ">
								
								<li >
                                <Link to = "#" className = "link p">Overview</Link>
								</li>
                                <li >
                                <Link to = "#" className = "link">Teams</Link>
								</li>
                                <li>
                                <Link to = "#" className = "link">Test</Link>
								</li>
                                <li >
                                <Link to = "#" className = "link">Files</Link>
								</li>
                                <li >
                                <Link to = "#" className = "link">Progress</Link>
								</li>
							</ul>

                            <div className="work mt-2 mt-lg-0 ">

								<div className="item pb-3 px-2">
									<p>All Tasks</p>
								</div>
								
								<div className="toggle pb-3 px-2">
								<label class="switch">
  								<input type="checkbox"/>
 								 <span class="slider round"></span>
								</label>
								</div>

								<div className="all pb-3 px-3 pl-1">
								All Modules
								</div>

								<div className="menu pb-3 px-3">
								<i className="far fa-clock pr-2"></i>
									<span>Project Deadline :</span>
									<span>6 weeks</span>
								</div>
							</div>

								

                               
							<div className="hl"></div>
					</nav>
					
			
		</div>
	);
};

export default List;
