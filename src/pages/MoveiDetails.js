import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";

const MoveiDetails = () => {
  //https://api.themoviedb.org/3/movie/{movie_id}?api_key=b80d59c33d6d57ed9c7e3713f91c188a
  const [data, setData] = useState({});
  const params = useParams();
  console.log("movie_id", params);
  const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=b80d59c33d6d57ed9c7e3713f91c188a`;
  useEffect(() => {
    async function movieDataFetch() {
      const moviedata = await fetch(url);
      const data = await moviedata.json();
      console.log("details", data);
      setData(data);
    }
    movieDataFetch();
  }, [params.id,url]);

  return (
    <section className="cardsection">
      <div
        className="card"
        style={{
          width: "100%",
          boxShadow: "0 2px 5px lightgray",
          padding: "0.5rem",
          display: "flex",
          gap: "3rem",
          justifyContent: "space-between",
        }}
      >
        <div
          className="innercard-first"
          style={{
            width: "30%",
            boxShadow: "0 2px 3px gray",
            overflow: "hidden",
            borderRadius: "9px",
            margin: "1rem",
            textAlign: "center",
          }}
        >
          <img
            style={{ width: "100%" }}
            src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
            alt="unable to display"
          />
        </div>
        <div
          className="innercard-second"
          style={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            padding: "0.5rem 1rem",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              textAlign: "left",
              fontWeight: "700",
              fontSize: "2.3rem",
            }}
          >
            {data.title}
          </h1>
          <p
            style={{
              textAlign: "left",
              lineHeight: "1.8rem",
              fontSize: "1.2rem",
            }}
          >
            {data.overview}
          </p>
          <div style={{ textAlign: "left" }}>
            <Button>Romance</Button>
            <Button>Comedy</Button>
          </div>
          <p
            style={{
              textAlign: "left",
              lineHeight: "1.2rem",
              fontSize: "1.2rem",
            }}
          >
            <svg
              style={{ width: "1.5rem", height: "1.5rem", color: "yellow" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="orange"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clip-rule="evenodd"
              />
            </svg>
            4555.555 reviews
          </p>
          <p
            style={{
              textAlign: "left",
              lineHeight: "1.2rem",
              fontSize: "1.2rem",
            }}
          >
            <strong>Runtime</strong>: 116 min.
          </p>
          <p
            style={{
              textAlign: "left",
              lineHeight: "1.2rem",
              fontSize: "1.2rem",
            }}
          >
            <strong>Budget</strong>: 0
          </p>
          <p
            style={{
              textAlign: "left",
              lineHeight: "1.2rem",
              fontSize: "1.2rem",
            }}
          >
            <strong>Revenue</strong>: 0
          </p>
          <p
            style={{
              textAlign: "left",
              lineHeight: "1.2rem",
              fontSize: "1.2rem",
            }}
          >
            <strong>Release Date</strong>: 2024-05-02
          </p>
          <p
            style={{
              textAlign: "left",
              lineHeight: "1.2rem",
              fontSize: "1.2rem",
            }}
          >
            <strong>IMDB Code</strong>: tt9466114
          </p>
        </div>
      </div>
    </section>
  );
};

export default MoveiDetails;
