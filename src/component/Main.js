import React from 'react'
import "../style/App.scss"
import logo1 from "../img/New/download.jpg"
import logo2 from "../img/download.jpg"
import Items from './Items'
import { Link } from 'react-router-dom'

const Main = () => {
    return (
        <>
        <main>
            <div className="img-logo">
                 
                 <div>
                     <h1>Restoran haqqında</h1>
                     <p> <b>Jasmine Restoranı </b> - həm Çin mətbəxi, həm də dadlı təamları sevənlər üçün sevimli istrahət məkanıdır. 
                     Şərq stilində hazırlanmış və əntiq üsluba uyğunlaşdırılmış zövqlü interyer müasir dekor elementləri ilə ahəng təşkil edir.</p>
                     <Link className="link" to="/haqqimizda">Daha etrafli <i class="far fa-chevron-right"></i> <i class="far fa-chevron-right"></i> <i class="far fa-chevron-right"></i></Link>
                 </div>
                 <img src={logo1} alt=""/>
                 <img src={logo2} alt=""/>
            </div>
        </main>
        <Items/>
        </>
    )
}

export default Main
