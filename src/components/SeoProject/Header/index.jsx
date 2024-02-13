import React from "react";
import "./style.css";

const Header = () => {
    return (
        <div className="wrapperHeader">
            <div className="headerBar">
                <ul>
                    <li>Новости</li>
                    <li>Статьи</li>
                    <li>Интервью</li>
                    <li>Блоги</li>
                    <li>Рейтинги</li>
                    <li>Каталоги</li>
                    <li>Календарь</li>
                    <li>Тренды года</li>
                </ul>
                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" /><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M338.29 338.29L448 448" /></svg>
            </div>


            <div className="headerLogoTitle">
                <div className="newsTitle">
                    <span>seo</span>
                    <span>news</span>
                </div>
                <div className="itemIcons">
                    <div className="mainSvg">
                        <div class="svg-background">
                            <ion-icon name="mail-open-outline"></ion-icon>
                        </div>
                        <div class="svg-background">
                            <ion-icon name="logo-facebook"></ion-icon>
                        </div>
                        <div class="svg-background">
                            <ion-icon name="logo-vk"></ion-icon>
                        </div>
                        <div class="svg-background">
                            <ion-icon name="logo-twitter"></ion-icon>
                        </div>
                        <div class="svg-background">
                            <ion-icon name="send-outline"></ion-icon>
                        </div>
                        <div class="svg-background">
                            <ion-icon name="wifi-outline"></ion-icon>
                        </div>
                    </div>
                </div>


                <div className="signIn">
                    <ion-icon name="log-in-outline"></ion-icon>
                    <button>Войти</button>
                </div>
            </div>
        </div>
    )
}

export default Header;