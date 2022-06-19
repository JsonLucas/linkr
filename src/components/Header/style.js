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

export const RowSearchField = styled.div`
    box-sizing: border-box;
    position: relative;
    width: 563px;
    height: 45px;
    margin: 13px auto;
    background-color: white;
    border-radius: 8px;
    z-index: 1;
    display: flex;
`;

export const SearchField = styled.input`
    box-sizing: border-box;
    padding: 10px;
    width: 90%;
    height: 100%;
    border: none;
    border-radius: 8px;
    &:focus{
        outline: 0;
    }
`;

export const SectionIconField = styled.div`
    box-sizing: border-box;
    width: 10%;
    height: 100%;
    position: relative;
    border-radius: 8px;
    div{
        position: absolute;
        top: 20%;
        left: 25%;
    }
`;

export const SearchResults = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 5px;
    background-color: rgb(231, 231, 231);
    border-radius: 0px 0px 8px 8px;
    ${({resultCount}) => resultCount > 4 ? 'overflow-y: scroll;': '' }
    ${({hidden}) => hidden ? 'display: none;' : ''}
    position: absolute;
    top: 92%;
    h2{
        width: 5%;
        margin: auto;
    }
`;

export const SingleSearchResult = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 5px 0px 5px 0px;
    display: flex;
`;