import React from "react";
import "./style.css";

const itemLists = [
    { name: "Новости" },
    { name: "Статьи" },
    { name: "Интервью" },
    { name: "Блоги" },
    { name: "Рейтинги" },
    { name: "Каталоги" },
    { name: "Календарь" },
    { name: "Тренды года" },
]

const itemIcons = [
    { iconSvg: <ion-icon name="mail-open-outline"></ion-icon> },
    { iconSvg: <ion-icon name="logo-facebook"></ion-icon> },
    { iconSvg: <ion-icon name="logo-vk"></ion-icon> },
    { iconSvg: <ion-icon name="logo-twitter"></ion-icon> },
    { iconSvg: <ion-icon name="send-outline"></ion-icon> },
    { iconSvg: <ion-icon name="wifi-outline"></ion-icon> },
]

const Header = () => {
    return (
        <div className="wrapperHeader">
            <div className="headerBar">
                {itemLists.map(item => {
                    return <ul>
                        <li>{item.name}</li>
                    </ul>
                })}
                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" /><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M338.29 338.29L448 448" /></svg>
            </div>


            <div className="headerLogoTitle">
                <div className="newsTitle">
                    <span>seo</span>
                    <span>news</span>
                </div>
                <div className="itemIcons">
                    <div className="mainSvg">
                        {itemIcons.map(item => {
                            return <div class="svg-background">
                                {item.iconSvg}
                            </div>
                        })}
                    </div>
                </div>


                <div className="signIn">
                    <ion-icon name="log-in-outline"></ion-icon>
                    <button>Войти</button>
                </div>
            </div>
        </div >
    )
}

export default Header;