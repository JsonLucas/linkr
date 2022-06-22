import styled from 'styled-components';

export const Container = styled.div`
    box-sizing: border-box;
    width: 905px;
    height: 100%;
    background-color: #151515;
    position: relative;
    @media (max-width: 425px) {
        margin: 0 auto;
        width: 100%;
        height: 175px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`;

export const RowLinkrSlogan = styled.div`
    box-sizing: border-box;
    margin: 161px 144px auto;
    color: white;
    width: 442px;
    @media (max-width: 425px) {
       width: auto;
       margin : 0;
       display: flex;
       flex-direction: column;
       align-items: center;
       margin-top: 5px;
       font-family: 'Oswald', sans-serif;
    }
`;

export const LinkrTitle = styled.p`
    box-sizing: border-box;
    padding: 10px 0px 10px 0px;
    font-family: 'Passion One';
    font-style: normal;
    font-size: 106px;
    @media (max-width:425px) {
        line-height: 84px;
        padding: 0;
        font-size: 76px;
        line-height: 84px;
        letter-spacing: 0.05em;
    }
`;

export const LinkrSlogan = styled.p`
    box-sizing: border-box;
    font-family: 'Oswald', sans-serif;
    font-size: 43px;
    @media (max-width:425px) {
        width: 237px;
        font-size: 23px;
        line-height: 34px;
        text-align: center;
        color: #FFFFFF;
    }
`;
