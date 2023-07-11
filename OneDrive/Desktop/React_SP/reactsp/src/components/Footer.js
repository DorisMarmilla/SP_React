import React from "react";

class Footer extends React.Component {
    render () {
        return (
            
   <><footer>
                <div class="footer1">
                    <div> <img class="logo2" src="./img/Frame.png" alt="" /></div>
                    <div class="company">
                        <p class="dvg">D.V.G. COMPANY</p>
                        <p class="dvg-information1"> <img src="./img/Frameadress.png" alt="" /> Čantavirski put bb <br></br>
                            24000 Subotica, Srbija <br></br>
                        </p> <br></br>
                        <p class="dvg-information2"><img src="./img/Framephone.png" alt="" /> +381 24 568 555</p><br></br>

                        <p class="dvg-information3"><img src="./img/Frameemail.png" alt="" /> office@dvgcompany.com</p>

                    </div>
                    <div class="list">
                    <ul>
                        <li><a href="">O NAMA</a></li>
                        <li><a href="">DVG PROIZVODI</a></li>
                        <li><a href="">BRENDOVI</a></li>
                        <li><a href="">DISTRIBUCIJA</a></li>
                        <li><a href="">SARADNJA</a></li>
                        <li><a href="">NOVOSTI</a></li>
                        <li><a href="">KONTAKT</a></li>
                    </ul>
                </div>
                <div class="social">
                    <p>Pratite nas: </p>
                    <ul class="social_icons">
                        <li><a href=""><img src="./img/Framefacebook.png" alt="" /></a></li>
                        <li><a href=""><img src="./img/Frametwitter.png" alt="" /></a></li>
                        <li><a href=""><img src="./img/FrameYouTube.png" alt="" /></a></li>
                        <li><a href=""><img src="./img/Framemess.png" alt="" /></a></li>
                    </ul>
                </div>
            </div>
            <div class="footer2">
            <p class="copyright">Copyright © 2021 DVG Company, Subotica d.o.o. Sva prava zadržana.</p>
            <p><a href="">Privatnost korišćenja</a></p>
            <p><a href="">Uslovi korišćenja</a></p>
            <span>Powered by: <a href="">StudioPresent</a></span>
        </div>

    </footer></>
       
        );
    }
}

export default Footer;