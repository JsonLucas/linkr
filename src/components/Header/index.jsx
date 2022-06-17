import {HeaderHeader, MenuDiv, HeaderTittle} from "./style";

export default function Header({user}){

    return(
        <HeaderHeader>
            <section>
                <HeaderTittle>linkr</HeaderTittle>
            <MenuDiv>
                <ion-icon name="chevron-down-outline"></ion-icon>
                <img src={user.picture} alt="user-picture" />
            </MenuDiv>
            </section>
        </HeaderHeader>
    );
}