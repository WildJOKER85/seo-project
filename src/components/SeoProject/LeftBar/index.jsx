import React from "react";
import "./style.css";
import news from "../../../assets/news-prog.jpg";

const LeftBar = () => {
    return (
        <div className="wrapperLeftBar">
            <div className="leftBarTitle">
                <h1>Главное</h1>
                <div>
                    <p><span>Новости</span><span id="textClock">сегодня, в 11:42</span></p>
                    <p>Google рассказал о новых функциях Ads API v2_1</p>
                </div>
                <div>
                    <p><span>Новости</span><span id="textClock">сегодня, в 11:11</span></p>
                    <p>Baltik Digital Days 2019: объявлены лауреаты премии <br />
                        за достижения в интеренет-маркетинге
                    </p>
                </div>
                <div>
                    <p><span>Новости</span><span id="textClock">сегодня, в 11:03</span></p>
                    <p>Google устранил баг с индексацией</p>
                </div>
                <div>
                    <p><span id="bgColorLastChild">Статьи</span><span id="textClock">вчера, в 11:42</span></p>
                    <p>Планы на неделю: учимся продвигать бренды, <br />
                        проводить A/B-тестирование и не только
                    </p>
                </div>
            </div>
            <div className="leftBarFutter">
                <div className="media">
                    <img src={news} alt="" />
                </div>
                <div className="futterTitle">
                    <p className="firstLine">Новости</p>
                    <p className="secondLine">Вы точно ничего не <br /> пропустили?</p>
                    <p className="lastLine">Сертифицированные партнеры <br />Яндкс.Толоки.Лучшие места Google <br />
                        и новое видение оценки качества <br /> поиска
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LeftBar;