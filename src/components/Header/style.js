import styled from "styled-components";

export const InvisibleDiv = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1;
    left: 0;
`

export const HeaderHeader = styled.header`
    font-family: 'Passion One', cursive;    
    position: fixed;
    width: 100%;
    height: 72px;
    left: 0px;
    top: 0px;
    background: #151515;
    section{
        display: flex;
        width: 100%;
        height: auto;
        height: 72px;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
`


export const HeaderTittle = styled.h3`
    margin-left: 28px;
    font-family: 'Passion One', cursive;
    font-weight: 700;
    font-size: 49px;
    color: #FFFFFF;
`

export const MenuDiv = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    margin-right: 17px;
    img {
        object-fit: cover;
        width: 53px;
        height: 53px;
        margin-left: 20px;
        border-radius: 26.5px;
    }
`

export const LogoutDiv = styled.div`
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: ${(props)=> props.hidden === true ? 'visible' : 'hidden'};
    position: absolute;
    background-color: #171717;
    color: #FFF;
    top: 62px;
    right: -40px;
    width: 150px;
    height: 47px;
    background: #171717;
    border-radius: 0px 0px 20px 20px;
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    color: #FFFFFF;
    span {
        border-radius: 0px 0px 20px 20px;
        z-index: 3;
        padding: 40px;
        margin-right: 10px;
    }
`