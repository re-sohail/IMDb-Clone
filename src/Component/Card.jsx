import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';


function Card(props) {
  let [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false)
    },2000)
  },[])

  return (
    <>
    {
      isLoading
      ?
      <div className="w-[160px] h-[220px]">
        <SkeletonTheme color='#202020' highlightColor="#999999">
          <Skeleton height={220}  duration={2}/>
        </SkeletonTheme>
      </div>
      :
      <div className="w-[160px] h-[220px] relative hover:scale-110 transition-all duration-500">
          <img
            className="w-full h-full object-cover rounded-[5px]"
            src={`https://image.tmdb.org/t/p/original/${props.image}`}
            alt=""
          />

          <div className="px-2 pb-2 absolute inset-0 bg-black bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-700 flex items-start justify-end flex-col">
            <h1 className="text-white text-sm">{props.title}</h1>
            <div className="flex items-center justify-between w-full py-2">
              <h1 className="text-white text-[10px]">{props.date}</h1>
              <h1 className="text-white text-[10px] flex items-center justify-center gap-1">{props.stars} <FaStar /></h1>
            </div>
            <h1 className="text-white text-[10px]">{props.overview.slice(0,70)+"..."}</h1>
          </div>
        </div>
    }
    </>
  );
}

export default Card;
