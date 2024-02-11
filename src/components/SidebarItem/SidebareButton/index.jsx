import React from "react";
import classes from "../SidebareButton/style.module.css"

const SidebareButton = () => {
    return (
        <div className={classes.myBtn}>
            <button className={classes.btn}>Tweet</button>
        </div>
    )
}

export default SidebareButton;