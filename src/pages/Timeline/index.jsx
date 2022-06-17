import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import { MainTimeline, Posts } from "./style";
import Post from "./../../components/Post";
import Feed from "../../components/Feed";
import Header from "../../components/Header";

export default function Timeline() {
    const navigate = useNavigate();
    const authorization = JSON.parse(localStorage.getItem("authorization"));
    if (!authorization) {
        navigate('/login');
    }
    const [userInfo, setUserInfo] = useState({
        name: '',
        picture: ''
    });
    const [counter, setCounter] = useState(0);
    console.log(counter);

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
        <MainTimeline>
            <Header userInfo={userInfo} />
            <Posts>
                <h1>timeline</h1>
                <Post userInfo={userInfo} setCounter={() => setCounter(counter + 1)} />
                <Feed counter={counter} />
            </Posts>
        </MainTimeline>
    )
}