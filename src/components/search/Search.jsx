import "../../assets/styles/search.css";
import { useState } from "react";

function Search() {
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("FORM DATA", searchInput);
  };

  return (
    <div className="input-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search your product"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button type="submit" className="searchbutton-group">
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
