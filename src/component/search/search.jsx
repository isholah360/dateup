import "./search.css";
import { useState } from "react";

function Search() {
  const [selectedNumber, setSelectedNumber] = useState(1);

  const handleNumberChange = (event) => {
    const newNumber = parseInt(event.target.value, 10);
    setSelectedNumber(newNumber);
  };
  const [selectedRegion, setSelectedRegion] = useState("Africa");

  const handleRegionChange = (event) => {
    const newRegion = event.target.value;
    setSelectedRegion(newRegion);
  };
  return (
    <div>
      <div className="search-bar-container">
        <div className="complete-searchbar">
          <label htmlFor=""> I am a</label>
          <div className="search-bar first">
            <div className="select-lang">Select Gender</div>
            <div className="the-selection">
              <select
                className="options"
                name="Select Gender"
                id=""
                placeholder="Select Gender"
              >
                <option value="" className="first-option"></option>
                <option value="" className="sec-option">
                  Male
                </option>
                <option value="" className="sec-option">
                  Female
                </option>
              </select>
            </div>
          </div>
        </div>

        <div className="complete-searchbar second">
          <label htmlFor="">Looking for</label>
          <div className="search-bar">
            <div className="select-lang">Select Gender</div>
            <div className="the-selection">
              <select
                className="options"
                name="Select Gender"
                id=""
                placeholder="Select Gender"
              >
                <option value="" className="first-option"></option>
                <option value="" className="sec-option">
                  Male
                </option>
                <option value="" className="sec-option">
                  Female
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="complete-searchbar second mobile">
        <label htmlFor="">Age</label>
          <div className="search-bar">
            <select
              id="numberSelector"
              value={selectedNumber}
              onChange={handleNumberChange}
            >
              {[...Array(200).keys()].map((number) => (
                <option key={number + 1} value={number + 1}>
                  {number + 1}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="complete-searchbar second mobile">
        <label htmlFor="">Region</label>
          <div className="search-bar">
            <select
              id="regionSelector"
              value={selectedRegion}
              onChange={handleRegionChange}
            >
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="South America">South America</option>
              <option value="Arab World">Arab World</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>

        <div className="complete-date">
          <label htmlFor="">Age</label>
          <div className="search-bar">
            <select
              id="numberSelector"
              value={selectedNumber}
              onChange={handleNumberChange}
            >
              {[...Array(200).keys()].map((number) => (
                <option key={number + 1} value={number + 1}>
                  {number + 1}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="complete-date select-region">
          <label htmlFor="">Region</label>
          <div className="search-bar">
            <select
              id="regionSelector"
              value={selectedRegion}
              onChange={handleRegionChange}
            >
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="South America">South America</option>
              <option value="Arab World">Arab World</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>
        <div className="search-partner-button">
            <button>Find Your Partner</button>
        </div>
      </div>
    </div>
  );
}

export default Search;
