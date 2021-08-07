import React from "react";
//Components
import Thumbnail from "../Thumbnail";
//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
//Image 
import NoImage from "../../images/no_image.jpg";
//Styles 
import { Wrapper, Content, Text } from "./MovieInfo.styles";

const MovieInfo = ({ movie }) => (
    <Wrapper backdrop={movie.backdrop_path}>
        <Content>
            <Thumbnail
                image={
                    movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage
                }
                clickable={false}
            />
            <Text>
                <h1>{movie.title}</h1>
                <h3>Synopsis</h3>
                <p>{movie.overview}</p>
                
                <div className="rating-directors">
                    <div>
                        <h3> Rating </h3>
                        <div className="score">{movie.vote_average}</div>
                    </div>
                    <div className="director">
                        <h3> Director{(movie.directors != undefined && movie.directors.length) > 1 ? 's' : '' } </h3>
                        { (movie.directors != undefined) ?
                            movie.directors.map(director => (
                                <p  key = {director.credit_id}> {director.name} </p> 
                        )) : <p></p>
                    }
                    </div>
                </div>


            </Text>
        </Content>
    </Wrapper> 
)

export default MovieInfo;