import styled from "styled-components";

export const FeedSection = styled.section`
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 611px;
    background: #171717;
    border-radius: 16px;
    margin-bottom: 16px;
    @media (max-width:425px) {
        align-items: center;
        justify-content: center;
        border-radius: 0px;
    }
`

export const InfoDiv = styled.div`
    width: 100%;
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
    @media (max-width:425px) {
      align-self: flex-start;
    }
`

export const LinkDiv = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 503px;
    border: 1px solid #4D4D4D;
    border-radius: 11px;
    margin-bottom: 20px;
    margin-right: 18px;
    display: flex;
    img {
        width: 155px;
        height: 155px;
        border-radius: 0px 12px 13px 0px;
    }
    
    @media (max-width:425px) {
        width: 300px;
        img{
            width: 95px;
            height: 115px;
            object-fit: cover;
        }
    }
    
`

export const LinkPreviewDiv = styled.div`

    display: flex;
    padding: 20px;
    padding-right: 0px;
    flex-direction: column;
    justify-content: space-evenly;
    height: 155px;
    h4 {
        font-weight: 400;
        font-size: 16px;
    }
    h5 {
        font-weight: 400;
        font-size: 11px;
        line-height: 13px;
        color: #9B9595;
        overflow: hidden;
        word-break: break-all;
    }
    h6 {
        font-weight: 400;
        font-size: 11px;
        line-height: 13px;
        color: #CECECE;
    }

    @media (max-width:425px) {
        height: 115px;
        padding: 10px;
        h4{
            font-size: 11px;
        }
        h5, h6{
            font-size: 9px;
        }
    }
`