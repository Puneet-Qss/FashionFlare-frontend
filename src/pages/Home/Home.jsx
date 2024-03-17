import React, { useRef, useEffect, useState } from "react";
import bannerImage from "../../assets/images/banner.jpg";
import shoes from "../../assets/images/shoes.jpg";
import jeans from "../../assets/images/jeans.jpg";
function Home() {
  return (
    <div className="container">
      <div className="home-container">
        <div className={`banner-content`}>
          <h1>Style in Every Stitch: Your Fashion Destination!"</h1>
          <p className="subText">~FashionFlare</p>
        </div>
      </div>

      <div className="categories">
        <div className="shoes-container">
          <img src={shoes} alt="Shoes" />
        </div>
        <div className="content">
          <h2 className="heading-h2">Step into Style, Stride with Confidence!</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
            reiciendis voluptate ad error eveniet vitae mollitia quia, quaerat
            ea nesciunt natus recusandae aut, voluptatibus quae iure quos
            distinctio nisi nihil.
          </p>
        </div>
      </div>
      <div className="categories2">
        <div className="shoes-container">
          <img src={jeans} alt="Shoes" />
        </div>
        <div className="content">
          <h2 className="heading-h2">Discover Your Perfect Fit</h2>
          <p>
          Elevate your style with our latest collection of jeans designed to
        enhance your comfort and confidence. Crafted from premium denim
        materials, our jeans offer unparalleled durability and flexibility,
        ensuring you look and feel your best in every pair.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
