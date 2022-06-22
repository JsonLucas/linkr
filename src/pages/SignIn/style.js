import styled from "styled-components";

export const Wrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    @media (max-width: 425px) {
        margin: 0 auto;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
`;