import styled from "styled-components";

export const PostSection = styled.section`
    display: flex;
    width: 611px;
    height: 209px;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    margin-bottom: 29px;
`

export const ImgDiv = styled.div`
padding: 18px;
    img{
        border-radius: 26.5px;
        width: 50px;
        height: 50px;
    }
`

export const InputForm = styled.form`
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-right: 20px;
    justify-content: space-evenly;
    h2 {
        margin-top: 5px;
        font-family: 'Lato', sans-serif;
        font-style: normal;
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
        margin-bottom: 5px;
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
`