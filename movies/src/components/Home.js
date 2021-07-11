import React, { useState } from "react";



//Config
import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from "../config";

//Components 
import CoverImage from "./CoverImage"
import Grid from "./Grid"

//Hook
import { useHomeFetch } from "../hooks/useHomeFetch";


//Image
import NoImage from "../images/no_image.jpg";



const Home = () => {
    const {state, loading, error } = useHomeFetch();
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
            <Grid header= "Popular Movies">
                {state.results.map(movies => (
                    <div key={movies.id}> {movies.title} </div>   
                    
                ))}
            </Grid>    
      
      
      </>
    );
}

export default Home;