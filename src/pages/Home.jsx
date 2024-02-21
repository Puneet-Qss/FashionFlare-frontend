import CardComponent from "../components/cards/CardsComponents";
import Search from "../components/search/Search";

function Home() {
  return (
    <div className="container">
      <Search />
      <div className="cards">
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
    </div>
  );
}

export default Home;
