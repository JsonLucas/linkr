import styled from "styled-components";

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
    display: flex;
    align-items: center;
    margin-right: 17px;
    ion-icon{
        font-size: 30px;
        color: #FFF;
        margin-right: 10px;
    }
    img {
        object-fit: cover;
        width: 53px;
        height: 53px;
        border-radius: 26.5px;
    }
`