import React from "react";
//Styles
import { Wrapper, Content } from "./ActorInfoBar.styles";

const ActorInfoBar = ({ birthday, birthplace, credits}) => (
    <Wrapper>
        <Content>
            <div className="column">
                <p>Birthday: {birthday} </p>
            </div>
            <div className="column">
                <p>Birth Place: {birthplace} </p>
            </div>
            <div className="column">
                <p>Known Credits: {credits} </p>
            </div>
        </Content>
    </Wrapper>
)

export default ActorInfoBar;