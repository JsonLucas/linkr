import { useState } from "react";
import { useNavigate } from "react-router";
import { 
    HeaderHeader, 
    MenuDiv, 
    HeaderTittle, 
    LogoutDiv,
    InvisibleDiv
} from "./style";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import SearchSection from "../SearchSection";

export default function Header() {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const [showLogout, setshowLogout] = useState(false);
    const navigate = useNavigate();
    function showWindow() {
        showLogout ? setshowLogout(false) : setshowLogout(true);
    }
    const logoutRequest = async () => {
        try{
            localStorage.removeItem("authorization");
            navigate('/');
        }catch(e){
            console.log(e.message);
        }
    }
    return (
        <HeaderHeader>
            <section>
                <HeaderTittle onClick={() => { navigate('/timeline'); }}>linkr</HeaderTittle>
                <SearchSection />
                <MenuDiv>
                    <IoIosArrowDown style={{ position: 'absolute' }} visibility={showLogout ? 'hidden' : 'visible'} onClick={() => showWindow()} color="#fff" size="30px" name="chevron-down-outline"></IoIosArrowDown>
                    <IoIosArrowUp visibility={showLogout ? 'visible' : 'hidden'} onClick={() => showWindow()} color="#fff" size="30px" name="chevron-down-outline"></IoIosArrowUp>
                    <img onClick={() => showWindow()} src={userInfo.picture} alt="user-avatar" />
                    <LogoutDiv hidden={showLogout}>
                        <InvisibleDiv onClick={() => showWindow()}></InvisibleDiv>
                        <span onClick={logoutRequest}>Logout</span>
                    </LogoutDiv>
                </MenuDiv>
            </section>
        </HeaderHeader>
    );
}