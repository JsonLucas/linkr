import { HeaderHeader, MenuDiv, HeaderTittle } from "./style";

export default function Header({ userInfo }) {

    return (
        <HeaderHeader>
            <section>
                <HeaderTittle>linkr</HeaderTittle>
                <MenuDiv>
                    <ion-icon name="chevron-down-outline"></ion-icon>
                    <img src={userInfo.picture} alt="user-avatar" />
                </MenuDiv>
            </section>
        </HeaderHeader>
    );
}