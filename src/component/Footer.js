import React from 'react'
import logo from "../img/download.svg"

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="head-footer">
                    <img src={logo} alt="" />
                    <div className="cont">
                        <h1>Saytin xeritesi</h1>

                        <div>
                            <ul>
                                <a href="">ANA SƏHİFƏ</a>
                            </ul>
                            <ul>
                                <a href="">Haqqimizda</a>
                                <li><a href="">Mətbəx</a></li>
                                <li><a href="">Tədbir təşkili</a></li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <a href="">Menyu</a>
                                <li><a href="">Salatlar</a></li>
                                <li><a href="">Qəlyanaltilar</a></li>
                                <li><a href="">Birinci xörəklər</a></li>
                                <li><a href="">Ikinci xörəklər</a></li>
                                <li><a href="">Şirniyyat</a></li>
                                <li><a href="">Yapon mətbəxi</a></li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <a href="">Qalereya</a>
                                <li><a href="">Video intro</a></li>
                                <li><a href="">Şəkillər</a></li>
                            </ul>
                            <ul>
                                <a href="">Elaqe</a>
                                <li><a href="">Əlaqə forması</a></li>
                                <li><a href="">Google map</a></li>
                            </ul>
                        </div>



                    </div>
                </div>
                <div className="foot">
                    <div>
                        <i class="far fa-phone-volume"></i>
                        <span>
                            +994 50 361-54-04 <br />
                            +994 12 404-54-04
                       </span>
                    </div>

                    <div>
                        <i class="fas fa-map-marked-alt"></i>
                        <span className="s2">
                            Bakıxanov küçəsi 24 <br />
                            Bridge Plaza, 3-cü mərtəbə
                       </span>
                    </div>
                    <div className="icon-footer">
                        <a href=""><i class="fab fa-facebook-f"></i></a>
                        <a href=""><i class="fab fa-tripadvisor"></i></a>
                        <a href=""><i class="fab fa-foursquare"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
