import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

function PopularMovie() {
  let [movie, setMovie] = useState([]);

  let fetchData = async () => {
    try {
      let response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=762b1571e2fbbf4b5ba589b2fb55c995"
      );
      setMovie(response.data.results);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <div className="py-10 px-10 bg-black">
        <h1 className="text-3xl font-medium pb-10 text-white">Popular</h1>
      <div className="h-auto flex items-center justify-center">
        <div className="grid grid-cols-7 gap-5">
          {movie.map((data) => {
            return (
              <>
                <Link
                  to={`/movie/${data.id}`}
                  key={data.id}
                  className="flex items-center justify-center"
                >
                  <Card image={data.poster_path} title={data.original_title} date = {data.release_date} stars = {data.vote_average} overview = {data.overview} />
                </Link>
              </>
            );
          })}
        </div>
      </div>
      </div>
    </>
  );
}
export default PopularMovie;
