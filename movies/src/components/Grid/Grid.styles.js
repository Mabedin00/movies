import styled from "styled-components";


export const Wrapper = styled.div` 
    max-width  : var(--maxWidth);
    margin: 0 auto;
    padding: 0 20px;
    background-color: var(--medGray);

    h1 {
        color: var(--medGray);

        @media screen and (max-width: 768px){
            font-size: var(--fontL);
        }
    }
`;


export const Content = styled.div`
    display: grid;
    
    //make grid responsive
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 3rem;

`;