import React from "react";
import "./style.css";

const Sidebar = () => {
    return (
        <div className="sideBarWrapper">
            <div className="sideBarTitle">
                <h1>Your next big idea starts here</h1>
                <p>The ideal framework to learn how to manage all aspects of startup.</p>
                <button className="startButton"><span>Start for free</span></button>
            </div>
        </div>
    )
}

export default Sidebar;