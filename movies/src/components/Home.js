import React from "react";



//Config
import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from "../config";

//Components 
import CoverImage from "./CoverImage"
import Grid from "./Grid"
import Thumbnail from "./Thumbnail"
import Spinner from "./Spinner"
import SearchBar from "./SearchBar"

//Hook
import { useHomeFetch } from "../hooks/useHomeFetch";


//Image
import NoImage from "../images/no_image.jpg";



const Home = () => {
    const {state, loading, error, setSearchTerm} = useHomeFetch();
    console.log(state.results[0]);
    return (
        <>
            {state.results[0] ? (
            <CoverImage
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                title={state.results[0].original_title}
                text={state.results[0].overview}
            />
            ) : null}

            <SearchBar setSearchTerm= {setSearchTerm} />

            <Grid header= "Popular Movies">
                {state.results.map(movie => (
                    <Thumbnail 
                     key={movie.id}
                     clickable
                     image = {
                         movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage
                     }
                     movieId = {movie.id}
                    />
                ))}
            </Grid>    
            <Spinner />
      </>
    );
}

export default Home;