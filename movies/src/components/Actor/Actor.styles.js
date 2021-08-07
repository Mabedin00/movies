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
    display: block;
    width: 100%;
    height: ${({ cover }) =>
        cover
            ? ``
            : `300px`};

    :hover {
        opacity: ${({cover}) => cover ? 1 : .4};
    }

    object-fit: cover;
    border-radius: 15px;
`;
