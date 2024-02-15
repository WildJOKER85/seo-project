import React from "react";
import "./style.css";
import news from "../../../assets/news-prog.jpg";

const textItems = [
    { text: "Новости", clock: "сегодня, в 11:42", update: "Google рассказал о новых функциях Ads API v2_1" },
    { text: "Новости", clock: "сегодня, в 11:11", update: "Baltik Digital Days 2019: объявлены лауреаты премии за достижения в интеренет-маркетинге" },
    { text: "Новости", clock: "сегодня, в 11:03", update: "Google устранил баг с индексацией" },
    { text: "Статьи", clock: "вчера, в 11:42", update: "Планы на неделю: учимся продвигать бренды, роводить A/B-тестирование и не только" },
]

const LeftBar = () => {
    return (
        <div className="wrapperLeftBar">
            <div className="leftBarTitle">
                <h1>Главное</h1>
                <div>
                    {textItems.map(item => {
                        let updateText = item.update.replace('бренды,', 'бренды, <br />');
                        updateText = updateText.replace('премии', 'премии <br />');

                        if (item.text === "Статьи") {
                            return (
                                <div>
                                    <p><span id="blueText">{item.text}</span><span id="textClock">{item.clock}</span></p>
                                    <p dangerouslySetInnerHTML={{ __html: updateText }} />
                                </div>
                            )
                        }
                        return (
                            <div>
                                <p><span>{item.text}</span><span id="textClock">{item.clock}</span></p>
                                <p dangerouslySetInnerHTML={{ __html: updateText }} />
                            </div>
                        )
                    })}
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