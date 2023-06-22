import React from "react";
import Header from "./components/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Home() {
  const [results, setResults] = React.useState([]);

  const handleSearch = () => {
    const ingredient = document.getElementById("query").value;

    fetch(`/api/recipes/${ingredient}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setResults(data));
  };

  return (
    <div className="container">
      <Header />

      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {results.length > 0 ? (
          results.map((res) => (
            <SwiperSlide>
              <div className="recipe-card">
                <p>{res.name}</p>
                <img alt={res.name} src={res.fullImage} />
              </div>
            </SwiperSlide>
          ))
        ) : (
          <div className="search-field">
            <input id="query" type="text" placeholder="Search an ingredient" />
            <button onClick={handleSearch}>Search</button>
          </div>
        )}
      </Swiper>

      {/* <div className="results-container">
        {results.length > 0 ? (
          results.map((res) => (
            <div className="recipe-card">
              <p>{res.name}</p>
              <img alt={res.name} src={res.fullImage} />
            </div>
          ))
        ) : (
          <div className="search-field">
            <input id="query" type="text" placeholder="Search an ingredient" />
            <button onClick={handleSearch}>Search</button>
          </div>
        )}
      </div> */}
    </div>
  );
}
