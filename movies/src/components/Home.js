import React from "react";

//Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

//Components
import CoverImage from "./CoverImage";
import Grid from "./Grid";
import Thumbnail from "./Thumbnail";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import Button from "./Button";

//Hook
import { useHomeFetch } from "../hooks/useHomeFetch";

//Image
import NoImage from "../images/no_image.jpg";

const Home = () => {
    const {
        state,
        loading,
        error,
        setSearchTerm,
        searchTerm,
        setIsLoadingMore,
    } = useHomeFetch();

    if (error) return <div>Something went wrong</div>

    return (
        <>
            {!searchTerm && state.results[0] ? (
                <CoverImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                    title={state.results[0].original_title}
                    text={state.results[0].overview}
                />
            ) : null}

            <SearchBar setSearchTerm={setSearchTerm} />

            <Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
                {state.results.map((movie) => (
                    <div>
                        <Thumbnail
                            key={movie.id}
                            clickable
                            image={
                                movie.poster_path
                                    ? IMAGE_BASE_URL +
                                      POSTER_SIZE +
                                      movie.poster_path
                                    : NoImage
                            }
                            movieId={movie.id}
                        />
                        <h3> {movie.original_title} </h3>
                    </div>
                ))}
            </Grid>
            {loading && <Spinner />}
            {state.page < state.total_pages && !loading && (
                <Button text="Load More" callback = {() => setIsLoadingMore(true)   }/>
            )}
        </>
    );
};

export default Home;
