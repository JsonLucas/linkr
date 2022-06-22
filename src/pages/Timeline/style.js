import styled from "styled-components";

export const MainTimeline = styled.main`
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #333333;
    margin: 0 auto;
    @media (max-width:425px) {
        padding: 0;
    }
`

export const TimelineTittle = styled.h1`
    margin-top: 90px;
    align-self: flex-start;
    margin-bottom: 45px;
    text-align: left;
    color: #FFF;
    font-family: 'Oswald', sans-serif;
    font-weight: 700;
    font-size: 43px;
    line-height: 64px;
    @media (max-width:425px) {
        margin-top: 130px;
        margin-left: 17px;
        margin-bottom: 25px;
    }
`

export const Posts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    max-width: 611px;
`