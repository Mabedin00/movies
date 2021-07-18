import React from "react";
import { Link } from "react-router-dom";
//Styles
import { Wrapper, Image } from "./Actor.styles";

const Actor = ({ name, character, imageUrl, clickable, personId, cover }) => (
    <Wrapper>
        {clickable ? (
            <Link to={`/actor/${personId}`}>
                <Image cover={cover} src={imageUrl} alt="actor-thumb" />
            </Link>
        ) : (
            <Image cover={cover} src={imageUrl} alt="movie-thumbnail" />
        )}
        <h3> {name} </h3>
        <p> {character} </p>
    </Wrapper>
);

export default Actor;
