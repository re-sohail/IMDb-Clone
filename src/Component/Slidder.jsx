import axios from "axios";
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import '../index.css'

function Slidder() {
  let [movieData, setMovieData] = useState([]);

  let fetchData = async () => {
    try {
      let response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=762b1571e2fbbf4b5ba589b2fb55c995");
      setMovieData(response.data.results);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Carousel
        showThumbs = {false}
        autoPlay = {true}
        transitionTime = {2}
        infiniteLoop = {true}
        showStatus = {false}
    >
      {movieData.map((data) => {
        return (
                <Link key={data.id} to={`/movie/${data.id}`}>
                <div className="realtive">
                    <div className="relative h-[70vh] w-full:">
                        <img className="h-full w-full object-cover object-top" src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} alt="" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-screen flex items-start justify-center flex-col px-20 text-white">
                        <h1 className="text-5xl font-bold">{data.original_title}</h1>
                        <div className="flex items-center justify-center gap-3 py-5">
                            <h1>{data.release_date}</h1>
                            <h1>{data.vote_count} (Votes)</h1>
                        </div>
                        <p className="text-start w-[50%]">{data.overview.slice(0, 200)+"..."}</p>
                    </div>
                </div>
                </Link>
              )}
        )
    }
    </Carousel>
  );
}

export default Slidder;
