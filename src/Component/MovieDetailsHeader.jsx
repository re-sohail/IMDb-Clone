import React from "react";
import { FaStar } from "react-icons/fa";
import { MdAutoGraph } from "react-icons/md";
import { Link } from "react-router-dom";

function MovieDetailsHeader(props) {
  let { movieData } = props;
  console.log(movieData);

  return (
    <>
      <div className="px-20">
        <div className="text-white w-full h-[110px] mt-10 flex items-center justify-between">
          <div className="left flex items-start justify-center flex-col">
            <h1 className="text-5xl font-medium pb-2">
              {movieData.original_title}
            </h1>
            <div className="flex items-center justify-center gap-4">
              <h1>{movieData.release_date}</h1>
              <h1>{movieData.origin_country}</h1>
            </div>
          </div>
          <div className="right flex items-center justify-start gap-10">
            <div className="">
              <h1 className="text-sm font-normal text-[#cccccc] pb-2">
                IMDb RATING
              </h1>
              <h1 className="flex items-center justify-center gap-3 text-xl">
                <FaStar className="text-yellow-400" />{" "}
                <span className="text-2xl">
                  {movieData.vote_average !== undefined
                    ? movieData.vote_average.toFixed(1)
                    : "N/A"}
                </span>{" "}
                / 10
              </h1>
            </div>
            <div>
              <h1 className="text-sm font-normal text-[#cccccc] pb-2">
                POPULARITY
              </h1>
              <h1 className="flex items-center justify-center gap-3 text-xl">
                <MdAutoGraph className="text-red-400 text-2xl" />{" "}
                {movieData.popularity !== undefined
                  ? movieData.popularity.toFixed(0)
                  : "N/A"}
              </h1>
            </div>
          </div>
        </div>
        <div className="py-2 flex items-center justify-center gap-2">
          <div className="w-[300px] h-[500px] overflow-hidden rounded-sm">
            <img
              className="w-full h-full object-cover"
              src={`https://image.tmdb.org/t/p/original/${movieData.poster_path}`}
              alt=""
            />
          </div>
          <div className="w-[990px] h-[500px] overflow-hidden rounded-sm">
            <img
              className="w-full h-full object-cover"
              src={`https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`}
              alt=""
            />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-4 py-4">
            {movieData.genres &&
              movieData.genres.map((data) => {
                return (
                  <h1
                    key={data.id}
                    className="border py-1 px-3 rounded-[50px] cursor-pointer text-[#cccccc] border-[#D8D8D8] outline-none"
                  >
                    {data.name}
                  </h1>
                );
              })}
          </div>
        </div>
        <div className="pb-10">
            <p className="text-[#cccccc] w-[70%] text-[16px] py-4 border-b-2">{movieData.overview}</p>
            <div className="text-[#cccccc] border-b-2 w-[70%] flex items-center justify-start gap-10 py-4 ">
                <p>Movie Source</p>
                <Link target="_blank" to={`https://www.imdb.com/title/${movieData.imdb_id}`}><button className="text-blue-500 font-semibold">IMDb Link</button></Link>
            </div>
        </div>
      </div>
    </>
  );
}

export default MovieDetailsHeader;
