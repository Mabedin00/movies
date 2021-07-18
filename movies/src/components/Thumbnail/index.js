import React from "react";
import { Link } from "react-router-dom";

//Styles
import { Wrapper, Image } from "./Thumbnail.styles";

const Thumbnail = ({ image, movieId, clickable, movieTitle, character }) => (
    <Wrapper>
        {clickable ? (
            <Link to={`/movie/${movieId}`}>
                <Image clickable={clickable} src={image} alt="movie-thumbnail" />
            </Link>
        ) : (
            <Image clickable={clickable} src={image} alt="movie-thumbnail" />
        )}
        <h3> {movieTitle} </h3>
        {character ? 
            <p> {character} </p>
            :   <></>}
        
    </Wrapper>
);

export default Thumbnail;
