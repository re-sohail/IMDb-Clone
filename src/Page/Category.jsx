import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Card from "../Component/Card";
import { Link } from "react-router-dom";

function Category() {
  let [movie, setMovie] = useState([]);
  let { type } = useParams();

  let fetchData = async () => {
    try {
      let response = await axios.get(
        `https://api.themoviedb.org/3/movie/${type}?api_key=762b1571e2fbbf4b5ba589b2fb55c995`
      );
      setMovie(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [type]);
  return (
    <div className="min-h-screen bg-black py-5 px-16">
      <h1 className="text-white font-medium uppercase text-3xl">{type}</h1>

      <div className="pt-10">
        <div className="grid grid-cols-8 gap-5">
          {movie.map((data) => {
            return (
              <Link key={data.id} to={`/movie/${data.id}`}>
              
              <div className="flex items-center justify-center">
                <Card
                  image={data.poster_path}
                  title={data.original_title}
                  date={data.release_date}
                  stars={data.vote_average}
                  overview={data.overview}
                />
              </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Category;
