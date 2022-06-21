import styled from "styled-components";

export const RowSearchField = styled.div`
    box-sizing: border-box;
    position: relative;
    width: 563px;
    height: 45px;
    margin: 13px 10px;
    background-color: white;
    border-radius: 8px;
    z-index: 1;
    display: flex;
    @media (max-width:425px) {
        display: flex;
        justify-self: center;
        align-self: center;
        position: absolute;
        margin: 0 auto;
        z-index: 2;
        top: 80px;
        right: 10px;
        left: 10px;
        width: 95%;
    }
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