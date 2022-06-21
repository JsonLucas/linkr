import styled from "styled-components";

export const PostSection = styled.section`
    display: flex;
    width: 611px;
    height: 209px;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    margin-bottom: 29px;
    @media (max-width:425px) {
        align-items: center;
        justify-content: center;
        width: 100%;
    }
`

export const ImgDiv = styled.div`
padding: 18px;
    img{
        border-radius: 26.5px;
        width: 50px;
        height: 50px;
        object-fit: cover;
    }
    @media (max-width:425px) {
        display: none;
    }
`

export const InputForm = styled.form`
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-right: 20px;
    gap: 5px;
    h2 {
        font-family: 'Lato', sans-serif;
        font-style: normal;
        margin-top: 20px;
        font-weight: 300;
        font-size: 20px;
        line-height: 24px;
        color: #707070;
    }
    button {
        font-family: 'Lato', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        color: #FFFFFF;
        justify-content: center;
        align-items: center;
        display: flex;
        align-self: flex-end;
        width: 112px;
        height: 31px;
        background: #1877F2;
        border-radius: 5px;
        border: none;
    }
    @media (max-width:425px) {
        margin: 0;
        padding: 10px;
        align-items: center;
        justify-content: center;
        width: 100%;
        button{
            width: 112px;
            height: 22px;
        }
    }
`

export const UrlInput = styled.input`
    width: 503px;
    height: 30px;
    background: #EFEFEF;
    border-radius: 5px;
    border: none;
    padding: 12px;
    ::placeholder{
        color: #949494;
    }
    @media (max-width:425px) {
        width: 100%;
    }
`

export const ComentInput = styled.textarea`
    width: 502px;
    height: 66px;
    padding: 12px;
    background: #EFEFEF;
    border-radius: 5px;
    border: none;
    resize: none;
    ::placeholder {
        align-self: center;
        color: #949494;
    }
    @media (max-width:425px) {
        width: 100%;
    }
`