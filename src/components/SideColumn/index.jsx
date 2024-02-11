import React from "react";
import classes from "../SideColumn/style.module.css";
import Covid19 from "../../assets/image.png";
import Image2 from "../../assets/image2.png";
import Image3 from "../../assets/image3.png";
import Uiface2 from "../../assets/uiface-image2.jpg";
import Uiface3 from "../../assets/uiface-image3.jpg";

const SideColumn = () => {
    return (
        <div className={classes.side__column}>
            <div className={classes.search__bar}>
                <div className={classes.dark__theme}>
                    <div className={classes.group}>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.0446 15.2054L13.1471 12.3079C14.1961 11.065 14.8333 9.46109 14.8333 7.70834C14.8333 3.77376 11.6429 0.583344 7.70834 0.583344C3.77376 0.583344 0.583344 3.77376 0.583344 7.70834C0.583344 11.6429 3.77376 14.8333 7.70834 14.8333C9.46189 14.8333 11.065 14.1968 12.3063 13.1471L15.2038 16.0446C15.3202 16.1602 15.473 16.2188 15.6234 16.2188C15.7738 16.2188 15.9282 16.161 16.043 16.0446C16.2766 15.8126 16.2766 15.4374 16.0446 15.2054ZM1.77084 7.70834C1.77084 4.4348 4.4348 1.77084 7.70834 1.77084C10.9819 1.77084 13.6458 4.4348 13.6458 7.70834C13.6458 10.9819 10.9819 13.6458 7.70834 13.6458C4.4348 13.6458 1.77084 10.9819 1.77084 7.70834Z" fill="#5B7083" />
                        </svg>
                    </div>

                </div>
                <p>Search Twitter</p>
            </div>
            <div className={classes.news__contain}>
                <div className={classes.news__header}>
                    <div className={classes.header__text}>
                        <p>What’s happening</p>
                    </div>
                </div>

                {/* block news */}

                <div className={classes.news__block}>
                    <div className={classes.text__block}>
                        <div className={classes.top__text}>
                            <p>COVID19 · Last night</p>
                        </div>
                        <div className={classes.middle__text}>
                            <p>England’s Chief Medical Officer says the UK is at the most dangerous time of the pandemic</p>
                        </div>
                        <div className={classes.bot__text}>
                            <span>Trending with </span>
                            <span>#covid19</span>
                        </div>
                    </div>
                    <div className={classes.media__block}>
                        <img src={Covid19} alt="" />
                    </div>
                </div>

                <div className={classes.divider}>
                </div>

                <div className={classes.news__block}>
                    <div className={classes.text__block}>
                        <div className={classes.top__text__two}>
                            <span>US news</span>
                            <span> · </span>
                            <span>4h ago</span>
                        </div>
                        <div className={classes.middle__text}>
                            <p>Parler may go offline following suspensions by Amazon, Apple and Google</p>
                        </div>
                        <div className={classes.bot__text}>
                            <span>Trending with </span>
                            <span>#trump</span>
                        </div>
                    </div>
                    <div className={classes.media__block}>
                        <img src={Image2} alt="" />
                    </div>
                </div>

                <div className={classes.divider}>
                </div>

                <div className={classes.news__block}>
                    <div className={classes.text__block}>
                        <div className={classes.top__text}>
                            <span>India</span>
                            <span> · </span>
                            <span>1h ago</span>
                        </div>
                        <div className={classes.middle__text}>
                            <p>India vs Australia: India hold on to earn a draw on Day 5 in Sydney Test</p>
                        </div>
                        <div className={classes.bot__text}>
                            <span>Trending with </span>
                            <span>#sport</span>
                        </div>
                    </div>
                    <div className={classes.media__block}>
                        <img src={Image3} alt="" />
                    </div>
                </div>

                <div className={classes.divider}>
                </div>

                <div className={classes.show__thread}>
                    <p>Show More</p>
                </div>
            </div>

            {/* block Follow */}

            <div className={classes.follow}>
                <div className={classes.follow__header}>
                    <p>Who to follow</p>
                </div>
                <div className={classes.divider}>
                </div>

                <div className={classes.profile__one}>
                    <div className={classes.avatar__medium}>
                        <img src={Uiface2} alt="" />
                    </div>
                    <div className={classes.profile__info}>
                        <p>Bessie Cooper</p>
                        <p>@alessandroveronezi</p>
                    </div>
                    <div className={classes.button__follow}>
                        <p>Follow</p>
                    </div>
                </div>
                <div className={classes.divider}>
                </div>
                <div className={classes.profile__one}>
                    <div className={classes.avatar__medium}>
                        <img src={Uiface3} alt="" />
                    </div>
                    <div className={classes.profile__info}>
                        <p>Bessie Cooper</p>
                        <p>@alessandroveronezi</p>
                    </div>
                    <div className={classes.button__follow}>
                        <p>Follow</p>
                    </div>
                </div>
                <div className={classes.divider}>
                </div>
                <div className={classes.show__thread}>
                    <p>Show More</p>
                </div>
                <div className={classes.terms__of__servicet__text}>
                    <p>Terms of Service Privacy Policy Cookie Policy
                        Ads info More © 2021 Twitter, Inc.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SideColumn;