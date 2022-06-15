import styled from "styled-components";

export const Container = styled.div`
    box-sizing: border-box;
    height: 100%;
    width: 535px;
    background-color: #333333;
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
    padding: 15px 10px 15px 10px;
    border: none;
    border-radius: 5px;
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
`; 

export const RowSwitchPage = styled.p`
    box-sizing: border-box;
    text-align: center;
    padding: 10px 0px 10px 0px;
    color: white;
    font-size: 20px;
    text-decoration: underline;
`;