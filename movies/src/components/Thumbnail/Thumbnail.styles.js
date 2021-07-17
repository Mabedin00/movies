import styled from "styled-components";


export const Wrapper = styled.div`
    color: var(--white);
    background: var(--darkGray);
    border-radius: 20px;
    padding: 5px;
    text-align: center;
    h3{
        margin: 10px 0 0 0;

    }
    p {
        margin: 5px 0;
    }




`;


export const Image = styled.img`
    width: 100%;
    max-width: 720px;
    transition: all .3s;
    object-fit: cover;
    border-radius: 20px;
    animation: animateThumbnail .5s;

    :hover {
        opacity: .4;
    }

    @keyframes animateThumbnail {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }

`;

