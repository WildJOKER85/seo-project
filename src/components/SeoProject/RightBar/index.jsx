import React from "react";
import "./style.css";
import persIcon from "../../../assets/darya.jpg";
import persIcon2 from "../../../assets/anna.jpg";
import persIcon3 from "../../../assets/uifaces-alex.jpg";

const RightBar = () => {
    return (
        <div className="wrapperRightBar">
            <h1>Прямой Эфир</h1>
            <div className="personInfo">
                <img src={persIcon} alt="" />
                <div className="personName">
                    <p>Дарья Калинская</p>
                    <p>42 минуты назад</p>
                </div>
            </div>
            <p>Baltic Digital Days 2019: объявлены <br /> лауреаты премии за достижения в <br />
                интернет-маркентинге
            </p>
            <div className="shadowStyle">
                <p>Александр спасибо :) и за <br /> поздравление, и за поддержку!</p>
            </div>


            <div className="personInfo">
                <img src={persIcon2} alt="" />
                <div className="personName">
                    <p>Анна Макарова</p>
                    <p>42 минуты назад</p>
                </div>
            </div>
            <p id="balticDigital">Baltic Digital Days 2019: объявлены <br /> лауреаты премии за достижения в <br />
                интернет-маркентинге
            </p>
            <div className="shadowStyle">
                <p>Александр спасибо :) Очень <br /> приятно! </p>
            </div>

            <div className="personInfo">
                <img src={persIcon3} alt="" />
                <div className="personName">
                    <p>Александр Сопоев</p>
                    <p>50 минуты назад</p>
                </div>
            </div>
            <p id="balticDigital">Baltic Digital Days 2019: объявлены <br /> лауреаты премии за достижения в <br />
                интернет-маркентинге
            </p>

        </div>
    )
}

export default RightBar;