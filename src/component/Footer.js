import React from "react";
import './Footer.css'
import icone1 from '../assets/facebook.png'
import icone2 from '../assets/linkedin.png'
import icone3 from '../assets/twitter.png'
import icone4 from '../assets/youtube.png'
const Footer=()=>{
    return(
        <div className="footer">
            <div className="container">
                <div className="content">
                    <a href="#">Register   </a>
                    <a href="#">Forum</a>
                    <a href="#">Affiliate</a>
                    <a href="#">FAQ</a>
                </div>
                <div className="icon">
                    <a href="#"><img src={icone1} title="icon1"/></a>
                    <a href="#"><img src={icone2} title="icon1"/></a> 
                    <a href="#"><img src={icone3} title="icon1"/></a>
                    <a href="#"> <img src={icone4} title="icon1"/></a> 
                </div>
                <p>© 2021. Foodera. All rights reserved.</p>
            </div>
        </div>
    )
}
export default Footer