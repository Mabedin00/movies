import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100px;
    background-color: var(--darkGray);
    padding: 0 20px;
`;

export const Content = styled.div`
    position: relative;
    max-width: var(--maxWidth);
    width: 100%;
    height: 55px;
    background-color: var(--medGray);
    margin: 0 auto;
    border: 40px;
    color: var(--white);

    img {
        position: absolute;
        left: 15px;
        top: 14px;
        width: 30px;
    }

    input {
        font-size: 30px;
        position: absolute;
        left: 0;
        margin: 8px 0;
        width: 95%;
        background: transparent;
        height: 40px;
        color: var(--white);
        padding: 0 0 0 60px;
        border: 0;

        :focus {
            outline: none;
        }
    }

`;