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
import { logoutRequest } from "../../api/services";

export default function Header() {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const styleCursor = { cursor: 'pointer' };
    const [showLogout, setshowLogout] = useState(false);
    const navigate = useNavigate();
    function showWindow() {
        showLogout ? setshowLogout(false) : setshowLogout(true);
    }
    const logout = async () => {
        try{
            const authorization = JSON.parse(localStorage.getItem('authorization'));
            const { token } = authorization;
            await logoutRequest({ authorization: token });
            alert('logout efetuado.');
            localStorage.removeItem("authorization");
            navigate('/');
        }catch(e){
            if(e.response){
                alert(e.response.data);
            }
            console.log(e.message);
        }
    }
    return (
        <HeaderHeader>
            <section>
                <HeaderTittle onClick={() => { navigate('/timeline'); }}>linkr</HeaderTittle>
                <SearchSection />
                <MenuDiv style={styleCursor}>
                    <IoIosArrowDown style={{ position: 'absolute' }} visibility={showLogout ? 'hidden' : 'visible'} onClick={() => showWindow()} color="#fff" size="30px" name="chevron-down-outline"></IoIosArrowDown>
                    <IoIosArrowUp visibility={showLogout ? 'visible' : 'hidden'} onClick={() => showWindow()} color="#fff" size="30px" name="chevron-down-outline"></IoIosArrowUp>
                    <img onClick={() => showWindow()} src={userInfo.picture} alt="user-avatar" />
                    <LogoutDiv hidden={showLogout}>
                        <InvisibleDiv onClick={() => showWindow()}></InvisibleDiv>
                        <span onClick={logout}>Logout</span>
                    </LogoutDiv>
                </MenuDiv>
            </section>
        </HeaderHeader>
    );
}