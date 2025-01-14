import React from "react";
import Search from "../components/Search";
import Dropdown from "../components/Dropdown";
import Countries from "../components/Countries";

const HomePage = ({
  allCountries,
  filteredBySearch,
  filterByRegion,
  loading,
}) => {
  return (
    <div>
      <div className="d-flex align-items-center m-5 justify-content-between search-drop">
        <Search filteredBySearch={filteredBySearch} />
        <Dropdown filterByRegion={filterByRegion} />
      </div>
      {loading && <div className="loader">🌎</div>}
      <Countries allCountries={allCountries} />
    </div>
  );
};

export default HomePage;
