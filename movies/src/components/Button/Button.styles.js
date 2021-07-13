import styled from "styled-components";

export const Wrapper = styled.div`
    background: var(--medGray);
    padding: 10px;
`;

export const Content = styled.div`
    display: block;
    text-align: center;
    padding-top: 5px;
    background: var(--darkGray);
    width: 25%;
    min-width: 200px;
    height: 60px;
    border-radius: 30px;
    color: var(--white);
    border: 0;
    font-size: 35px;
    margin: 20px auto;
    transition: all 0.3s;
    outline: none;
    cursor: pointer;
    :hover {
        opacity: 0.8;
    }
`;
