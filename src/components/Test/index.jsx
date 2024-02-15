import React from "react";
import "./style.css";
import image from "../../assets/image.jpg";

const Test = () => {
    return (
        <div className="wrapper">
            <div className="content">
                <div className="hi">
                    <div className="container">
                        <div className="hi__row">
                            <div className="hi__body">
                                <div className="hi__title"></div>
                                <ul className="hi__list">
                                    <li>У тебя все получится!</li>
                                    <li>Никогда не здавайся!</li>
                                    <li>Сегодня ты уже знаешь больше чем вчера!</li>
                                    <li>Спасибо тебе за поддержку!</li>
                                </ul>
                            </div>
                            <div className="hi__image">
                                <img src={image} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <futter className="footer">
                <div className="container">
                    <div className="footer__row">
                        <div className="footer__text">Фрилансер по жизни 2019</div>
                    </div>
                </div>
            </futter>
        </div>
    )
}

export default Test;