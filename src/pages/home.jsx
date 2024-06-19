import React, { useState } from "react";
import "./home_style.css";
import Card from "../elements/card";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform search with searchTerm
    console.log("Search term:", searchTerm);
  };

  return (
    <div>
      {/* Header Text */}
      <h1 className="home-header-text">Where to...</h1>

      {/* Search Bar */}
      <div className="search-bar-container">
        <form onSubmit={handleSubmit} className="search-bar">
          <div className="search-input-container">
            <input
              type="text"
              className="search-input"
              placeholder="Places to go..."
              value={searchTerm}
              onChange={handleChange}
            />
            <button type="submit" className="search-button">
              Search
            </button>
          </div>
        </form>
      </div>

      {/* Card Grid */}
      <h2 className="Trips-header-text">Upcomming Trending Trips</h2>
      <div className="home-card-grid">
        <div className="home-card">
          <img src="https://images.pexels.com/photos/12365658/pexels-photo-12365658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          style={{height:"60%",width:"90%",marginTop:"0.2%",borderRadius:"10px"}}></img>
        </div>
        <div className="home-card">
          <img src="https://images.pexels.com/photos/12365658/pexels-photo-12365658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          style={{height:"60%",width:"90%",marginTop:"0.2%",borderRadius:"10px"}}></img>
        </div>
        <div className="home-card">
          <img src="https://images.pexels.com/photos/12365658/pexels-photo-12365658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          style={{height:"60%",width:"90%",marginTop:"0.2%",borderRadius:"10px"}}></img>
        </div>
        <div className="home-card">
          <img src="https://images.pexels.com/photos/12365658/pexels-photo-12365658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          style={{height:"60%",width:"90%",marginTop:"0.2%",borderRadius:"10px"}}></img>
        </div>

      </div>
    </div>
  );
}

export default Home;

