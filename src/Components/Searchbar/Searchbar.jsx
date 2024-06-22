import data from "../../../public/data";
import React, { useState } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Link } from "react-router-dom";
import "./Searchbar.css";

const Searchbar = () => {
  console.log(data);

  //   useState und useEffect
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [placeholderVisible, setPlaceholderVisible] = useState(true);

  //   Placeholder onFocus leeren/füllen
  const handleFocus = () => {
    setPlaceholderVisible(false);
  };
  
  const handleBlur = () => {
    setPlaceholderVisible(true);
  };

  // Suche aller Gerichte
  const searchAll = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredData(filteredData);
    console.log(filteredData);
  };

  return (
    <section className="searchbar">
      <div className="searchbar-box">
        <SearchRoundedIcon style={{ color: "white" }} />
        <input
          onChange={searchAll}
          value={searchInput}
          placeholder={placeholderVisible ? "Search" : ""}
          type="text"
          onFocus={handleFocus}
          onBlur={handleBlur}
          name="searchbar"
          autoComplete="off"
        />
        <div
          id="results-search"
          className={searchInput < 1 ? "hidden" : "suggestions"}
        >
          {filteredData.length > 0 ? (
            filteredData.map((meal) => (
              <Link to={`/product/${meal.id}`} key={String(meal.id)}>
                {meal.name}
              </Link>
            ))
          ) : (
            <p>Keine Ergebnisse</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Searchbar;
