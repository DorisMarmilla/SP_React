import React from "react";
import  ImageSlider  from "../components/ImageSlider";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import CardSwiper from "../components/CardSwiper";


class Home extends React.Component {
  render() {
    const slides = [
      {
        url: "https://www.pixelstalk.net/wp-content/uploads/2016/06/HD-Semi-Truck-Wallpapers.jpg",
        title: "Truck",
      },
      {
        url: "https://th.bing.com/th/id/OIP.PIAOG4Q23yWXl4oO6b_9AAHaEu?pid=ImgDet&rs=1",
        title: "Makeup",
      },
      {
        url: "https://png.pngtree.com/thumb_back/fw800/background/20190221/ourmid/pngtree-delivery-banner-poster-background-image_12237.jpg",
        title: "Truck2",
      },
    ];
    const containerStyles = {
        //width: "500px",
        height: "580px",
        margin: "0 auto",
      };
    return (
      <main>
        <section class="secton1">
          <div class="firstSlider" style={containerStyles}>
          <ImageSlider slides={slides} />
          </div>
        </section>
        <section class="section2">
          <img src="./img/Rectangle 124.png" alt="" />
          <div class="company">
            <h1>DVG Company</h1>
            <img class="line" src="./img/Rectangle 126.png" alt="" />
            <h2>Veleprodaja i maloprodaja kozmetike i kućne hemija</h2>
            <img class="line" src="./img/Rectangle 127.png" alt="" />
            <p>
              DVG Company d.o.o. je trgovinsko preduzeće osnovano 2008. godine u
              Subotici. Prvenstvena delatnost kompanije je veleprodaja kozmetike
              i kućne hemije. U potpunosti je u privatnom vlasništvu, sa
              sedištem u Subotici. Tu se nalazi distrubutivni centar i poslovne
              prostorije, sa ukupno 3000m2 magacinskog prostora koji zadovoljava
              sve segmente u pogledu smeštaja, čuvanja i plasiranja robe.
            </p>
            <button>Saznajte više o nama</button>
          </div>
        </section>
        <section class="section3">
          <h1>POUZDANA DISTRIBUCIJA</h1>
          <img src="./img/Rectangle 135.png" alt="" />
        </section>
        <section class="section4">
          <div class="images">
            <div class="card">
              <img class="mainimg" src="./img/Rectangle 128.png" alt="" />
              <h2>POSTANI NAŠ PARTNER</h2>
              <img class="line" src="./img/Rectangle 131.png" alt="" />
            </div>
            <div class="card">
              <img class="mainimg" src="./img/Rectangle 129.png" alt="" />
              <h2>NAŠI PROIZVODI</h2>
              <img class="line" src="./img/Rectangle 131.png" alt="" />
            </div>
            <div class="card">
              <img class="mainimg" src="./img/Rectangle 130.png" alt="" />
              <h2>UVOZ IZ MAĐARSKE</h2>
              <img class="line" src="./img/Rectangle 131.png" alt="" />
            </div>
          </div>
          <div class="text">
            <h1>DVG Company</h1>
            <h2>u brojkama</h2>
            <img src="./img/Rectangle 135.png" alt="" />
          </div>
        </section>
        <section class="section5">
          <div class="numbers">
            <div class="number">
              <h2>3.000m2</h2>
              <span>Magacinskog prostora</span>
            </div>
            <img src="./img/Line 11.png" alt="" />
            <div class="number">
              <h2>20</h2>
              <span>Vozila</span>
            </div>
            <img src="./img/Line 11.png" alt="" />
            <div class="number">
              <h2>8</h2>
              <span>Komercijalista</span>
            </div>
            <img src="./img/Line 11.png" alt="" />
            <div class="number">
              <h2>170</h2>
              <span>Brendova</span>
            </div>
          </div>
        </section>
        <section class="section6">
          <div class="product">
            <h2>Naši proizvodi</h2>
            <p>
              Naše proizvode DVG Cosmetics odlikuje visok kvalitet kojim se
              dobija kompletna nega lica I tela. Uspeli smo da uskladimo
              kvalitet i cenu, što su prepoznali i našI kupci.
            </p>
          </div>
          <div class="wrapper">
            <CardSwiper/>
          </div>
        </section>
        <section class="section7">
          <h2>Istaknuti brendovi za koje radimo distribuciju</h2>

          <div class="brands">
            <div class="logoi">
              <img src="./img/logoi-04.png" alt="" />
              <h3>Dove</h3>
            </div>
            <div class="logoi">
              <img src="./img/logoi-03.png" alt="" />
              <h3>Nivea</h3>
            </div>
            <div class="logoi">
              <img src="./img/logoi-05.png" alt="" />
              <h3>Palmolive</h3>
            </div>
            <div class="logoi">
              <img src="./img/logoi-01.png" alt="" />
              <h3>Vanish</h3>
            </div>
            <div class="logoi">
              <img src="./img/logoi-02.png" alt="" />
              <h3>Ajax</h3>
            </div>
            <div class="logoi">
              <img src="./img/logoi-06.png" alt="" />
              <h3>Cif</h3>
            </div>
          </div>
          <button>Svi brendovi u našem portfoliu</button>
        </section>
      </main>
    );
  }
}

export default Home;
