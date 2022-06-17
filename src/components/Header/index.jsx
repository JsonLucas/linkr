import { HeaderHeader, MenuDiv, HeaderTittle } from "./style";

export default function Header() {

    return (
        <HeaderHeader>
            <section>
                <HeaderTittle>linkr</HeaderTittle>
                <MenuDiv>
                    <ion-icon name="chevron-down-outline"></ion-icon>
                    <img src={"https://www.dci.com.br/wp-content/uploads/2020/09/20490-1130x580.jpg"} alt="user-picture" />
                </MenuDiv>
            </section>
        </HeaderHeader>
    );
}