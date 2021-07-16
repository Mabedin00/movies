import React from "react";
import { useParams } from "react-router-dom";
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
// Components
import Grid from "./Grid";
import Spinner from "./Spinner";
import BreadCrumb from "./BreadCrumb";
import ActorInfo from "./ActorInfo";
//Hook
import { useActorFetch } from "../hooks/useActorFetch";

//Image
import NoActor from "../images/no_actor.jpg";

const ActorPage = () => {
    const { personId } = useParams();

    const { state: actor, loading, error} = useActorFetch(personId);

    if ( loading ) return <Spinner />

    if ( error ) return <div> Error </div>  
    console.log(actor);
    return (
        <>
        <BreadCrumb title = {actor.name} />
        <ActorInfo actor= {actor}></ActorInfo>

        </>
    )

}

export default ActorPage; 