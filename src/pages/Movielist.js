import React, { useState, useEffect } from "react";
import useTitle from "../hooks/useTitle";
import { Link } from "react-router-dom";

const Movielist = ({ apipath, title }) => {
  useTitle(title);
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${apipath}?api_key=b80d59c33d6d57ed9c7e3713f91c188a`;
  useEffect(() => {
    async function movieDataFetch() {
      const moviedata = await fetch(url);
      const data = await moviedata.json();
      console.log(data.results);
      setData(data.results);
    }
    movieDataFetch();
  }, [url]);
  return (
    <section className="cardsection">
      <div
        className="card"
        style={{
          boxShadow: "0 2px 5px lightgray",
          padding: "0.5rem",
          display: "flex",
          gap: "2",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {data.map((element, index) => {
          return (
           
              <div
                key={element.id}
                className="innercard"
                style={{
                  width: "20rem",
                  boxShadow: "0 2px 3px gray",
                  overflow: "hidden",
                  borderRadius: "9px",
                  margin: "1rem",
                  textAlign: "center",
                }}
              >
                 <Link to={`movie/${element.id}`}>
                <img
                  style={{ width: "100%" }}
                  src={`https://image.tmdb.org/t/p/w500/${element.poster_path}`}
                  alt="unable to display"
                /></Link>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    padding: "0.5rem 1rem",
                  }}
                >
                   <Link to={`movie/${element.id}`} style={{ textDecoration:"none",color:"#333git"}}><p
                    style={{
                      textAlign: "left",
                      fontWeight: "700",
                      fontSize: "1.2rem"
                     
                    }}
                  >
                    {element.title}
                  </p></Link>
                  <p style={{ textAlign: "left", lineHeight: "1.2rem" }}>
                    {element.overview}
                  </p>
                </div>
              </div>
           
          );
        })}
      </div>
    </section>
  );
};

export default Movielist;
