import React from "react";
//Component
import Actor from "../Actor";
//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
//Image
import NoActor from "../../images/no_actor.jpg";
//Styles
import { Wrapper, Content, Text } from "./ActorInfo.styles";

const ActorInfo = ({ actor }) => (
    <Wrapper>
        <Content>
            {/* <Image src= {`${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`} alt="actor-thumb"  /> */}
            <Actor
                imageUrl={
                    actor.profile_path
                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                        : NoActor
                }
                cover
            />
            <Text>
                <h1>{actor.name}</h1>
                <h3>Biography</h3>
                <p>{actor.biography}</p>
            </Text>
        </Content>
    </Wrapper>
);

export default ActorInfo;
