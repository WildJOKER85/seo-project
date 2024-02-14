import React from "react";
import "./style.css";
import presentSeo from "../../../assets/14-magnta-trade.jpg";
import texrobot from "../../../assets/texno-robot.jpeg";

const Aside = () => {
    return (
        <div className="wrapperAside">
            <div className="asideMedia">
                <img src={presentSeo} alt="" />
            </div>

            <p>День рождения SEOnews: нам 14 <br />лет!</p>

            <div className="asideFutter">
                <div className="mediaRobot">
                    <img src={texrobot} alt="" />
                </div>
                <div className="futterAsideTitle">
                    <p id="firstAsideLine">Новости</p>
                    <p id="secondAsideLine">Технодайджест: летающие <br />автомобили и беспилотные <br />
                        автобусы
                    </p>
                    <p id="threeLine">Кажется, мы уже в будущем</p>
                    <div className="futterLine">
                        <span>2 дня назад</span>
                        <ion-icon name="eye-outline"></ion-icon> <span>3066</span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Aside;