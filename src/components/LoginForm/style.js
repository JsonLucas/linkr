import styled from "styled-components";

export const Container = styled.div`
    box-sizing: border-box;
    height: 100%;
    width: 535px;
    background-color: #333333;
    @media (max-width: 425px) {
        width: 100%;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
    }
`;

export const RowForm = styled.form`
    box-sizing: border-box;
    width: 90%;
    margin: 191px auto;
`;

export const RowField = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 5px 0px 5px 0px;
`;

export const Field = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: 55px;
    padding-left: 17px;
    border: none;
    border-radius: 5px;
    @media (max-width:425px) {
            ::placeholder{
            font-family: 'Oswald', sans-serif; 
            font-weight: 700;
            font-size: 22px;
            color: #9F9F9F;
        }
    }
`;

export const SubmitButton = styled.button`
    box-sizing: border-box;
    width: 100%;
    padding: 15px 10px 15px 10px;
    border: none;
    border-radius: 5px;
    background-color: #1877F2;
    color: white; 
    font-weight: bold; 
    font-family: 'Oswald', sans-serif; 
    font-size: 17px;
    div {
        width: 20%;
        margin: auto;
    }
    @media (max-width:425px) {
        font-size: 22px;
    }
`; 

export const RowSwitchPage = styled.p`
    box-sizing: border-box;
    text-align: center;
    padding: 10px 0px 10px 0px;
    color: white;
    font-size: 20px;
    text-decoration: underline;
    @media (max-width:425px) {
        font-family: 'Lato', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 20px;
        text-decoration-line: underline;
        color: #FFFFFF;
    }
`;