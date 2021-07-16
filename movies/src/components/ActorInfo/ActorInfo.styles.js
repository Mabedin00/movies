import styled from "styled-components";

export const Wrapper = styled.div`
    background: black;
    background-size: cover;
    background-position: center;
    padding: 40px 20px;
    animation: animateActorInfo 1s;

    @keyframes animateActorInfo {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }

`;

export const Content = styled.div`
    display: flex;
    max-width: var(--maxWidth);
    margin: 0 auto;
    background: rgba(0,0,0,.7);
    border-radius: 20px;


    @media screen and (max-width: 768px){
        display: block;
        max-height: none;
    }

`;

export const Text = styled.div`
    width: 100%;
    padding: 20px;
    color: var(--white);
    overflow: hidden;
`;

export const Image = styled.div`
    display: block;
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 15px;
`;
