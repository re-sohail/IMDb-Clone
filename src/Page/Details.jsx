import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MovieDetailsHeader from '../Component/MovieDetailsHeader'

function Details() {
  let [movieDetail, setMovieDetail] = useState([])
  let {id} = useParams()

  let fetchData = async()=>{
    try {
      let response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=762b1571e2fbbf4b5ba589b2fb55c995`)
      setMovieDetail(response.data)
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchData()
  },[id])

  return (
    <>
    <MovieDetailsHeader movieData = {movieDetail}/>
    </>
  )
}

export default Details