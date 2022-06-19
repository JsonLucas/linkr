import { HeaderHeader, MenuDiv, HeaderTittle, LogoutDiv, InvisibleDiv } from "./style";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Header({ userInfo }) {
    const [showLogout, setshowLogout] = useState(false);
    const navigate = useNavigate();
    function showWindow() {
            showLogout ? setshowLogout(false) : setshowLogout(true);
    }

    return (
        <HeaderHeader>
            <section>
                <HeaderTittle>linkr</HeaderTittle>
                <MenuDiv>
                    <IoIosArrowDown style={{ position: 'absolute' }} visibility={showLogout ? 'hidden' : 'visible'} onClick={() => showWindow()} color="#fff" size="30px" name="chevron-down-outline"></IoIosArrowDown>
                    <IoIosArrowUp visibility={showLogout ? 'visible' : 'hidden'} onClick={() => showWindow()} color="#fff" size="30px" name="chevron-down-outline"></IoIosArrowUp>
                    <img onClick={() => showWindow()} src={userInfo.picture} alt="user-picture" />
                    <LogoutDiv hidden={showLogout}>
                        <InvisibleDiv onClick={() => showWindow()}></InvisibleDiv>
                        <span onClick={() => { localStorage.removeItem("authorization"); navigate('/') }}>Logout</span>
                    </LogoutDiv>
                </MenuDiv>
            </section>
        </HeaderHeader>
    );
}