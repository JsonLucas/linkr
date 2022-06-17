import { useNavigate } from "react-router-dom";

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
    return (
        <MainTimeline>
            <Header />
            <Posts>
                <h1>timeline</h1>
                <Post />
                <Feed />
            </Posts>
        </MainTimeline>
    )
}