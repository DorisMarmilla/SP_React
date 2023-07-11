import React from "react";
//import {UseDarkMode} from '../Styles/useDarkMode';

class Header extends React.Component {
 
 
    render() {

        return (
      <header>
        <nav class="nav1">
          <div class="logo">
            <img src="./img/logo.jpg" alt="" />
          </div>
          <ul>
            <li>
              <a href="#">Serbian</a>
            </li>
            <li class="underline">
              <a href="#">English</a>
            </li>
            <li class="underline">
              <a href="#">Magyar</a>
            </li>
            <li>
              {" "}
              
            </li>
          </ul>
        </nav>
        <div class="topnav" id="myTopnav">
          <a href="#home" class="active"></a>
          <a href="#news">O nama</a>
          <a href="#contact">DVG Proizvodi</a>
          <a href="#about">Brendovi</a>
          <a href="#about">Distribucija</a>
          <a href="#about">Saradnja</a>
          <a href="#about">Novosti</a>
          <a href="#about">Kontakt</a>
          <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            <i class="fa fa-bars"></i>
          </a>
        </div>
        <div class="nav2">
          <ul>
            <li class="listitem">
              <a href="#">O Nama</a>
              <span>vizija za uspeh</span>
            </li>
            <li class="listitem">
              <a href="#">DVG Proizvodi</a>
              <span>naši proizvodi</span>
            </li>
            <li class="listitem">
              <a href="#">BRENDOVI</a>
              <span>koje zastupamo</span>
            </li>
            <li class="listitem">
              <a href="#">DISTRIBUCIJA</a>
              <span>logistika i operativa</span>
            </li>
            <li class="listitem">
              <a href="#">SARADNJA</a>
              <span>proširenje ponude</span>
            </li>
            <li class="listitem">
              <a href="#">NOVOSTI</a>
              <span>aktuelnosti</span>
            </li>
            <li class="listitem">
              <a href="#">KONTAKT</a>
              <span>kontaktirajte nas</span>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
