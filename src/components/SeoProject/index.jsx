import React from "react";
import "./style.css";
import Header from "./Header";
import LeftBar from "./LeftBar";
import Aside from "./Aside";
import RightBar from "./RightBar";

const SeoProject = () => {
    return (
        <div className="container">
            <Header />
            <LeftBar />
            <Aside />
            <RightBar />
        </div>
    )
}

export default SeoProject;