import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { MainTimeline, Posts } from "./style";
import Post from "./../../components/Post";
import Feed from "../../components/Feed";
import Header from "../../components/Header";

export default function Timeline() {
    const navigate = useNavigate();
    const authorization = JSON.parse(localStorage.getItem("authorization"));
    const [userInfo, setUserInfo] = useState({});
    
    useEffect(() => {
        if (!authorization) {
            navigate("/login");
        }
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
        <MainTimeline>
            <>
                <Header user={{userInfo}}/>
                <Posts>
                    <h1>timeline</h1>
                    <Post user={{userInfo}}/>
                    <Feed />
                </Posts>  
            </>
        </MainTimeline>
    )
}