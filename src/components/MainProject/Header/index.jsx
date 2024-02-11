import React from "react";
import "./style.css";
import circleicon from "../../../assets/circle.png";

const Header = () => {
    return (
        <div className="header">
            <div className="logoTitle">
                <img src={circleicon} alt="" />
                <span>Circle</span>
            </div>
            <div className="headerMenu">
                <span>About</span>
                <span>Program</span>
                <span>Courses</span>
                <span>Reviews</span>
            </div>
            <div className="searchSignInButton">
                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" /><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M338.29 338.29L448 448" /></svg>
                <button className="signInButton"><p>Sign in</p></button>
            </div>
        </div>
    )
}

export default Header;