import React from "react";
import "./style.css";
import Header from "./Header";
import Sidebar from "./SideBar";
import SideBarMedia from "./SideBarMedia";

const MainProject = () => {
    return (
        <div className="container">
            <Header />
            <Sidebar />
            <SideBarMedia />
        </div>
    )
}

export default MainProject;