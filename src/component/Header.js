import React from 'react'
import "../style/App.scss"
import logo from "../img/download.svg"
import ulLogo from "../img/download.png"
import { Link, NavLink } from 'react-router-dom'
const Header = () => {
    return (
        <>
            <input type="checkbox" name="check" id="check" />
            <ul className="side" style={{ backgroundImage: `url(${ulLogo})` }}>
                <h2>Ana Sehife</h2>
                <ul>
                    <h2>Haqqimizda</h2>
                    <li><a href="">Metbex</a></li>
                    <li><a href="">Tedbir teskili</a></li>
                </ul>
                <ul>
                    <h2>Menyu</h2>
                    <li><a href="">Salatlar</a></li>
                    <li><a href="">Qelyanaltilar</a></li>
                    <li><a href="">Birinci xorekler</a></li>
                    <li><a href="">Ikinci xorekler</a></li>
                    <li><a href="">Sirniyyat</a></li>
                    <li><a href="">Yapon metbexi</a></li>
                </ul>
                <ul>
                    <h2>Qalereya</h2>
                    <li><a href="">Video Intro</a></li>
                    <li><a href="">Sekiller</a></li>
                </ul>
                <ul>
                    <h2>Elaqe</h2>
                    <li><a href="">Elaqe formasi</a></li>
                    <li><a href="">Google map</a></li>
                </ul>
                <div className="info2">

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

                    <div className="icon">
                        <a href=""><i class="fab fa-facebook-f"></i></a>
                        <a href=""><i class="fab fa-tripadvisor"></i></a>
                        <a href=""><i class="fab fa-foursquare"></i></a>
                    </div>
                </div>
            </ul>
         
           <header>
                <div className="head">
                    <div>
                        <a href=""><i class="fab fa-facebook-f"></i></a>
                        <a href=""><i class="fab fa-tripadvisor"></i></a>
                        <a href=""><i class="fab fa-foursquare"></i></a>
                    </div>
                    <ul className="ul1">
                        <li>Azerbaycan</li>
                        <ul className="ul2">
                            <li>English</li>
                            <li>Rusya</li>
                        </ul>
                    </ul>
                </div>
                <div className="logo">
                    <Link to="/"><img src={logo} alt="" /></Link>
                    <div className="info">

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

                    </div>
                </div>
                <nav>
                    <label htmlFor="check"><i className="fas fa-bars"></i></label> <span>Menu</span>
                    <ul>
                        <li><NavLink activeClassName="active" exact to="/">Ana Sehife</NavLink></li>
                        <li><NavLink to="/haqqimizda">Haqqimizda</NavLink></li>
                        <li><NavLink to="/menu">Menyu</NavLink></li>
                        <li><NavLink to="/qalereya">Qalereya</NavLink></li>
                        <li><NavLink to="/elaqe">Elaqe</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header
