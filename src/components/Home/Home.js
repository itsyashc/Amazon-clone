import React from "react";
import "./Home.css";
import Product from "../Product/Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/51MoowH+5nL._SX1500_.jpg"
          alt="amazon-prime-banner"
        />

        <div className="home__row">
          <Product
            id="4903850"
            title="Oppo Enco Air 2 True Wireless Earbuds with 13.4 Dynamic Driver, 80ms Low-Latency Game Mode, Bluetooth 5.2, 24hrs Battery Life, IPX4 - Blue"
            price={1999}
            rating={4}
            image="https://m.media-amazon.com/images/I/51GrHT5k7zL._SX425_.jpg"
          />
          <Product
            id="23445930"
            title="iPhone 14 Plus 256GB Purple, Cinematic mode now in 4K Dolby Vision up to 30 fps"
            price={99900}
            rating={5}
            image="https://m.media-amazon.com/images/I/61YSNhAb00L._SX466_.jpg"
          />
          <Product
            id="3254354345"
            title="All-new Kindle Paperwhite (8 GB) - Now with a 6.8' display and adjustable warm light"
            price={11999}
            rating={3}
            image="https://m.media-amazon.com/images/I/51u3LQ9tkhL._SY450_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Sony Bravia 164 cm (65 inches) 4K Ultra HD Smart LED Google TV KD-65X74K (Black)"
            price={79999}
            rating={4}
            image="https://m.media-amazon.com/images/I/71ZKGDdz1lL._SX522_.jpg"
          />
          <Product
            id="12321341"
            title="Nikon Digital Camera Z 30 kit with NIKKOR Z DX 16-50mm f/3.5-6.3 VR & NIKKOR Z DX 50-250mm f/4.5-6.3 VR - Black"
            price={89550}
            rating={2}
            image="https://m.media-amazon.com/images/I/613YqAs5n3L._SX425_.jpg"
          />
        </div>

        <div className="home__row">
          <img
            className="home__middle__img"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/vineet/Amazon-Pay-Later/Sept_22/Jupiter_22/Headers/GW-editorial_1150x323._CB611152745_.jpg"
            alt="ad"
          />
        </div>

        <div className="home__row">
          <Product
            id="49538094"
            title="MSI Modern 14, Intel i7-1195G7, 14 FHD IPS-Level 60Hz Panel Laptop (8GB/512GB NVMe SSD/Windows 10 Home/Nvidia MX450 2GB Graphics/Carbon Grey/1.3Kg), B11SBU-688IN"
            price={58799}
            rating={4}
            image="https://m.media-amazon.com/images/I/41FaF9rDOVL._SX300_SY300_QL70_FMwebp_.jpg"
          />
          <Product
            id="96329332"
            title="IFB 8kg 5 Star Fully-Automatic Front Loading Washing Machine (Senator WSS Steam, Silver, Inbuilt Heater, Aqua Energie Water Softener), Large"
            price={37999}
            rating={4}
            image="https://m.media-amazon.com/images/I/71btlBqj9OL._SY445_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903950"
            title="Autobiography of a Yogi (Complete Paperback Edition)"
            price={110}
            rating={5}
            image="https://m.media-amazon.com/images/I/41GMFzpDzuL._SX375_BO1,204,203,200_.jpg"
          />
          <Product
            id="4803150"
            title="Shri Harivansh, Shree Hita Sevak Vani (Hitamrit Nidhi) Sevak ji Maharaj."
            price={490}
            rating={5}
            image="https://m.media-amazon.com/images/I/51G6-6SUy5L._SX373_BO1,204,203,200_.jpg"
          />
          <Product
            id="29875930"
            title="Thus Spoke Zarathustra: A Book for Everyone and No One (Penguin Classics)"
            price={300}
            rating={4}
            image="https://m.media-amazon.com/images/I/51oUmIeBhaL._SX324_BO1,204,203,200_.jpg"
          />
          <Product
            id="325464345"
            title="Sanskrit Swayam Shikshak by Shripad D. Satvlekar"
            price={199}
            rating={4}
            image="https://m.media-amazon.com/images/I/51brwlMKMvL._SX335_BO1,204,203,200_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
