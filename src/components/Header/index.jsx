import { useEffect, useState } from "react";
import axios from "axios";
import { HeaderHeader, MenuDiv, HeaderTittle } from "./style";

export default function Header() {
    const authorization = JSON.parse(localStorage.getItem("authorization"));
    const [userInfo, setUserInfo] = useState({
        name: '',
        picture: ''
    })

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `${authorization}`
            }
        }
        axios.get("http://localhost:5000/getUser", config)
            .then((res) => {
                const { data } = res;
                setUserInfo(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <HeaderHeader>
            <section>
                <HeaderTittle>linkr</HeaderTittle>
                <MenuDiv>
                    <ion-icon name="chevron-down-outline"></ion-icon>
                    <img src={userInfo.picture} alt="user-picture" />
                </MenuDiv>
            </section>
        </HeaderHeader>
    );
}