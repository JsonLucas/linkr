import styled from "styled-components";

export const FeedSection = styled.section`
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
    display: flex;
    flex-direction: row;
    width: 611px;
    background: #171717;
    border-radius: 16px;
    margin-bottom: 16px;
`

export const InfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    span{
        font-family: 'Lato', sans-serif;
        font-style: normal;
        font-weight: 400;
        line-height: 23px;
        cursor: pointer;
        ${({searchResult}) => searchResult 
        ? 'color: black; margin-top: 30px; font-size: 21px; z-index: 1;' 
        : 'color: white; margin-top: 20px; font-size: 19px;'}
        margin-bottom: 7px;
    }
    h2 {
        font-family: 'Lato', sans-serif;
        margin-bottom: 20px;
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 20px;
        color: #B7B7B7;
    }
`

export const ImgDiv = styled.div`
    ${({isSearchResult}) => isSearchResult 
        ? `padding: 1px;`
        : `padding: 18px;`
    }
    img {
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 50%;
    }
`

export const LinkDiv = styled.div`
    width: 503px;
    height: 155px;
    border: 1px solid #4D4D4D;
    border-radius: 11px;
    margin-bottom: 20px;
`