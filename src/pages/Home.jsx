import Search from "../components/search/Search";
import videoSection from "../assets/images/video.mp4";
import { useEffect, useState } from "react";
import axios from "axios";
import CardComponent from "../components/cards/CardsComponents";
function Home() {
  const [allProducts, setAllProducts] = useState();

  const allProductsFunction = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setAllProducts(response?.data);
  };
  useEffect(() => {
    allProductsFunction();
  }, []);
  return (
    <div className="container">
      <section className="videoSection">
        <video autoPlay muted loop className="video-background">
          <source src={videoSection} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-content ">
          <Search />
        </div>
      </section>

      <section className="card-section">
        <CardComponent data={allProducts} />
      </section>
    </div>
  );
}

export default Home;
