import React, { useEffect, useState } from 'react'
import "../styles/RowPost.css"
import axios from 'axios';
import {API_KEY, imageUrl} from '../Constants/constants';
import Youtube from 'react-youtube'
const RowPost = ({title,isSmall,url}) => {
   const [movies,setMovies]= useState(([]))
   const [videoId,setUrlId]=useState('');
   
useEffect(()=>{
    axios.get(url).then(response=>{
        console.log("Originals",response.data);
        setMovies(response.data.results)
    }).catch((error)=>{
        //alert(error)
    })
},[])

      const options = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 0,
        },
      };

      const handleMovie= (id)=>{
           axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
           if (response.data.results.length!==0){
            setUrlId(response.data.results[0])
           }
           else{
            alert("Details Not available")
           }

           }).catch((error)=>{
            alert(error)
        })
      }
  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='posters'>
            {movies.map((movie)=>{
                return(
                <img onClick={()=>handleMovie(movie.id)} className={isSmall? 'smallPoster':'poster'} src={`${imageUrl+movie.backdrop_path}`} alt="" />
                )})}
            
           
        </div>
        {videoId &&
        <Youtube videoId={videoId.key} opts={options} />
        }
        </div>
        
  )
}

export default RowPost